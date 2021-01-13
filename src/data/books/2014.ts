import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import THE_SIGNAL_AND_THE_NOISE_COVER from 'images/books/the-sginal-and-the-noise.jpg';
import HELL_OR_HIGH_WATER_COVER from 'images/books/hell-or-high-water.jpg';
import THE_GIVER_COVER from 'images/books/the-giver.jpg';
import SLOUCHING_TOWARDS_BETHLEHEM_COVER from 'images/books/slouching-towards-bethlehem.jpg';
import YIDDISH_POLICEMENS_UNION_COVER from 'images/books/yiddish-policemens-union.jpg';
import ALL_THE_PRETTY_HORSES_COVER from 'images/books/all-the-pretty-horses.jpg';
import THE_CROSSING_COVER from 'images/books/the-crossing.jpg';
import THE_ABOMINABLE_COVER from 'images/books/the-abominable.jpg';
import KLOSTERMAN_COVER from 'images/books/chuck-klosterman-iv.jpg';
import HEARTBREAKING_WORK_COVER from 'images/books/a-heartbreaking-work-of-staggering-genius.jpg';
import FIRE_NEXT_TIME_COVER from 'images/books/the-fire-next-time.jpg';
import THE_MARTIAN_COVER from 'images/books/the-martian.jpg';

export const BOOKS_2014: BookEntry[] = [
    {
        title: 'The Martian',
        author: 'Andy Weir',
        url: 'https://www.indiebound.org/book/9780553418026',
        startDate: parseISO('2014-11-24'),
        endDate: parseISO('2014-12-12'),
        favorite: false,
        image: THE_MARTIAN_COVER
    },
    {
        title: 'The Fire Next Time',
        author: 'James Baldwin',
        url: 'https://www.indiebound.org/book/9780679744726',
        startDate: parseISO('2014-12-06'),
        endDate: parseISO('2014-12-09'),
        favorite: true,
        image: FIRE_NEXT_TIME_COVER
    },
    {
        title: 'A Heartbreaking Work of Staggering Genius',
        author: 'Dave Eggers',
        url: 'https://www.indiebound.org/book/9780375725784',
        startDate: parseISO('2014-10-04'),
        endDate: parseISO('2014-11-30'),
        favorite: false,
        image: HEARTBREAKING_WORK_COVER
    },
    {
        title: 'Chuck Klosterman IV',
        subtitle: 'A Decade of Curious People and Dangerous Ideas',
        author: 'Chuck Klosterman',
        url: 'https://www.indiebound.org/book/9780743284882',
        startDate: parseISO('2014-11-02'),
        endDate: parseISO('2014-11-28'),
        favorite: false,
        image: KLOSTERMAN_COVER
    },
    {
        title: 'The Abominable',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780316198844',
        startDate: parseISO('2014-07-19'),
        endDate: parseISO('2014-09-21'),
        favorite: false,
        image: THE_ABOMINABLE_COVER
    },
    {
        title: 'The Crossing',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679760849',
        startDate: parseISO('2014-06-07'),
        endDate: parseISO('2014-07-15'),
        favorite: false,
        image: THE_CROSSING_COVER
    },
    {
        title: 'All The Pretty Horses',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679744399',
        startDate: parseISO('2014-05-20'),
        endDate: parseISO('2014-06-07'),
        favorite: true,
        image: ALL_THE_PRETTY_HORSES_COVER
    },
    {
        title: "The Yiddish Policemen's Union",
        author: 'Michael Chabon',
        url: 'https://www.indiebound.org/book/9780007149834',
        startDate: parseISO('2014-'),
        endDate: parseISO('2014-'),
        favorite: true,
        image: YIDDISH_POLICEMENS_UNION_COVER
    },
    {
        title: 'Slouching Towards Bethlehem',
        author: 'Joan Didion',
        url: 'https://www.indiebound.org/book/9780374521721',
        startDate: parseISO('2014-01-19'),
        endDate: parseISO('2014-02-01'),
        favorite: true,
        image: SLOUCHING_TOWARDS_BETHLEHEM_COVER
    },
    {
        title: 'The Giver',
        author: 'Lois Lowry',
        url: 'https://www.indiebound.org/book/9780786271535',
        startDate: parseISO('2014-01-13'),
        endDate: parseISO('2014-01-15'),
        favorite: true,
        image: THE_GIVER_COVER
    },
    {
        title: 'Hell or High Water',
        subtitle: "Surviving Tibet's Tsangpo River",
        author: 'Peter Heller',
        url: 'https://www.indiebound.org/book/9781579548728',
        startDate: parseISO('2013-12-27'),
        endDate: parseISO('2014-01-13'),
        favorite: false,
        image: HELL_OR_HIGH_WATER_COVER
    },
    {
        title: 'The Signal and The Noise',
        subtitle: "Why So Many Predictions Fail--but Some Don't",
        author: 'Nate Silver',
        url: 'https://www.indiebound.org/book/9780143125082',
        startDate: parseISO('2014-01-07'),
        endDate: parseISO('2014-01-11'),
        favorite: false,
        image: THE_SIGNAL_AND_THE_NOISE_COVER
    }
];
