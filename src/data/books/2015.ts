import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2015: BookEntry[] = [
    {
        title: 'Week-End Wodehouse',
        author: 'P.G Wodehouse',
        url: 'https://www.amazon.com/Week-End-Wodehouse-P-G/dp/0712650342',
        startDate: parseISO('2015-11-19'),
        endDate: parseISO('2015-12-13'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/weekend-wodehouse.jpg?{"width":200}'),
            full: require('images/books/weekend-wodehouse.jpg?{"width":600}')
        }
    },
    {
        title: 'Americanah',
        author: 'Chimamanda Ngozi Adichie',
        url: 'https://www.indiebound.org/book/9780307455925',
        startDate: parseISO('2015-08-08'),
        endDate: parseISO('2015-09-23'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/americanah.jpg?{"width":200}'),
            full: require('images/books/americanah.jpg?{"width":600}')
        }
    },
    {
        title: 'Bring Up The Bodies',
        author: 'Hilary Mantel',
        url: 'https://www.indiebound.org/book/9781250024176',
        startDate: parseISO('2015-07-01'),
        endDate: parseISO('2015-08-07'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/bring-up-the-bodies.jpg?{"width":200}'),
            full: require('images/books/bring-up-the-bodies.jpg?{"width":600}')
        }
    },
    {
        title: 'Wolf Hall',
        author: 'Hilary Mantel',
        url: 'https://www.indiebound.org/book/9780312429980',
        startDate: parseISO('2015-06-08'),
        endDate: parseISO('2015-07-31'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/wolf-hall.jpg?{"width":200}'),
            full: require('images/books/wolf-hall.jpg?{"width":600}')
        }
    },
    {
        title: 'Redeployment',
        author: 'Phil Klay',
        url: 'https://www.indiebound.org/book/9780143126829',
        startDate: parseISO('2015-02-20'),
        endDate: parseISO('2015-03-10'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/redeployment.jpg?{"width":200}'),
            full: require('images/books/redeployment.jpg?{"width":600}')
        }
    },
    {
        title: "One Flew Over the Cuckoo's Next",
        author: 'Ken Kesey',
        url: 'https://www.indiebound.org/book/9780141181226',
        startDate: parseISO('2015-02-20'),
        endDate: parseISO('2015-02-28'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/one-flew-over-the-cuckoos-nest.jpg?{"width":200}'),
            full: require('images/books/one-flew-over-the-cuckoos-nest.jpg?{"width":600}')
        }
    },
    {
        title: 'Station Eleven',
        author: 'Emily St. John Mandel',
        url: 'https://www.indiebound.org/book/9780385353304',
        startDate: parseISO('2015-01-06'),
        endDate: parseISO('2015-01-21'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/station-11.jpg?{"width":200}'),
            full: require('images/books/station-11.jpg?{"width":600}')
        }
    },
    {
        title: 'The Painter',
        author: 'Peter Heller',
        url: 'https://www.indiebound.org/book/9780385352093',
        startDate: parseISO('2014-12-06'),
        endDate: parseISO('2015-01-05'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/the-painter.jpg?{"width":200}'),
            full: require('images/books/the-painter.jpg?{"width":600}')
        }
    }
];
