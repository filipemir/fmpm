import { join } from 'node:path';
import {
    runStandalone,
    scanLines,
    srcDir,
    tsAstroFiles,
    type Violation
} from './_shared.ts';

export const name = 'no-draft-post-leakage';

const postsHelper = join(srcDir, 'lib', 'posts.ts');
const id = 'draft-leakage';
const message =
    "Unfiltered getCollection('posts') — draft posts leak into production. Use the helpers in src/lib/posts.ts instead.";
const regex = /getCollection\(\s*['"]posts['"]\s*\)/;

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of tsAstroFiles) {
        if (file === postsHelper) continue;
        violations.push(...scanLines(file, regex, id, message));
    }
    return violations;
}

runStandalone(import.meta, name, check);
