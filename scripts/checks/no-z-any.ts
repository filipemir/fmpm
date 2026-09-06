import { join } from 'node:path';
import { runStandalone, scanLines, srcDir, type Violation } from './_shared.ts';

export const name = 'no-z-any';

const contentConfig = join(srcDir, 'content.config.ts');
const id = 'zod-any';
const message = 'z.any() defeats the point of a schema — use a real type.';

export function check(): Violation[] {
    return scanLines(contentConfig, /z\.any\(\)/, id, message);
}

runStandalone(import.meta, name, check);
