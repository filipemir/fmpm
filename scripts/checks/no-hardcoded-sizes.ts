import { readFileSync } from 'node:fs';
import {
    allowed,
    astroFiles,
    cssFiles,
    rel,
    runStandalone,
    styleBlockLines,
    type ScopedLine,
    type Violation
} from './_shared.ts';

export const name = 'no-hardcoded-sizes';

const sizeRe = /\b\d+(\.\d+)?(px|rem|em|vh|vw|vmin|vmax)\b/g;
const sizePropertyRe =
    /^\s*(margin(-(top|right|bottom|left))?|padding(-(top|right|bottom|left))?|gap|row-gap|column-gap|top|right|bottom|left|width|height|min-width|max-width|min-height|max-height|font-size|border-radius|text-underline-offset|vertical-align)\s*:/;
const id = 'hardcoded-size';
const message =
    'Hardcoded size — use a var(--space-*/--font-*/--radius-*/--width-*/--height-*/--offset-*) token from global.css.';

function scan(file: string, lines: ScopedLine[]): Violation[] {
    const violations: Violation[] = [];
    for (const { line, num } of lines) {
        if (!sizePropertyRe.test(line)) continue;
        const matches = line.match(sizeRe);
        if (!matches) continue;
        const real = matches.filter((m) => m !== '0px' && m !== '1px');
        if (real.length > 0 && !allowed(line, id)) {
            violations.push({ id, file: rel(file), line: num, message });
        }
    }
    return violations;
}

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of astroFiles) {
        violations.push(...scan(file, styleBlockLines(file)));
    }
    for (const file of cssFiles) {
        const lines = readFileSync(file, 'utf8')
            .split('\n')
            .map((line, i) => ({ line, num: i + 1 }));
        violations.push(...scan(file, lines));
    }
    return violations;
}

runStandalone(import.meta, name, check);
