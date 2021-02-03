import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2012: BookEntry[] = [
    {
        title: 'Both Flesh and Not',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9780316182386',
        endDate: parseISO('2012-12-01'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/both-flesh-and-not.jpg?{"width":200}'),
            full: require('images/books/both-flesh-and-not.jpg?{"width":600}')
        }
    },
    {
        title: 'David Foster Wallace',
        subtitle: 'The Last Interview and Other Conversations',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9781612192062',
        endDate: parseISO('2012-11-30'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/dfw-last-interview.jpg?{"width":200}'),
            full: require('images/books/dfw-last-interview.jpg?{"width":600}')
        }
    },
    {
        title: 'Under The Banner of Heaven',
        subtitle: 'A Story of Violent Faith',
        author: 'Jon Krakauer',
        url: 'https://www.indiebound.org/book/9781400032808',
        endDate: parseISO('2012-11-15'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/under-the-banner-of-heaven.jpg?{"width":200}'),
            full: require('images/books/under-the-banner-of-heaven.jpg?{"width":600}')
        }
    },
    {
        title: 'A Hologram for the King',
        author: 'Dave Eggers',
        url: 'https://www.indiebound.org/book/9781936365746',
        endDate: parseISO('2012-11-06'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/a-hologram-for-the-king.png?{"width":200}'),
            full: require('images/books/a-hologram-for-the-king.png?{"width":600}')
        }
    },
    {
        title: 'Thunderstruck',
        author: 'Erik Larson',
        url: 'https://www.indiebound.org/book/9781400080670',
        endDate: parseISO('2012-11-03'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/thunderstruck.jpg?{"width":200}'),
            full: require('images/books/thunderstruck.jpg?{"width":600}')
        }
    },
    {
        title: 'Moby Dick',
        subtitle: 'or, the Whale',
        author: 'Herman Melville',
        url: 'https://www.indiebound.org/book/9780143105954',
        endDate: parseISO('2012-10-31'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/moby-dick.jpg?{"width":200}'),
            full: require('images/books/moby-dick.jpg?{"width":600}')
        }
    },
    {
        title: 'The Dog Stars',
        author: 'Peter Heller',
        url: 'https://www.indiebound.org/book/9780307959942',
        endDate: parseISO('2012-09-20'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/dog-stars.jpg?{"width":200}'),
            full: require('images/books/dog-stars.jpg?{"width":600}')
        }
    },
    {
        title: 'The Terror',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780316017459',
        endDate: parseISO('2012-09-18'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/the-terror.jpg?{"width":200}'),
            full: require('images/books/the-terror.jpg?{"width":600}')
        }
    },
    {
        title: 'Boomerang',
        subtitle: 'Travels in the New Third World',
        author: 'Michael Lewis',
        url: 'https://www.indiebound.org/book/9780393081817',
        endDate: parseISO('2012-08-13'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/boomerang.jpg?{"width":200}'),
            full: require('images/books/boomerang.jpg?{"width":600}')
        }
    },
    {
        title: "Liar's Poker",
        author: 'Michael Lewis',
        url: 'https://www.indiebound.org/book/9780393338690',
        endDate: parseISO('2012-07-15'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/liars-poker.jpg?{"width":200}'),
            full: require('images/books/liars-poker.jpg?{"width":600}')
        }
    },
    {
        title: 'The Lathe of Heaven',
        author: 'Ursula K. Le Guin',
        url: 'https://www.indiebound.org/book/9781416556961',
        endDate: parseISO('2012-07-02'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/lathe-of-heaven.jpg?{"width":200}'),
            full: require('images/books/lathe-of-heaven.jpg?{"width":600}')
        }
    },
    {
        title: 'The Storm of War',
        subtitle: 'A New History of the Second World War',
        author: 'Andrew Roberts',
        url: 'https://www.indiebound.org/book/9780061228599',
        endDate: parseISO('2012-01-06'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/storm-of-war.jpg?{"width":200}'),
            full: require('images/books/storm-of-war.jpg?{"width":600}')
        }
    }
];
