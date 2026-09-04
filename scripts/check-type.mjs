// Enforces the type scale: every font-family, font-size, line-height,
// letter-spacing and font-weight in src/ must be a var() token defined in
// src/styles/global.css. Without this the scale drifts back into raw px —
// the same heading role ends up at three sizes on three pages, which is what
// the tokens exist to prevent.
//
// Two things are allowed through:
//   - `em` / `%` font-sizes, which size against an already-tokened parent
//     (inline <code> at 0.85em, for example) rather than picking a new step;
//   - the CSS-wide keywords (inherit, initial, unset, revert).
//
// Usage: node scripts/check-type.mjs

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const srcDir = join(root, 'src');
const tokensFile = join(root, 'src/styles/global.css');

const PROPS = [
    'font-family',
    'font-size',
    'line-height',
    'letter-spacing',
    'font-weight'
];
const KEYWORDS = new Set(['inherit', 'initial', 'unset', 'revert']);

const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '');

function walk(dir) {
    const out = [];
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isDirectory()) out.push(...walk(full));
        else out.push(full);
    }
    return out;
}

// Every custom property declared in global.css, which is the only file
// allowed to define one.
const defined = new Set(
    Array.from(
        stripComments(readFileSync(tokensFile, 'utf8')).matchAll(
            /(--[\w-]+)\s*:/g
        ),
        (m) => m[1]
    )
);

// For .astro, only the <style> blocks are CSS — the frontmatter and markup
// can legitimately contain any of these words.
function styleSources(file) {
    const text = readFileSync(file, 'utf8');
    if (file.endsWith('.css')) return [{ text, offset: 0 }];
    return Array.from(
        text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g),
        (m) => ({
            text: m[1],
            offset: m.index + m[0].indexOf(m[1])
        })
    );
}

const lineOf = (text, index) => text.slice(0, index).split('\n').length;

const problems = [];
const files = walk(srcDir).filter(
    (f) => (f.endsWith('.astro') || f.endsWith('.css')) && f !== tokensFile
);

for (const file of files) {
    const whole = readFileSync(file, 'utf8');
    const rel = relative(root, file);
    for (const { text, offset } of styleSources(file)) {
        // Blank out comments in place so reported line numbers stay true.
        const css = text.replace(/\/\*[\s\S]*?\*\//g, (c) =>
            c.replace(/[^\n]/g, ' ')
        );
        const re = new RegExp(
            `(?<![\\w-])(${PROPS.join('|')})\\s*:([^;{}]*)`,
            'g'
        );
        for (const m of css.matchAll(re)) {
            const [, prop, rawValue] = m;
            const value = rawValue.trim();
            const line = lineOf(whole, offset + m.index);

            if (KEYWORDS.has(value)) continue;
            if (prop === 'font-size' && /^[\d.]+(em|%)$/.test(value)) continue;

            const refs = Array.from(
                value.matchAll(/var\(\s*(--[\w-]+)/g),
                (v) => v[1]
            );
            if (refs.length === 0) {
                problems.push(
                    `${rel}:${line}  ${prop}: ${value} — use a var() token from src/styles/global.css`
                );
                continue;
            }
            for (const ref of refs) {
                if (!defined.has(ref)) {
                    problems.push(
                        `${rel}:${line}  ${prop}: ${value} — ${ref} is not defined in src/styles/global.css`
                    );
                }
            }
        }
    }
}

if (problems.length > 0) {
    console.error(
        `check-type: ${problems.length} untokenized type declaration(s)\n`
    );
    for (const p of problems) console.error(`  ${p}`);
    process.exit(1);
}

console.log(`check-type: ${files.length} files clean`);
