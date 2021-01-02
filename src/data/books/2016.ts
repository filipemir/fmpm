import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2016: BookEntry[] = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adam',
        url: '',
        startDate: parseISO('2016-12-11'),
        endDate: parseISO('2016-12-28'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Crucible',
        author: 'Arthur Miller',
        url: '',
        startDate: parseISO('2016-11-18'),
        endDate: parseISO('2016-11-26'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'On Beauty',
        author: 'Zadie Smith',
        url: '',
        startDate: parseISO('2016-11-01'),
        endDate: parseISO('2016-11-16'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Zen and The Art of Motorcycle Maintenance',
        subtitle: 'An Inquiry Into Values',
        author: 'Robert Pirsig',
        url: '',
        startDate: parseISO('2016-09-01'),
        endDate: parseISO('2016-10-01'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Brief Wondrous Life of Oscar Wao',
        author: 'Junot Díaz',
        url: '',
        startDate: parseISO('2016-03-01'),
        endDate: parseISO('2016-03-28'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Satanic Verses',
        author: 'Salman Rushdie',
        url: '',
        startDate: parseISO('2016-01-26'),
        endDate: parseISO('2016-02-12'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Jeeves Omnibus',
        author: 'P.G. Wodehouse',
        url: '',
        startDate: parseISO('2016-01-06'),
        endDate: parseISO('2016-05-05'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Far from the Tree',
        author: 'Andrew Solomon',
        url: '',
        startDate: parseISO('2016-10-01'),
        endDate: parseISO('2016-05-06'),
        favorite: true,
        image: GRATITUDE_COVER
    }
];
