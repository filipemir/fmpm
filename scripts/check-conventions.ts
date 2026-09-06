import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';
import type { Violation } from './checks/_shared.ts';

type CheckModule = {
    name: string;
    check: () => Violation[];
};

const checksDir = fileURLToPath(new URL('./checks', import.meta.url));
const files = readdirSync(checksDir)
    .filter((f) => f.endsWith('.ts') && !f.startsWith('_'))
    .sort();

const results = await Promise.all(
    files.map(async (f) => {
        const mod = (await import(
            pathToFileURL(join(checksDir, f)).href
        )) as CheckModule;
        return { name: mod.name, violations: mod.check() };
    })
);

let total = 0;
for (const { name, violations } of results) {
    if (violations.length === 0) continue;
    total += violations.length;
    console.log(`\n${name} (${violations.length}):`);
    for (const v of violations) {
        console.log(`  ${v.file}:${v.line} [${v.id}] ${v.message}`);
    }
}

if (total > 0) {
    console.error(`\ncheck-conventions failed: ${total} violation(s).`);
    process.exit(1);
}

console.log(`check-conventions OK (${results.length} checks, 0 violations).`);
