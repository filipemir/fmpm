import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2010: BookEntry[] = [
    {
        title: 'The Man Who Mistook His Wife for a Hat',
        subtitle: 'and Other Clinical Tales',
        author: 'Oliver Sacks',
        url: 'https://www.indiebound.org/book/9780684853949',
        endDate: parseISO('2010-11-07'),
        favorite: false,
        cover: require('images/books/the-man-who-mistook-his-wife-for-a-hat.jpg')
    },
    {
        title: 'At Home',
        subtitle: 'A Short History of Private Life',
        author: 'Bill Bryson',
        url: 'https://www.indiebound.org/book/9780767919388/bill-bryson/home',
        endDate: parseISO('2010-11-01'),
        favorite: false,
        cover: require('images/books/at-home.jpg')
    },
    {
        title: 'The Looming Tower',
        subtitle: 'Al-Qaeda and the Road to 9/11',
        author: 'Lawrence Wright',
        url: 'https://www.indiebound.org/book/9781400030842',
        endDate: parseISO('2010-08-22'),
        favorite: true,
        cover: require('images/books/looming-tower.jpg')
    },
    {
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        url: 'https://www.indiebound.org/book/9780316777728',
        endDate: parseISO('2010-07-30'),
        favorite: false,
        cover: require('images/books/me-talk-pretty-one-day.jpg')
    },
    {
        title: 'Whole Earth Discipline',
        subtitle: 'An Ecopragmatist Manifesto',
        author: 'Stewart Brand',
        url: 'https://www.indiebound.org/book/9780670021215',
        endDate: parseISO('2010-07-24'),
        favorite: true,
        cover: require('images/books/whole-earth-discipline.jpg')
    },
    {
        title: 'Cosmos',
        author: 'Carl Sagan',
        url: 'https://www.indiebound.org/book/9780394715964',
        endDate: parseISO('2010-06-01'),
        favorite: true,
        cover: require('images/books/cosmos.jpg')
    },
    {
        title: 'Ill Fares The Land',
        author: 'Tony Judt',
        url: 'https://www.indiebound.org/book/9781594202766',
        startDate: parseISO('2010-05-12'),
        endDate: parseISO('2010-06-01'),
        favorite: true,
        cover: require('images/books/ill-fares-the-land.jpg')
    },
    {
        title: 'Sum',
        subtitle: 'Forty Tales From The Afterlives',
        author: 'David Eagleman',
        url: 'https://www.indiebound.org/book/9780307377340',
        startDate: parseISO('2010-05-12'),
        endDate: parseISO('2010-05-19'),
        favorite: true,
        cover: require('images/books/sum.jpg')
    },
    {
        title: 'The Greatest Show On Earth',
        subtitle: 'The Evidence for Evolution',
        author: 'Richard Dawkins',
        url:
            'https://www.indiebound.org/book/9781416594789/Richard-Dawkins/Greatest-Show-Earth',
        startDate: parseISO('2010-02-27'),
        endDate: parseISO('2010-03-26'),
        favorite: true,
        cover: require('images/books/the-greatest-show-on-earth.jpg')
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        url: 'https://www.indiebound.org/book/9781573222457',
        startDate: parseISO('2010-02-27'),
        endDate: parseISO('2010-03-05'),
        favorite: false,
        cover: require('images/books/kite-runner.jpg')
    },
    {
        title: 'A Short History of Nearly Everything',
        author: 'Bill Bryson',
        url: '',
        endDate: parseISO('2010-02-02'),
        favorite: false,
        cover: require('images/books/a-short-history-of-nearly-everything.jpg')
    },
    {
        title: 'Into Thin Air',
        subtitle: 'A Personal Account of the Mount Everest Disaster',
        author: 'Jon Krakauer',
        url: 'https://www.indiebound.org/book/9780385494786',
        endDate: parseISO('2010-02-01'),
        favorite: true,
        cover: require('images/books/into-thin-air.jpg')
    }
];
