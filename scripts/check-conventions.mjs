// Walks src/**, enforcing conventions from CLAUDE.md that can't be expressed
// as a type or a lint rule. Each check honors a trailing
// `/* allow-<id>: reason */` comment on the flagged line as an escape hatch.
//
// Usage: node scripts/check-conventions.mjs

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const srcDir = join(root, 'src');

function walk(dir) {
    const out = [];
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        const stat = statSync(full);
        if (stat.isDirectory()) {
            out.push(...walk(full));
        } else {
            out.push(full);
        }
    }
    return out;
}

const allFiles = walk(srcDir);
const astroFiles = allFiles.filter((f) => extname(f) === '.astro');
const mdxFiles = allFiles.filter((f) => extname(f) === '.mdx');
const cssFiles = allFiles.filter(
    (f) => extname(f) === '.css' && basename(f) !== 'global.css'
);
const tsAstroFiles = allFiles.filter((f) =>
    ['.astro', '.ts', '.js'].includes(extname(f))
);

/** @type {{id: string, file: string, line: number, message: string}[]} */
const violations = [];
/** @type {{id: string, file: string, line: number, message: string}[]} */
const warnings = [];

function rel(file) {
    return relative(root, file);
}

function allowed(line, id) {
    return line.includes(`allow-${id}:`);
}

function scanLines(file, regex, id, message, sink = violations) {
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, i) => {
        if (regex.test(line) && !allowed(line, id)) {
            sink.push({ id, file: rel(file), line: i + 1, message });
        }
        regex.lastIndex = 0;
    });
}

// Only look inside <style> blocks for the color/spacing checks, since those
// are the rules that only apply to component-scoped styles.
function styleBlockLines(file) {
    const text = readFileSync(file, 'utf8');
    const match = text.match(/<style[^>]*>([\s\S]*?)<\/style>/);
    if (!match) return [];
    const startLine = text.slice(0, match.index).split('\n').length;
    return match[1]
        .split('\n')
        .map((line, i) => ({ line, num: startLine + i }));
}

// 1. Hardcoded colors in component <style> blocks (outside global.css).
// Named colors are only flagged in CSS value position (after ':', before
// ';') so property names like "white-space" don't false-positive.
const colorRe =
    /#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|:\s*(red|blue|green|black|white|orange|purple|yellow)\s*;/;
for (const file of astroFiles) {
    for (const { line, num } of styleBlockLines(file)) {
        if (colorRe.test(line) && !allowed(line, 'hardcoded-color')) {
            violations.push({
                id: 'hardcoded-color',
                file: rel(file),
                line: num,
                message: 'Hardcoded color — use a var(--token) from global.css.'
            });
        }
    }
}
for (const file of cssFiles) {
    scanLines(
        file,
        colorRe,
        'hardcoded-color',
        'Hardcoded color — use a var(--token) from global.css.'
    );
}

// 2. Hardcoded spacing/size (px/rem/em), minus 0, 100%, 1px, 50%, unitless
// line-heights. Non-fatal: no --space-* token system exists yet (tracked as
// a separate, deferred effort), so this only warns for now.
const spacingRe = /\b\d+(\.\d+)?(px|rem|em)\b/g;
function checkSpacing(file, lines) {
    for (const { line, num } of lines) {
        const matches = line.match(spacingRe);
        if (!matches) continue;
        const real = matches.filter((m) => m !== '0px' && m !== '1px');
        if (real.length > 0 && !allowed(line, 'hardcoded-spacing')) {
            warnings.push({
                id: 'hardcoded-spacing',
                file: rel(file),
                line: num,
                message:
                    'Hardcoded spacing — no --space-* token system exists yet (deferred, see CLAUDE.md follow-ups).'
            });
        }
    }
}
for (const file of astroFiles) {
    checkSpacing(file, styleBlockLines(file));
}
for (const file of cssFiles) {
    const text = readFileSync(file, 'utf8');
    checkSpacing(
        file,
        text.split('\n').map((line, i) => ({ line, num: i + 1 }))
    );
}

// 3. Raw <img> tags under src/ in .astro/.mdx.
for (const file of [...astroFiles, ...mdxFiles]) {
    scanLines(file, /<img[\s>]/, 'raw-img', 'Raw <img> — use astro:assets.');
}

// 4. Stray <head> outside the base layout.
const baseLayout = join(srcDir, 'layouts', 'Layout.astro');
for (const file of [...astroFiles, ...mdxFiles]) {
    if (file === baseLayout) continue;
    scanLines(
        file,
        /<head[\s>]/,
        'stray-head',
        'Stray <head> — only src/layouts/Layout.astro should own <head>.'
    );
}

// 5. Deep relative imports.
for (const file of tsAstroFiles) {
    scanLines(
        file,
        /from ['"]\.\.\/\.\./,
        'deep-import',
        "Deep relative import — use the '@/' alias instead."
    );
}

// 6. Unjustified client:only.
for (const file of astroFiles) {
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, i) => {
        if (/client:only/.test(line)) {
            const prev = lines[i - 1] ?? '';
            if (!/<!--.*-->/.test(prev) && !allowed(line, 'client-only')) {
                violations.push({
                    id: 'client-only',
                    file: rel(file),
                    line: i + 1,
                    message:
                        'client:only used without a justification comment on the preceding line.'
                });
            }
        }
    });
}

// 7. Unjustified React island (client:* on .tsx/.jsx with no comment above).
const jsxFiles = allFiles.filter((f) => ['.tsx', '.jsx'].includes(extname(f)));
for (const file of jsxFiles) {
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, i) => {
        if (/client:(load|visible|idle|only)/.test(line)) {
            const prev = lines[i - 1] ?? '';
            if (!/\/\//.test(prev) && !allowed(line, 'react-island')) {
                violations.push({
                    id: 'react-island',
                    file: rel(file),
                    line: i + 1,
                    message:
                        'React island hydration directive without a justification comment above.'
                });
            }
        }
    });
}

// 8. z.any() in content.config.ts.
const contentConfig = join(srcDir, 'content.config.ts');
scanLines(
    contentConfig,
    /z\.any\(\)/,
    'zod-any',
    'z.any() defeats the point of a schema — use a real type.'
);

// 9. External image host in Image/Picture src.
for (const file of [...astroFiles, ...mdxFiles]) {
    scanLines(
        file,
        /<(Image|Picture)[^>]*src=['"]https?:\/\//,
        'external-image',
        'Image/Picture src is an external URL — astro:assets can only optimize local files.'
    );
}

// 10. Filename casing: components/ and layouts/ PascalCase; content/ kebab-case.
const pascalRe = /^[A-Z][A-Za-z0-9]*\.astro$/;
const kebabRe = /^[a-z0-9]+(-[a-z0-9]+)*\.(md|mdx)$/;
for (const file of astroFiles) {
    const rp = rel(file);
    if (
        (rp.startsWith(join('src', 'components')) ||
            rp.startsWith(join('src', 'layouts'))) &&
        !pascalRe.test(basename(file))
    ) {
        violations.push({
            id: 'filename-casing',
            file: rp,
            line: 1,
            message: 'components/ and layouts/ filenames must be PascalCase.'
        });
    }
}
for (const file of [
    ...mdxFiles,
    ...allFiles.filter((f) => extname(f) === '.md')
]) {
    const rp = rel(file);
    if (
        rp.startsWith(join('src', 'content')) &&
        !kebabRe.test(basename(file))
    ) {
        violations.push({
            id: 'filename-casing',
            file: rp,
            line: 1,
            message: 'content/ filenames must be kebab-case.'
        });
    }
}

// 11. Draft leakage: an unfiltered getCollection('posts') outside
// src/lib/posts.ts, which owns the canonical draft-exclusion filter.
const postsHelper = join(srcDir, 'lib', 'posts.ts');
for (const file of tsAstroFiles) {
    if (file === postsHelper) continue;
    scanLines(
        file,
        /getCollection\(\s*['"]posts['"]\s*\)/,
        'draft-leakage',
        "Unfiltered getCollection('posts') — draft posts leak into production. Use the helpers in src/lib/posts.ts instead."
    );
}

function report(list, label) {
    if (list.length === 0) return;
    console.log(`\n${label} (${list.length}):`);
    for (const v of list) {
        console.log(`  ${v.file}:${v.line} [${v.id}] ${v.message}`);
    }
}

report(warnings, 'Warnings');
report(violations, 'Violations');

if (violations.length > 0) {
    console.error(
        `\ncheck-conventions failed: ${violations.length} violation(s).`
    );
    process.exit(1);
}

console.log(
    `\ncheck-conventions OK (${warnings.length} warning(s), 0 violations).`
);
