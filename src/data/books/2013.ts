import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2013: BookEntry[] = [
    {
        title: 'Klondike Tales',
        author: 'Jack London',
        url: '',
        startDate: parseISO('2013-11-04'),
        endDate: parseISO('2013-12-26'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        url: '',
        startDate: parseISO('2013-12-02'),
        endDate: parseISO('2013-12-26'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Catch-22',
        author: 'Joseph Heller',
        url: '',
        startDate: parseISO('2013-10-09'),
        endDate: parseISO('2013-10-12'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Emperor of All Maladies',
        subtitle: 'A Biography of Cancer',
        author: 'Siddhartha Mukherjee',
        url: '',
        startDate: parseISO('2013-07-29'),
        endDate: parseISO('2013-08-24'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Let the Great World Spin',
        author: 'Colum McMann',
        url: '',
        startDate: parseISO('2013-07-02'),
        endDate: parseISO('2013-07-23'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'A Confederacy of Dunces',
        author: 'John Kennedy Toole',
        url: '',
        startDate: parseISO('2013-06-16'),
        endDate: parseISO('2013-07-02'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Eiger Dreams',
        subtitle: 'Ventures Among Men and Mountains',
        author: 'Jon Krakauer',
        url: '',
        startDate: parseISO('2013-06-01'),
        endDate: parseISO('2013-06-14'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Voyage of the Beagle',
        author: 'Charles Darwin',
        url: '',
        startDate: parseISO('2013-05-08'),
        endDate: parseISO('2013-06-01'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: "Let's Explore Diabetes with Owls",
        author: 'David Sedaris',
        url: '',
        startDate: parseISO('2013-05-05'),
        endDate: parseISO('2013-05-08'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Galápagos',
        author: 'Kurt Vonnegut',
        url: '',
        startDate: parseISO('2013-04-27'),
        endDate: parseISO('2013-05-03'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Cloud Atlas',
        author: 'David Mitchell',
        url: '',
        startDate: parseISO('2013-04-25'),
        endDate: parseISO('2013-04-27'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Amazing Adventures of Kavalier & Clay',
        author: 'Michael Chabon',
        url: '',
        endDate: parseISO('2013-05-16'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Middlesex',
        author: 'Jeffrey Eugenides',
        url: '',
        endDate: parseISO('2013-01-17'),
        favorite: true,
        image: GRATITUDE_COVER
    }
];
