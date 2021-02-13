import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2021: BookEntry[] = [
    {
        title: 'A Promised Land',
        author: 'Barack Obama',
        url: 'https://www.indiebound.org/book/9781524763169',
        startDate: parseISO('2021-01-06'),
        endDate: parseISO('2021-01-26'),
        favorite: false,
        cover: require('images/books/a-promised-land.jpg')
    },
    {
        title: 'Why I Write',
        author: 'George Orwell',
        url: 'https://www.indiebound.org/book/9780143036357',
        startDate: parseISO('2020-12-29'),
        endDate: parseISO('2021-01-06'),
        favorite: false,
        cover: require('images/books/why-i-write.jpg')
    }
];
