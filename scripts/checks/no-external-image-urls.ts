import {
    astroFiles,
    mdxFiles,
    runStandalone,
    scanLines,
    type Violation
} from './_shared.ts';

export const name = 'no-external-image-urls';

const id = 'external-image';
const message =
    'Image/Picture src is an external URL — astro:assets can only optimize local files.';
const regex = /<(Image|Picture)[^>]*src=['"]https?:\/\//;

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of [...astroFiles, ...mdxFiles]) {
        violations.push(...scanLines(file, regex, id, message));
    }
    return violations;
}

runStandalone(import.meta, name, check);
