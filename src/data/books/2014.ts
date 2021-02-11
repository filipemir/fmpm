import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2014: BookEntry[] = [
    {
        title: 'The Martian',
        author: 'Andy Weir',
        url: 'https://www.indiebound.org/book/9780553418026',
        startDate: parseISO('2014-11-24'),
        endDate: parseISO('2014-12-12'),
        favorite: false,
        covers: {
            placeholder: require('images/books/the-martian.jpg?{"width":32}'),
            thumbnail: require('images/books/the-martian.jpg?{"width":200}'),
            full: require('images/books/the-martian.jpg?{"width":600}')
        }
    },
    {
        title: 'The Fire Next Time',
        author: 'James Baldwin',
        url: 'https://www.indiebound.org/book/9780679744726',
        startDate: parseISO('2014-12-06'),
        endDate: parseISO('2014-12-09'),
        favorite: true,
        covers: {
            placeholder: require('images/books/the-fire-next-time.jpg?{"width":32}'),
            thumbnail: require('images/books/the-fire-next-time.jpg?{"width":200}'),
            full: require('images/books/the-fire-next-time.jpg?{"width":600}')
        }
    },
    {
        title: 'A Heartbreaking Work of Staggering Genius',
        author: 'Dave Eggers',
        url: 'https://www.indiebound.org/book/9780375725784',
        startDate: parseISO('2014-10-04'),
        endDate: parseISO('2014-11-30'),
        favorite: false,
        covers: {
            placeholder: require('images/books/a-heartbreaking-work-of-staggering-genius.jpg?{"width":32}'),
            thumbnail: require('images/books/a-heartbreaking-work-of-staggering-genius.jpg?{"width":200}'),
            full: require('images/books/a-heartbreaking-work-of-staggering-genius.jpg?{"width":600}')
        }
    },
    {
        title: 'Chuck Klosterman IV',
        subtitle: 'A Decade of Curious People and Dangerous Ideas',
        author: 'Chuck Klosterman',
        url: 'https://www.indiebound.org/book/9780743284882',
        startDate: parseISO('2014-11-02'),
        endDate: parseISO('2014-11-28'),
        favorite: false,
        covers: {
            placeholder: require('images/books/chuck-klosterman-iv.jpg?{"width":32}'),
            thumbnail: require('images/books/chuck-klosterman-iv.jpg?{"width":200}'),
            full: require('images/books/chuck-klosterman-iv.jpg?{"width":600}')
        }
    },
    {
        title: 'The Abominable',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780316198844',
        startDate: parseISO('2014-07-19'),
        endDate: parseISO('2014-09-21'),
        favorite: false,
        covers: {
            placeholder: require('images/books/the-abominable.jpg?{"width":32}'),
            thumbnail: require('images/books/the-abominable.jpg?{"width":200}'),
            full: require('images/books/the-abominable.jpg?{"width":600}')
        }
    },
    {
        title: 'The Crossing',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679760849',
        startDate: parseISO('2014-06-07'),
        endDate: parseISO('2014-07-15'),
        favorite: false,
        covers: {
            placeholder: require('images/books/the-crossing.jpg?{"width":32}'),
            thumbnail: require('images/books/the-crossing.jpg?{"width":200}'),
            full: require('images/books/the-crossing.jpg?{"width":600}')
        }
    },
    {
        title: 'All The Pretty Horses',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679744399',
        startDate: parseISO('2014-05-20'),
        endDate: parseISO('2014-06-07'),
        favorite: true,
        covers: {
            placeholder: require('images/books/all-the-pretty-horses.jpg?{"width":32}'),
            thumbnail: require('images/books/all-the-pretty-horses.jpg?{"width":200}'),
            full: require('images/books/all-the-pretty-horses.jpg?{"width":600}')
        }
    },
    {
        title: "The Yiddish Policemen's Union",
        author: 'Michael Chabon',
        url: 'https://www.indiebound.org/book/9780007149834',
        startDate: parseISO('2014-'),
        endDate: parseISO('2014-'),
        favorite: true,
        covers: {
            placeholder: require('images/books/yiddish-policemens-union.jpg?{"width":32}'),
            thumbnail: require('images/books/yiddish-policemens-union.jpg?{"width":200}'),
            full: require('images/books/yiddish-policemens-union.jpg?{"width":600}')
        }
    },
    {
        title: 'Slouching Towards Bethlehem',
        author: 'Joan Didion',
        url: 'https://www.indiebound.org/book/9780374521721',
        startDate: parseISO('2014-01-19'),
        endDate: parseISO('2014-02-01'),
        favorite: true,
        covers: {
            placeholder: require('images/books/slouching-towards-bethlehem.jpg?{"width":32}'),
            thumbnail: require('images/books/slouching-towards-bethlehem.jpg?{"width":200}'),
            full: require('images/books/slouching-towards-bethlehem.jpg?{"width":600}')
        }
    },
    {
        title: 'The Giver',
        author: 'Lois Lowry',
        url: 'https://www.indiebound.org/book/9780786271535',
        startDate: parseISO('2014-01-13'),
        endDate: parseISO('2014-01-15'),
        favorite: true,
        covers: {
            placeholder: require('images/books/the-giver.jpg?{"width":32}'),
            thumbnail: require('images/books/the-giver.jpg?{"width":200}'),
            full: require('images/books/the-giver.jpg?{"width":600}')
        }
    },
    {
        title: 'Hell or High Water',
        subtitle: "Surviving Tibet's Tsangpo River",
        author: 'Peter Heller',
        url: 'https://www.indiebound.org/book/9781579548728',
        startDate: parseISO('2013-12-27'),
        endDate: parseISO('2014-01-13'),
        favorite: false,
        covers: {
            placeholder: require('images/books/hell-or-high-water.jpg?{"width":32}'),
            thumbnail: require('images/books/hell-or-high-water.jpg?{"width":200}'),
            full: require('images/books/hell-or-high-water.jpg?{"width":600}')
        }
    },
    {
        title: 'The Signal and The Noise',
        subtitle: "Why So Many Predictions Fail--but Some Don't",
        author: 'Nate Silver',
        url: 'https://www.indiebound.org/book/9780143125082',
        startDate: parseISO('2014-01-07'),
        endDate: parseISO('2014-01-11'),
        favorite: false,
        covers: {
            placeholder: require('images/books/the-sginal-and-the-noise.jpg?{"width":32}'),
            thumbnail: require('images/books/the-sginal-and-the-noise.jpg?{"width":200}'),
            full: require('images/books/the-sginal-and-the-noise.jpg?{"width":600}')
        }
    }
];
