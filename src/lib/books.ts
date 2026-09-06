import { getCollection, type CollectionEntry } from 'astro:content';

export type Book = CollectionEntry<'books'>['data'];
export type YearGroup = { year: number; books: Book[] };

export type BookViews = {
    books: Book[];
    byYear: YearGroup[];
    favorites: Book[];
    rereads: WeakSet<Book>;
};

const byDateDesc = (a: Book, b: Book) =>
    b.year * 12 + b.month - (a.year * 12 + a.month);

function findRereads(books: Book[]): WeakSet<Book> {
    const rereads = new WeakSet<Book>();
    const seen = new Set<string>();
    for (let i = books.length - 1; i >= 0; i--) {
        const b = books[i];
        const key = `${b.title}|${b.author}`;
        if (seen.has(key)) rereads.add(b);
        else seen.add(key);
    }
    return rereads;
}

function groupByYear(books: Book[]): YearGroup[] {
    const groups: YearGroup[] = [];
    for (const b of books) {
        const last = groups[groups.length - 1];
        if (last && last.year === b.year) last.books.push(b);
        else groups.push({ year: b.year, books: [b] });
    }
    return groups;
}

export async function getBookViews(): Promise<BookViews> {
    const entries = await getCollection('books');
    const books = entries.map((e) => e.data).sort(byDateDesc);
    return {
        books,
        byYear: groupByYear(books),
        favorites: books.filter((b) => b.fav),
        rereads: findRereads(books)
    };
}
