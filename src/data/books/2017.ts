import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import LESS_COVER from 'images/books/less.jpg';

export const BOOKS_2017: BookEntry[] = [
    {
        title: 'Wolf in White Van',
        author: 'John Darnielle',
        url: '',
        startDate: parseISO('2017-12-25'),
        endDate: parseISO('2017-12-30'),
        favorite: true,
        image: LESS_COVER
    },
    {
        title: "Man's Search for Meaning",
        author: 'Viktor Frankl',
        url: '',
        startDate: parseISO('2017-12-20'),
        endDate: parseISO('2017-12-25'),
        favorite: true,
        image: LESS_COVER
    },
    {
        title: 'The Push',
        author: 'Tommy Caldwell',
        url: '',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-12-24'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Doing Good Better',
        author: 'Will MacAskill',
        url: '',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-12-21'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Lying',
        author: 'Sam Harris',
        url: '',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-11-30'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'The Sympathizer',
        author: 'Viet Thanh Nguyen',
        url: '',
        startDate: parseISO('2017-10-23'),
        endDate: parseISO('2017-11-29'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Why Buddhism is True',
        author: 'Robert Wright',
        url: '',
        startDate: parseISO('2017-09-23'),
        endDate: parseISO('2017-10-23'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Lincoln in the Bardo',
        author: 'George Saunders',
        url: '',
        startDate: parseISO('2017-10-06'),
        endDate: parseISO('2017-10-18'),
        favorite: true,
        image: LESS_COVER
    },
    {
        title: 'Creative Schools',
        author: 'Ken Robinson',
        url: '',
        startDate: parseISO('2017-09-01'),
        endDate: parseISO('2017-10-01'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'A Man Called Ove',
        author: 'Fredrick Backmnan',
        url: '',
        startDate: parseISO('2017-08-26'),
        endDate: parseISO('2017-09-26'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
        url: '',
        startDate: parseISO('2017-08-10'),
        endDate: parseISO('2017-08-25'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'On Tyranny',
        author: '',
        url: '',
        startDate: parseISO('2017-08-07'),
        endDate: parseISO('2017-08-09'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Gratitude',
        author: 'Oliver Sacks',
        url: '',
        startDate: parseISO('2017-08-01'),
        endDate: parseISO('2017-08-02'),
        favorite: true,
        image: LESS_COVER
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        url: '',
        startDate: parseISO('2017-07-17'),
        endDate: parseISO('2017-07-27'),
        favorite: true,
        image: LESS_COVER
    },
    {
        title: 'The Wind-up Bird Chronicle',
        author: 'Haruki Murakami',
        url: '',
        startDate: parseISO('2017-06-12'),
        endDate: parseISO('2017-07-16'),
        favorite: true,
        image: LESS_COVER
    },
    {
        title: 'The Vegetarian',
        author: 'Han Kang',
        url: '',
        startDate: parseISO('2017-05-28'),
        endDate: parseISO('2017-06-11'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Alone on the Wall',
        author: 'Alex Honnold, David Roberts',
        url: '',
        startDate: parseISO('2017-05-01'),
        endDate: parseISO('2017-05-31'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'My Struggle',
        author: 'Karl Ove Knausgård',
        url: '',
        startDate: parseISO('2017-05-15'),
        endDate: parseISO('2017-05-28'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Felicity',
        author: 'Mary Oliver',
        url: '',
        startDate: parseISO('2017-05-10'),
        endDate: parseISO('2017-05-11'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'The Course of Love',
        author: 'Alain de Botton',
        url: '',
        startDate: parseISO('2017-03-15'),
        endDate: parseISO('2017-04-28'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'The Terror Years',
        author: 'Lawrence Wright',
        url: '',
        startDate: parseISO('2017-04-11'),
        endDate: parseISO('2017-04-21'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Assholes',
        author: 'Aaron James',
        url: '',
        startDate: parseISO('2017-03-15'),
        endDate: parseISO('2017-03-15'),
        favorite: false,
        image: LESS_COVER
    },
    {
        title: 'Waking Up',
        author: 'Sam Harris',
        url: '',
        startDate: parseISO('2017-01-24'),
        endDate: parseISO('2017-02-02'),
        favorite: false,
        image: LESS_COVER
    }
];
