import {
    allowed,
    jsxFiles,
    readLines,
    rel,
    runStandalone,
    type Violation
} from './_shared.ts';

export const name = 'react-island-justified';

const id = 'react-island';
const message =
    'React island hydration directive without a justification comment above.';

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of jsxFiles) {
        const lines = readLines(file);
        lines.forEach((line, i) => {
            if (!/client:(load|visible|idle|only)/.test(line)) return;
            const prev = lines[i - 1] ?? '';
            if (/\/\//.test(prev) || allowed(line, id)) return;
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
