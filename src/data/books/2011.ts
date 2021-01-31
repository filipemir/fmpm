import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2011: BookEntry[] = [
    {
        title: 'To End All Wars',
        subtitle: 'A Story of Loyalty and Rebellion, 1914-1918',
        author: 'Adam Hochschild',
        url: 'https://www.indiebound.org/book/9780547750316',
        endDate: parseISO('2011-12-01'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/to-end-all-wars.jpg?{"width":200}'),
            full: require('images/books/to-end-all-wars.jpg?{"width":600}')
        }
    },
    {
        title: 'The Black Swan',
        subtitle: 'The Impact of the Highly Improbable',
        author: 'Nassim Nicholas Taleb',
        url: 'https://www.indiebound.org/book/9781400063512',
        endDate: parseISO('2011-11-13'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/black-swan.jpg?{"width":200}'),
            full: require('images/books/black-swan.jpg?{"width":600}')
        }
    },
    {
        title: "Surely You're Joking Mr. Feynman!",
        subtitle: 'Adventures of a Curious Character',
        author: 'Richard Feynman',
        url: 'https://www.indiebound.org/book/9780393355628',
        endDate: parseISO('2011-10-02'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/surely-youre-joking-mr-feynman.jpg?{"width":200}'),
            full: require('images/books/surely-youre-joking-mr-feynman.jpg?{"width":600}')
        }
    },
    {
        title: "A Supposedly Fun Thing I'll Never Do Again",
        subtitle: 'Essays and Arguments',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9780316925280',
        endDate: parseISO('2011-08-29'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/a-supposedly-fun-thing.jpg?{"width":200}'),
            full: require('images/books/a-supposedly-fun-thing.jpg?{"width":600}')
        }
    },
    {
        title: 'This is Water',
        subtitle:
            'Some Thoughts, Delivered on a Significant Occasion, about Living a Compassionate Life',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9780316068222',
        endDate: parseISO('2011-08-18'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/this-is-water.jpg?{"width":200}'),
            full: require('images/books/this-is-water.jpg?{"width":600}')
        }
    },
    {
        title: 'Consider The Lobster',
        subtitle: 'And Other Essays',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9780316013321',
        endDate: parseISO('2011-08-15'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/consider-the-lobster.jpg?{"width":200}'),
            full: require('images/books/consider-the-lobster.jpg?{"width":600}')
        }
    },
    {
        title: 'Zeitoun',
        author: 'Dave Eggers',
        url:
            'https://www.indiebound.org/book/9780307387943/dave-eggers/zeitoun',
        endDate: parseISO('2011-08-03'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/zeitoun.jpg?{"width":200}'),
            full: require('images/books/zeitoun.jpg?{"width":600}')
        }
    },
    {
        title: 'The Big Short',
        author: 'Michael Lewis',
        url: 'https://www.indiebound.org/book/9780393338829',
        endDate: parseISO('2011-07-13'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/the-big-short.jpg?{"width":200}'),
            full: require('images/books/the-big-short.jpg?{"width":600}')
        }
    },
    {
        title: "The Tiger's Wife",
        author: 'Téa Obreht',
        url: 'https://www.indiebound.org/book/9780385343848',
        endDate: parseISO('2011-05-07'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/tigers-wife.jpg?{"width":200}'),
            full: require('images/books/tigers-wife.jpg?{"width":600}')
        }
    },
    {
        title: 'The Road',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9781606862193',
        endDate: parseISO('2011-05-30'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/the-road.jpg?{"width":200}'),
            full: require('images/books/the-road.jpg?{"width":600}')
        }
    }
];
