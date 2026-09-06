// Per-page gzipped JS/CSS budget check, run against a built `dist/`.
// For every dist/**/*.html: collect <script src>, <link rel="stylesheet">,
// <link rel="modulepreload">, plus inline <script>/<style> bytes, follow
// static imports one level down, gzip each unique file once, and sum per
// page against the budget in CLAUDE.md (40KB JS, 100KB CSS+JS gzipped).
//
// Usage: node scripts/check-budget.mjs (after `astro build`)

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join, dirname, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(root, 'dist');

const JS_BUDGET = 40 * 1024;
const TOTAL_BUDGET = 100 * 1024;

if (!existsSync(distDir)) {
    console.error('dist/ not found — run `astro build` first.');
    process.exit(1);
}

function walk(dir) {
    const out = [];
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isDirectory()) out.push(...walk(full));
        else out.push(full);
    }
    return out;
}

const htmlFiles = walk(distDir).filter((f) => extname(f) === '.html');

// Resolve an href/src from an HTML (or JS) file to an absolute dist path.
// Ignores external URLs (http(s):, //) and data: URIs.
function resolveRef(fromFile, ref) {
    if (!ref || /^(https?:)?\/\//.test(ref) || ref.startsWith('data:')) {
        return null;
    }
    const clean = ref.split('#')[0].split('?')[0];
    const abs = clean.startsWith('/')
        ? join(distDir, clean)
        : join(dirname(fromFile), clean);
    return existsSync(abs) && statSync(abs).isFile() ? abs : null;
}

function findAll(text, regex) {
    const out = [];
    let m;
    while ((m = regex.exec(text)) !== null) out.push(m);
    return out;
}

// One level of static import-following from a JS entry file.
function staticImports(jsFile) {
    const text = readFileSync(jsFile, 'utf8');
    const specs = [
        ...findAll(text, /import\s+[^'"]*from\s*['"]([^'"]+)['"]/g),
        ...findAll(text, /import\(['"]([^'"]+)['"]\)/g),
        ...findAll(text, /import\s*['"]([^'"]+)['"]/g)
    ].map((m) => m[1]);
    return specs
        .map((s) => resolveRef(jsFile, s))
        .filter((f) => f && extname(f) === '.js');
}

const gzipCache = new Map();
function gzipSize(file) {
    if (gzipCache.has(file)) return gzipCache.get(file);
    const size = gzipSync(readFileSync(file)).length;
    gzipCache.set(file, size);
    return size;
}

const results = [];

for (const html of htmlFiles) {
    const text = readFileSync(html, 'utf8');
    const jsFiles = new Set();
    let inlineJsBytes = 0;
    let inlineCssBytes = 0;
    const cssFiles = new Set();

    for (const m of findAll(text, /<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        const [, attrs, body] = m;
        const srcMatch = attrs.match(/\bsrc=["']([^"']+)["']/);
        if (srcMatch) {
            const resolved = resolveRef(html, srcMatch[1]);
            if (resolved) jsFiles.add(resolved);
        } else if (body.trim()) {
            inlineJsBytes += gzipSync(Buffer.from(body)).length;
        }
    }

    for (const m of findAll(text, /<link\b([^>]*)>/gi)) {
        const attrs = m[1];
        const rel = attrs.match(/\brel=["']([^"']+)["']/)?.[1];
        const href = attrs.match(/\bhref=["']([^"']+)["']/)?.[1];
        if (!href) continue;
        if (rel === 'stylesheet') {
            const resolved = resolveRef(html, href);
            if (resolved) cssFiles.add(resolved);
        } else if (rel === 'modulepreload') {
            const resolved = resolveRef(html, href);
            if (resolved && extname(resolved) === '.js') jsFiles.add(resolved);
        }
    }

    for (const m of findAll(text, /<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
        if (m[1].trim()) inlineCssBytes += gzipSync(Buffer.from(m[1])).length;
    }

    // Follow one level of static imports from each referenced JS entry.
    for (const jsFile of [...jsFiles]) {
        for (const imported of staticImports(jsFile)) jsFiles.add(imported);
    }

    const jsBytes =
        inlineJsBytes + [...jsFiles].reduce((sum, f) => sum + gzipSize(f), 0);
    const cssBytes =
        inlineCssBytes + [...cssFiles].reduce((sum, f) => sum + gzipSize(f), 0);
    const totalBytes = jsBytes + cssBytes;

    results.push({
        page: '/' + relative(distDir, html),
        jsBytes,
        cssBytes,
        totalBytes,
        overJs: jsBytes > JS_BUDGET,
        overTotal: totalBytes > TOTAL_BUDGET
    });
}

results.sort((a, b) => b.totalBytes - a.totalBytes);

function kb(bytes) {
    return (bytes / 1024).toFixed(1) + 'KB';
}

console.log(
    `\n${'page'.padEnd(40)} ${'js'.padStart(10)} ${'css'.padStart(10)} ${'total'.padStart(10)}`
);
for (const r of results) {
    const flag = r.overJs || r.overTotal ? '  OVER BUDGET' : '';
    console.log(
        `${r.page.padEnd(40)} ${kb(r.jsBytes).padStart(10)} ${kb(r.cssBytes).padStart(10)} ${kb(r.totalBytes).padStart(10)}${flag}`
    );
}

const over = results.filter((r) => r.overJs || r.overTotal);
if (over.length > 0) {
    console.error(
        `\ncheck-budget failed: ${over.length} page(s) over budget (${kb(JS_BUDGET)} JS / ${kb(TOTAL_BUDGET)} total, gzipped).`
    );
    process.exit(1);
}

console.log(
    `\ncheck-budget OK (${results.length} page(s), all within ${kb(JS_BUDGET)} JS / ${kb(TOTAL_BUDGET)} total).`
);
