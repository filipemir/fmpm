import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import STORM_OF_WAR_COVER from 'images/books/storm-of-war.jpg';
import LATHE_OF_HEAVEN_COVER from 'images/books/lathe-of-heaven.jpg';
import LIARS_POKER_COVER from 'images/books/liars-poker.jpg';
import BOOMERANG_COVER from 'images/books/boomerang.jpg';
import THE_TERROR_COVER from 'images/books/the-terror.jpg';
import DOG_STARS_COVER from 'images/books/dog-stars.jpg';
import MOBY_DICK_COVER from 'images/books/moby-dick.jpg';
import THUNDERSTRUCK_COVER from 'images/books/thunderstruck.jpg';
import HOLOGRAM_COVER from 'images/books/a-hologram-for-the-king.jpg';
import BANNER_OF_HEAVEN_COVER from 'images/books/under-the-banner-of-heaven.jpg';
import DFW_LAST_INTERVIEW_COVER from 'images/books/dfw-last-interview.jpg';
import BOTH_FLESH_AND_NOT_COVER from 'images/books/both-flesh-and-not.jpg';

export const BOOKS_2012: BookEntry[] = [
    {
        title: 'Both Flesh and Not',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9780316182386',
        endDate: parseISO('2012-12-01'),
        favorite: false,
        image: BOTH_FLESH_AND_NOT_COVER
    },
    {
        title: 'David Foster Wallace',
        subtitle: 'The Last Interview and Other Conversations',
        author: 'David Foster Wallace',
        url: 'https://www.indiebound.org/book/9781612192062',
        endDate: parseISO('2012-11-30'),
        favorite: false,
        image: DFW_LAST_INTERVIEW_COVER
    },
    {
        title: 'Under The Banner of Heaven',
        subtitle: 'A Story of Violent Faith',
        author: 'Jon Krakauer',
        url: 'https://www.indiebound.org/book/9781400032808',
        endDate: parseISO('2012-11-15'),
        favorite: true,
        image: BANNER_OF_HEAVEN_COVER
    },
    {
        title: 'A Hologram for the King',
        author: 'Dave Eggers',
        url: 'https://www.indiebound.org/book/9781936365746',
        endDate: parseISO('2012-11-06'),
        favorite: false,
        image: HOLOGRAM_COVER
    },
    {
        title: 'Thunderstruck',
        author: 'Erik Larson',
        url: 'https://www.indiebound.org/book/9781400080670',
        endDate: parseISO('2012-11-03'),
        favorite: false,
        image: THUNDERSTRUCK_COVER
    },
    {
        title: 'Moby Dick',
        subtitle: 'or, the Whale',
        author: 'Herman Melville',
        url: 'https://www.indiebound.org/book/9780143105954',
        endDate: parseISO('2012-10-31'),
        favorite: false,
        image: MOBY_DICK_COVER
    },
    {
        title: 'The Dog Stars',
        author: 'Peter Heller',
        url: 'https://www.indiebound.org/book/9780307959942',
        endDate: parseISO('2012-09-20'),
        favorite: true,
        image: DOG_STARS_COVER
    },
    {
        title: 'The Terror',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780316017459',
        endDate: parseISO('2012-09-18'),
        favorite: true,
        image: THE_TERROR_COVER
    },
    {
        title: 'Boomerang',
        subtitle: 'Travels in the New Third World',
        author: 'Michael Lewis',
        url: 'https://www.indiebound.org/book/9780393081817',
        endDate: parseISO('2012-08-13'),
        favorite: false,
        image: BOOMERANG_COVER
    },
    {
        title: "Liar's Poker",
        author: 'Michael Lewis',
        url: 'https://www.indiebound.org/book/9780393338690',
        endDate: parseISO('2012-07-15'),
        favorite: true,
        image: LIARS_POKER_COVER
    },
    {
        title: 'The Lathe of Heaven',
        author: 'Ursula K. Le Guin',
        url: 'https://www.indiebound.org/book/9781416556961',
        endDate: parseISO('2012-07-02'),
        favorite: false,
        image: LATHE_OF_HEAVEN_COVER
    },
    {
        title: 'The Storm of War',
        subtitle: 'A New History of the Second World War',
        author: 'Andrew Roberts',
        url: 'https://www.indiebound.org/book/9780061228599',
        endDate: parseISO('2012-01-06'),
        favorite: false,
        image: STORM_OF_WAR_COVER
    }
];
