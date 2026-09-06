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

export const name = 'no-hardcoded-spacing';

const spacingRe = /\b\d+(\.\d+)?(px|rem|em)\b/g;
const spacingPropertyRe =
    /^\s*(margin(-(top|right|bottom|left))?|padding(-(top|right|bottom|left))?|gap|row-gap|column-gap|top|right|bottom|left|font-size|border-radius)\s*:/;
const id = 'hardcoded-spacing';
const message =
    'Hardcoded spacing — use a var(--space-*/--font-*/--radius-*) token from global.css.';

function scan(file: string, lines: ScopedLine[]): Violation[] {
    const violations: Violation[] = [];
    for (const { line, num } of lines) {
        if (!spacingPropertyRe.test(line)) continue;
        const matches = line.match(spacingRe);
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
