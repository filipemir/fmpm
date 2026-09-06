import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

export type Violation = {
    id: string;
    file: string;
    line: number;
    message: string;
};

export const root = fileURLToPath(new URL('../..', import.meta.url));
export const srcDir = join(root, 'src');

function walk(dir: string): string[] {
    const out: string[] = [];
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isDirectory()) {
            out.push(...walk(full));
        } else {
            out.push(full);
        }
    }
    return out;
}

export const allFiles = walk(srcDir);
export const astroFiles = allFiles.filter((f) => extname(f) === '.astro');
export const mdxFiles = allFiles.filter((f) => extname(f) === '.mdx');
export const mdFiles = allFiles.filter((f) => extname(f) === '.md');
export const cssFiles = allFiles.filter(
    (f) => extname(f) === '.css' && basename(f) !== 'global.css'
);
export const tsAstroFiles = allFiles.filter((f) =>
    ['.astro', '.ts', '.js'].includes(extname(f))
);
export const jsxFiles = allFiles.filter((f) =>
    ['.tsx', '.jsx'].includes(extname(f))
);

export function rel(file: string): string {
    return relative(root, file);
}

export function allowed(line: string, id: string): boolean {
    return line.includes(`allow-${id}:`);
}

export function readLines(file: string): string[] {
    return readFileSync(file, 'utf8').split('\n');
}

export type ScopedLine = { line: string; num: number };

export function styleBlockLines(file: string): ScopedLine[] {
    const text = readFileSync(file, 'utf8');
    const match = text.match(/<style[^>]*>([\s\S]*?)<\/style>/);
    if (!match || match.index === undefined) return [];
    const startLine = text.slice(0, match.index).split('\n').length;
    return match[1]
        .split('\n')
        .map((line, i) => ({ line, num: startLine + i }));
}

export function scanLines(
    file: string,
    regex: RegExp,
    id: string,
    message: string
): Violation[] {
    const violations: Violation[] = [];
    const lines = readLines(file);
    lines.forEach((line, i) => {
        if (regex.test(line) && !allowed(line, id)) {
            violations.push({ id, file: rel(file), line: i + 1, message });
        }
        regex.lastIndex = 0;
    });
    return violations;
}

export function runStandalone(
    meta: ImportMeta,
    name: string,
    check: () => Violation[]
): void {
    if (meta.url !== `file://${process.argv[1]}`) return;
    const violations = check();
    if (violations.length === 0) {
        console.log(`${name}: OK`);
        return;
    }
    for (const v of violations) {
        console.log(`  ${v.file}:${v.line} [${v.id}] ${v.message}`);
    }
    console.error(`\n${name} failed: ${violations.length} violation(s).`);
    process.exit(1);
}
