import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2015: BookEntry[] = [
    {
        title: 'Weekend Wodehouse',
        author: 'P.G Wodehouse',
        url: '',
        startDate: parseISO('2015-11-19'),
        endDate: parseISO('2015-12-13'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Americanah',
        author: 'Chimamanda Ngozi Adichie',
        url: '',
        startDate: parseISO('2015-08-08'),
        endDate: parseISO('2015-09-23'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Bring Up The Bodies',
        author: 'Hilary Mantel',
        url: '',
        startDate: parseISO('2015-07-01'),
        endDate: parseISO('2015-08-07'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Wolf Hall',
        author: 'Hilary Mantel',
        url: '',
        startDate: parseISO('2015-06-08'),
        endDate: parseISO('2015-07-31'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Redeployment',
        author: 'Phil Klay',
        url: '',
        startDate: parseISO('2015-02-20'),
        endDate: parseISO('2015-03-10'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: '',
        author: '',
        url: '',
        startDate: parseISO('2015-'),
        endDate: parseISO('2015-'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: "One Flew Over the Cuckoo's Next",
        author: 'Ken Kesey',
        url: '',
        startDate: parseISO('2015-02-20'),
        endDate: parseISO('2015-02-28'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Station Eleven',
        author: 'Emily St. John Mandel',
        url: '',
        startDate: parseISO('2015-01-06'),
        endDate: parseISO('2015-01-21'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Painter',
        author: 'Peter Heller',
        url: '',
        startDate: parseISO('2014-12-06'),
        endDate: parseISO('2015-01-05'),
        favorite: false,
        image: GRATITUDE_COVER
    }
];
