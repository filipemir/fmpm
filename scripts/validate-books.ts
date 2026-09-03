import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const booksPath = fileURLToPath(
    new URL('../src/data/books.json', import.meta.url)
);
const books = JSON.parse(readFileSync(booksPath, 'utf8'));

const bookSchema = z
    .object({
        title: z.string().min(1),
        author: z.string().min(1),
        month: z.number().int().min(1).max(12),
        year: z.number().int().min(2010).max(new Date().getFullYear()),
        fav: z.boolean().optional()
    })
    .strict();

const result = z.array(bookSchema).safeParse(books);

if (!result.success) {
    console.error(
        `books.json failed validation (${result.error.issues.length} issue(s)):`
    );
    for (const issue of result.error.issues) {
        console.error(`  [${issue.path.join('.')}] ${issue.message}`);
    }
    process.exit(1);
}

// The Reading page groups by year and computes re-read status assuming the
// array is stored newest-first — enforce/restore that invariant here rather
// than just failing, so an out-of-order edit self-heals on commit instead of
// blocking it (same spirit as `eslint --fix` / `prettier --write`).
const key = (b: z.infer<typeof bookSchema>) => b.year * 12 + b.month;
const sorted = [...result.data].sort((a, b) => key(b) - key(a));
const wasSorted = sorted.every((b, i) => b === result.data[i]);

if (!wasSorted) {
    // 4-space indent to match .prettierrc's tabWidth, so this doesn't leave
    // behind a diff that a subsequent `prettier --write` would immediately
    // reformat again.
    writeFileSync(booksPath, JSON.stringify(sorted, null, 4) + '\n');
    console.log('books.json was out of order — re-sorted newest-first.');
} else {
    console.log(`books.json OK (${result.data.length} entries validated).`);
}
