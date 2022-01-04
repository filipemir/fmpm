import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import PESSOA from 'images/books/pessoa.jpg';

export const BOOKS_2022: BookEntry[] = [
    {
        title: 'Pessoa',
        subtitle: 'A Biography',
        author: 'Richard Zenith',
        url: 'https://www.indiebound.org/book/9780871404718',
        startDate: parseISO('2021-09-18'),
        endDate: parseISO('2022-01-03'),
        favorite: false,
        cover: PESSOA
    }
];
