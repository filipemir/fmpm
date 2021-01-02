import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2012: BookEntry[] = [
    {
        title: 'Both Flesh and Not',
        author: 'David Foster Wallace',
        url: '',
        endDate: parseISO('2012-12-01'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'David Foster Wallace',
        subtitle: 'The Last Interview and Other Conversations',
        author: 'David Foster Wallace',
        url: '',
        endDate: parseISO('2012-11-30'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Under The Banner of Heaven',
        author: 'Jon Krakauer',
        url: '',
        endDate: parseISO('2012-11-15'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'A Hologram for the King',
        author: 'Dave Eggers',
        url: '',
        endDate: parseISO('2012-11-06'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Thunderstruck',
        author: 'Erik Larson',
        url: '',
        endDate: parseISO('2012-11-03'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Moby Dick',
        subtitle: 'or, the Whale',
        author: 'Herman Melville',
        url: '',
        endDate: parseISO('2012-10-31'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Dog Stars',
        author: 'Peter Heller',
        url: '',
        endDate: parseISO('2012-09-20'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Terror',
        author: 'Dan Simmons',
        url: '',
        endDate: parseISO('2012-09-18'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Boomerang',
        subtitle: 'Travels in the New Third World',
        author: 'Michael Lewis',
        url: '',
        endDate: parseISO('2012-08-13'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: "Liar's Poker",
        author: 'Michael Lewis',
        url: '',
        endDate: parseISO('2012-07-15'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Lathe of Heaven',
        author: 'Ursula K. Le Guin',
        url: '',
        endDate: parseISO('2012-07-02'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Storm of War',
        author: 'Andrew Roberts',
        url: '',
        endDate: parseISO('2012-01-06'),
        favorite: false,
        image: GRATITUDE_COVER
    }
];
