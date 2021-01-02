import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2011: BookEntry[] = [
    {
        title: 'To End All Wars',
        subtitle: 'A Story of Loyalty and Rebellion',
        author: 'Adam Hochschild',
        url: '',
        endDate: parseISO('2011-12-01'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Black Swan',
        author: 'Nassim Nicholas Taleb',
        url: '',
        endDate: parseISO('2011-11-13'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: "Surely You're Joking Mr. Feynman!",
        subtitle: 'Adventures of a Curious Character',
        author: 'Richard Feynman',
        url: '',
        endDate: parseISO('2011-10-02'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: "A Supposedly Fun Thing I'll Never Do Again",
        subtitle: 'Essays and Arguments',
        author: 'David Foster Wallace',
        url: '',
        endDate: parseISO('2011-08-29'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'This is Water',
        subtitle:
            'Some Thoughts, Delivered on a Significant Occasion, about Living a Compassionate Life',
        author: 'David Foster Wallace',
        url: '',
        endDate: parseISO('2011-08-18'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Consider The Lobster',
        subtitle: 'And Other Essays',
        author: 'David Foster Wallace',
        url: '',
        endDate: parseISO('2011-08-15'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Zeitoun',
        author: 'Dave Eggers',
        url: '',
        endDate: parseISO('2011-08-03'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Big Short',
        author: 'Michael Lewis',
        url: '',
        endDate: parseISO('2011-07-13'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: "The Tiger's Wife",
        author: 'Téa Obreht',
        url: '',
        endDate: parseISO('2011-05-07'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Road',
        author: 'Cormac McCarthy',
        url: '',
        endDate: parseISO('2011-05-30'),
        favorite: true,
        image: GRATITUDE_COVER
    }
];
