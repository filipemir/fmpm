import { BookEntry } from 'models/media';
import getYear from 'date-fns/getYear';
import getTime from 'date-fns/getTime';
import { BOOKS_2020 } from './2020';
import { BOOKS_2019 } from './2019';

const BOOKS: BookEntry[] = [...BOOKS_2020, ...BOOKS_2019];

export const BOOKS_SORTED = BOOKS.sort((a, b) => getTime(b.endDate) - getTime(a.endDate));

export const BOOKS_BY_YEAR = BOOKS_SORTED.reduce<{ [key: number]: BookEntry[] }>((acc, book) => {
    const year = getYear(book.endDate);

    if (year) {
        !acc[year] && (acc[year] = []);
        acc[year].push(book);
    }

    return acc;
}, {});
