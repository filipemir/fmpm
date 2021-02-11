import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2021: BookEntry[] = [
    {
        title: 'A Promised Lnd',
        author: 'Barack Obama',
        url: 'https://www.indiebound.org/book/9781524763169',
        startDate: parseISO('2021-01-06'),
        endDate: parseISO('2021-01-26'),
        favorite: false,
        covers: {
            placeholder: require('images/books/a-promised-land.jpg?{"width":32}'),
            thumbnail: require('images/books/a-promised-land.jpg?{"width":200}'),
            full: require('images/books/a-promised-land.jpg?{"width":600}')
        }
    },
    {
        title: 'Why I Write',
        author: 'George Orwell',
        url: 'https://www.indiebound.org/book/9780143036357',
        startDate: parseISO('2020-12-29'),
        endDate: parseISO('2021-01-06'),
        favorite: false,
        covers: {
            placeholder: require('images/books/why-i-write.jpg?{"width":32}'),
            thumbnail: require('images/books/why-i-write.jpg?{"width":200}'),
            full: require('images/books/why-i-write.jpg?{"width":600}')
        }
    }
];
