import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';

export const BOOKS_2010: BookEntry[] = [
    {
        title: 'The Man Who Mistook His Wife for a Hat',
        subtitle: 'and Other Clinical Tales',
        author: 'Oliver Sacks',
        url: '',
        endDate: parseISO('2010-11-07'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'At Home',
        subtitle: 'A Short History of Private Life',
        author: 'Bill Bryson',
        url: '',
        endDate: parseISO('2010-11-01'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Looming Tower',
        subtitle: 'Al-Qaeda and the Road to 9/11',
        author: 'Lawrence Wright',
        url: '',
        endDate: parseISO('2010-08-22'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        url: '',
        endDate: parseISO('2010-07-30'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Whole Earth Discipline',
        subtitle: 'An Ecopragmatist Manifesto',
        author: 'Stewart Brand',
        url: '',
        endDate: parseISO('2010-07-24'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Cosmos',
        author: 'Carl Sagan',
        url: '',
        endDate: parseISO('2010-06-01'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Ill Fares The Land',
        author: 'Tony Judt',
        url: '',
        startDate: parseISO('2010-05-12'),
        endDate: parseISO('2010-06-01'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Sum',
        subtitle: 'Forty Tales From The Afterlives',
        author: 'David Eagleman',
        url: '',
        startDate: parseISO('2010-05-12'),
        endDate: parseISO('2010-05-19'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Greatest Show On Earth',
        subtitle: 'The Evidence for Evolution',
        author: 'Richard Dawkins',
        url: '',
        startDate: parseISO('2010-02-27'),
        endDate: parseISO('2010-03-26'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        url: '',
        startDate: parseISO('2010-02-27'),
        endDate: parseISO('2010-03-05'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'A Short History of Nearly Everything',
        author: 'Bill Bryson',
        url: '',
        endDate: parseISO('2010-02-02'),
        favorite: false,
        image: GRATITUDE_COVER
    },
    {
        title: 'Into Thin Air',
        subtitle: 'A Personal Account of the Mount Everest Disaster',
        author: 'Jon Krakauer',
        url: '',
        endDate: parseISO('2010-02-01'),
        favorite: true,
        image: GRATITUDE_COVER
    }
];
