import { join } from 'node:path';
import {
    astroFiles,
    mdxFiles,
    runStandalone,
    scanLines,
    srcDir,
    type Violation
} from './_shared.ts';

export const name = 'no-stray-head';

const id = 'stray-head';
const message =
    'Stray <head> — only src/layouts/Layout.astro should own <head>.';
const regex = /<head[\s>]/;
const baseLayout = join(srcDir, 'layouts', 'Layout.astro');

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of [...astroFiles, ...mdxFiles]) {
        if (file === baseLayout) continue;
        violations.push(...scanLines(file, regex, id, message));
    }
    return violations;
}

runStandalone(import.meta, name, check);
