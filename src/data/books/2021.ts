import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import A_PROMISED_LAND_COVER from 'images/books/a-promised-land.jpg';
import WHY_I_WRITE_COVER from 'images/books/why-i-write.jpg';

export const BOOKS_2021: BookEntry[] = [
    {
        title: 'A Promised Land',
        author: 'Barack Obama',
        url: 'https://www.indiebound.org/book/9781524763169',
        startDate: parseISO('2021-01-06'),
        endDate: parseISO('2021-01-26'),
        favorite: false,
        cover: A_PROMISED_LAND_COVER
    },
    {
        title: 'Why I Write',
        author: 'George Orwell',
        url: 'https://www.indiebound.org/book/9780143036357',
        startDate: parseISO('2020-12-29'),
        endDate: parseISO('2021-01-06'),
        favorite: false,
        cover: WHY_I_WRITE_COVER
    }
];
