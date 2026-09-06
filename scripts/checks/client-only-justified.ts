import {
    allowed,
    astroFiles,
    readLines,
    rel,
    runStandalone,
    type Violation
} from './_shared.ts';

export const name = 'client-only-justified';

const id = 'client-only';
const message =
    'client:only used without a justification comment on the preceding line.';

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of astroFiles) {
        const lines = readLines(file);
        lines.forEach((line, i) => {
            if (!/client:only/.test(line)) return;
            const prev = lines[i - 1] ?? '';
            if (/<!--.*-->/.test(prev) || allowed(line, id)) return;
            violations.push({
                id,
                file: rel(file),
                line: i + 1,
                message
            });
        });
    }
    return violations;
}

runStandalone(import.meta, name, check);
