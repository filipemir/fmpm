import {
    allowed,
    astroFiles,
    cssFiles,
    rel,
    runStandalone,
    scanLines,
    styleBlockLines,
    type Violation
} from './_shared.ts';

export const name = 'no-hardcoded-colors';

const colorRe =
    /#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|:\s*(red|blue|green|black|white|orange|purple|yellow)\s*;/;
const id = 'hardcoded-color';
const message = 'Hardcoded color — use a var(--token) from global.css.';

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of astroFiles) {
        for (const { line, num } of styleBlockLines(file)) {
            if (colorRe.test(line) && !allowed(line, id)) {
                violations.push({ id, file: rel(file), line: num, message });
            }
        }
    }
    for (const file of cssFiles) {
        violations.push(...scanLines(file, colorRe, id, message));
    }
    return violations;
}

runStandalone(import.meta, name, check);
