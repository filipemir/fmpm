import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import A_PROMISED_LAND_COVER from 'images/books/a-promised-land.jpg';
import WHY_I_WRITE_COVER from 'images/books/why-i-write.jpg';
import PARABLE_OF_THE_SOWER from 'images/books/parable-of-the-sower.jpeg';
import TRUE_GRIT from 'images/books/true-grit.jpeg';
import PLANET_FOR_RENT from 'images/books/planet-for-rent.jpeg';
import ANTHROPOCENE_REVIEWED from 'images/books/anthropocene-reviewed.jpg';
import PIRANESI from 'images/books/piranesi.jpg';
import EATING_ANIMALS from 'images/books/eating-animals.jpg';
import GARDENER_AND_CARPENTER from 'images/books/the-gardener-and-the-carpenter.jpg';
import GLASS_HOTEL from 'images/books/the-glass-hotel.jpg';
import ELEVATING_CHILDCARE from 'images/books/elevating-child-care.jpg';
import PARABLE_OF_THE_TALENTS from 'images/books/parable-of-the-talents.jpg';

export const BOOKS_2021: BookEntry[] = [
    {
        title: 'A Planet for Rent',
        author: 'Yoss',
        url: 'https://www.indiebound.org/book/9781632060365',
        startDate: parseISO('2021-10-01'),
        endDate: parseISO('2021-12-27'),
        favorite: false,
        cover: PLANET_FOR_RENT
    },
    {
        title: 'The Anthropocene Reviewed',
        subtitle: 'Essays on a Human-Centered Planet',
        author: 'John Green',
        url: 'https://www.indiebound.org/book/9780525555216',
        startDate: parseISO('2021-07-10'),
        endDate: parseISO('2021-08-31'),
        favorite: true,
        cover: ANTHROPOCENE_REVIEWED
    },
    {
        title: 'Piranesi',
        author: 'Susanna Clarke',
        url: 'https://www.indiebound.org/book/9781635575637',
        startDate: parseISO('2021-07-08'),
        endDate: parseISO('2021-07-18'),
        favorite: true,
        cover: PIRANESI
    },
    {
        title: 'Eating Animals',
        author: 'Jonathan Safran Foer',
        url: 'https://www.indiebound.org/book/9780316069885',
        startDate: parseISO('2021-07-01'),
        endDate: parseISO('2021-09-14'),
        favorite: true,
        cover: EATING_ANIMALS
    },
    {
        title: 'The Gardener and the Carpenter',
        subtitle:
            'What the New Science of Child Development Tells Us About the Relationship Between Parents and Children',
        author: 'Alison Gopnik',
        url: 'https://www.indiebound.org/book/9781250132253',
        startDate: parseISO('2021-06-15'),
        endDate: parseISO('2021-08-25'),
        favorite: false,
        cover: GARDENER_AND_CARPENTER
    },
    {
        title: 'The Glass Hotel',
        author: 'Emily St. John Mandel',
        url: 'https://www.indiebound.org/book/9780525562948',
        startDate: parseISO('2021-06-15'),
        endDate: parseISO('2021-08-25'),
        favorite: false,
        cover: GLASS_HOTEL
    },
    {
        title: 'Elevating Child Care',
        subtitle: 'A Guide to Respectful Parenting',
        author: 'Janet Lansbury',
        url: 'https://www.indiebound.org/book/9786045674642',
        startDate: parseISO('2021-05-10'),
        endDate: parseISO('2021-06-15'),
        favorite: false,
        cover: ELEVATING_CHILDCARE
    },
    {
        title: 'Parable of the Talents',
        author: 'Octavia E. Butler',
        url: 'https://www.indiebound.org/book/9781538732199',
        startDate: parseISO('2021-06-08'),
        endDate: parseISO('2021-06-14'),
        favorite: false,
        cover: PARABLE_OF_THE_TALENTS
    },
    {
        title: 'Parable of the Sower',
        author: 'Octavia E. Butler',
        url: 'https://www.indiebound.org/book/9781538732182',
        startDate: parseISO('2021-04-21'),
        endDate: parseISO('2021-05-07'),
        favorite: false,
        cover: PARABLE_OF_THE_SOWER
    },
    {
        title: 'True Grit',
        author: 'Charles Portis',
        url: 'https://www.indiebound.org/book/9781590204597',
        startDate: parseISO('2021-03-23'),
        endDate: parseISO('2021-04-09'),
        favorite: false,
        cover: TRUE_GRIT
    },
    {
        title: 'A Promised Land',
        author: 'Barack Obama',
        url: 'https://www.indiebound.org/book/9781524763169',
        startDate: parseISO('2021-01-06'),
        endDate: parseISO('2021-01-26'),
        favorite: false,
        cover: A_PROMISED_LAND_COVER
    },
    {
        title: 'Why I Write',
        author: 'George Orwell',
        url: 'https://www.indiebound.org/book/9780143036357',
        startDate: parseISO('2020-12-29'),
        endDate: parseISO('2021-01-06'),
        favorite: false,
        cover: WHY_I_WRITE_COVER
    }
];
