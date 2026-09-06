import { basename, join } from 'node:path';
import {
    astroFiles,
    mdxFiles,
    mdFiles,
    rel,
    runStandalone,
    type Violation
} from './_shared.ts';

export const name = 'filename-casing';

const id = 'filename-casing';
const pascalRe = /^[A-Z][A-Za-z0-9]*\.astro$/;
const kebabRe = /^[a-z0-9]+(-[a-z0-9]+)*\.(md|mdx)$/;

export function check(): Violation[] {
    const violations: Violation[] = [];
    for (const file of astroFiles) {
        const rp = rel(file);
        const inTargetDir =
            rp.startsWith(join('src', 'components')) ||
            rp.startsWith(join('src', 'layouts'));
        if (inTargetDir && !pascalRe.test(basename(file))) {
            violations.push({
                id,
                file: rp,
                line: 1,
                message:
                    'components/ and layouts/ filenames must be PascalCase.'
            });
        }
    }
    for (const file of [...mdxFiles, ...mdFiles]) {
        const rp = rel(file);
        if (
            rp.startsWith(join('src', 'content')) &&
            !kebabRe.test(basename(file))
        ) {
            violations.push({
                id,
                file: rp,
                line: 1,
                message: 'content/ filenames must be kebab-case.'
            });
        }
    }
    return violations;
}

runStandalone(import.meta, name, check);
