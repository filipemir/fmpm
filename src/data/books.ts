import parseISO from 'date-fns/parseISO';
import { BookEntry } from '../models/media';
import stubbornAttachments from 'images/books/stubborn-attachments.jpg';

export const BOOKS: BookEntry[] = [
    {
        title: 'Stubborn Attachments',
        subtitle: 'A Vision for a Society of Free, Prosperous, and Responsible Individuals',
        author: 'Tyler Cowen',
        url: 'https://www.amazon.com/Stubborn-Attachments-Prosperous-Responsible-Individuals/dp/1732265135',
        startDate: parseISO('2012-12-26'),
        endDate: parseISO('2012-12-28'),
        favorite: false,
        image: stubbornAttachments
    },
    {
        title: 'Painting Resilience',
        subtitle: 'The Life and Art of Fred Terna',
        author: 'Julia Mayer',
        url: 'https://www.indiebound.org/book/9781735876221',
        startDate: parseISO('2012-12-21'),
        endDate: parseISO('2012-12-26'),
        favorite: false
    },
    {
        title: 'Ice',
        author: 'Anna Kavan',
        url: 'https://www.indiebound.org/book/9780143131991',
        startDate: parseISO('2012-12-05'),
        endDate: parseISO('2012-12-25'),
        favorite: true
    },
    {
        title: 'The Revenant',
        subtitle: 'A Novel of Revenge',
        author: 'Michael Punke',
        url: 'https://www.indiebound.org/book/9781250101198',
        startDate: parseISO('2012-11-16'),
        endDate: parseISO('2012-11-24'),
        favorite: false
    },
    {
        title: 'Code',
        subtitle: 'The Hidden Language of Computer Hardware and Software',
        author: 'Charles Petzold',
        url: 'https://www.indiebound.org/book/9780735611313',
        startDate: parseISO('2012-10-23'),
        endDate: parseISO('2012-12-19'),
        favorite: true
    }
];
