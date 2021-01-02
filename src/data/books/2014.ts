import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2014: BookEntry[] = [
    {
        title: 'The Martian',
        author: 'Andy Weir',
        url: '',
        startDate: parseISO('2014-11-24'),
        endDate: parseISO('2014-12-12'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Fire Next Time',
        author: 'James Baldwin',
        url: '',
        startDate: parseISO('2014-12-06'),
        endDate: parseISO('2014-12-09'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'A Heartbreaking Work of Staggering Genius',
        author: 'Dave Eggers',
        url: '',
        startDate: parseISO('2014-10-04'),
        endDate: parseISO('2014-11-30'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Chuck Klosterman IV',
        author: 'Chuck Klosterman',
        url: '',
        startDate: parseISO('2014-11-02'),
        endDate: parseISO('2014-11-28'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Abominable',
        author: 'Dan Simmons',
        url: '',
        startDate: parseISO('2014-07-19'),
        endDate: parseISO('2014-09-21'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Crossing',
        author: 'Cormac McCarthy',
        url: '',
        startDate: parseISO('2014-06-07'),
        endDate: parseISO('2014-07-15'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'All The Pretty Horses',
        author: 'Cormac McCarthy',
        url: '',
        startDate: parseISO('2014-05-20'),
        endDate: parseISO('2014-06-07'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: "The Yiddish Policemen's Union",
        author: 'Michael Chabon',
        url: '',
        startDate: parseISO('2014-'),
        endDate: parseISO('2014-'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Slouching Towards Bethlehem',
        author: 'Joan Didion',
        url: '',
        startDate: parseISO('2014-01-19'),
        endDate: parseISO('2014-02-01'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Giver',
        author: 'Lois Lowry',
        url: '',
        startDate: parseISO('2014-01-13'),
        endDate: parseISO('2014-01-15'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Hell or High Water',
        author: 'Peter Heller',
        url: '',
        startDate: parseISO('2013-12-27'),
        endDate: parseISO('2014-01-13'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Signal and The Noise',
        author: '',
        url: '',
        startDate: parseISO('2014-01-07'),
        endDate: parseISO('2014-01-11'),
        favorite: false,
        image: GRATITUDE_COVER
    }
];
