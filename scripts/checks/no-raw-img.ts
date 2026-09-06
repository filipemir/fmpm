import {
    astroFiles,
    mdxFiles,
    runStandalone,
    scanLines,
    type Violation
} from './_shared.ts';

export const name = 'no-raw-img';

const id = 'raw-img';
const message = 'Raw <img> — use astro:assets.';
const regex = /<img[\s>]/;

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of [...astroFiles, ...mdxFiles]) {
        violations.push(...scanLines(file, regex, id, message));
    }
    return violations;
}

runStandalone(import.meta, name, check);
