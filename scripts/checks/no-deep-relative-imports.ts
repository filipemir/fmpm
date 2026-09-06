import {
    runStandalone,
    scanLines,
    tsAstroFiles,
    type Violation
} from './_shared.ts';

export const name = 'no-deep-relative-imports';

const id = 'deep-import';
const message = "Deep relative import — use the '@/' alias instead.";
const regex = /from ['"]\.\.\/\.\./;

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of tsAstroFiles) {
        violations.push(...scanLines(file, regex, id, message));
    }
    return violations;
}

runStandalone(import.meta, name, check);
