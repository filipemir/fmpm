import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import INTO_THIN_AIR_COVER from 'images/books/into-thin-air.jpg';
import SHORT_HISTORY_COVER from 'images/books/a-short-history-of-nearly-everything.jpg';
import KITE_RUNNER_COVER from 'images/books/kite-runner.jpg';
import GREATEST_SHOW_COVER from 'images/books/the-greatest-show-on-earth.jpg';
import SUM_COVER from 'images/books/sum.jpg';
import ILL_FARES_THE_LAND_COVER from 'images/books/ill-fares-the-land.jpg';
import COSMOS_COVER from 'images/books/cosmos.jpg';
import WHOLE_EARTH_DISCIPLINE_COVER from 'images/books/whole-earth-discipline.jpg';
import ME_TALK_PRETTY_COVER from 'images/books/me-talk-pretty-one-day.jpg';
import LOOMING_TOWER_COVER from 'images/books/looming-tower.jpg';
import AT_HOME_COVER from 'images/books/at-home.jpg';
import WIFE_HAT_COVER from 'images/books/the-man-who-mistook-his-wife-for-a-hat.jpg';

export const BOOKS_2010: BookEntry[] = [
    {
        title: 'The Man Who Mistook His Wife for a Hat',
        subtitle: 'and Other Clinical Tales',
        author: 'Oliver Sacks',
        url: 'https://www.indiebound.org/book/9780684853949',
        endDate: parseISO('2010-11-07'),
        favorite: false,
        image: WIFE_HAT_COVER
    },
    {
        title: 'At Home',
        subtitle: 'A Short History of Private Life',
        author: 'Bill Bryson',
        url: 'https://www.indiebound.org/book/9780767919388/bill-bryson/home',
        endDate: parseISO('2010-11-01'),
        favorite: false,
        image: AT_HOME_COVER
    },
    {
        title: 'The Looming Tower',
        subtitle: 'Al-Qaeda and the Road to 9/11',
        author: 'Lawrence Wright',
        url: 'https://www.indiebound.org/book/9781400030842',
        endDate: parseISO('2010-08-22'),
        favorite: true,
        image: LOOMING_TOWER_COVER
    },
    {
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        url: 'https://www.indiebound.org/book/9780316777728',
        endDate: parseISO('2010-07-30'),
        favorite: false,
        image: ME_TALK_PRETTY_COVER
    },
    {
        title: 'Whole Earth Discipline',
        subtitle: 'An Ecopragmatist Manifesto',
        author: 'Stewart Brand',
        url: 'https://www.indiebound.org/book/9780670021215',
        endDate: parseISO('2010-07-24'),
        favorite: true,
        image: WHOLE_EARTH_DISCIPLINE_COVER
    },
    {
        title: 'Cosmos',
        author: 'Carl Sagan',
        url: 'https://www.indiebound.org/book/9780394715964',
        endDate: parseISO('2010-06-01'),
        favorite: true,
        image: COSMOS_COVER
    },
    {
        title: 'Ill Fares The Land',
        author: 'Tony Judt',
        url: 'https://www.indiebound.org/book/9781594202766',
        startDate: parseISO('2010-05-12'),
        endDate: parseISO('2010-06-01'),
        favorite: true,
        image: ILL_FARES_THE_LAND_COVER
    },
    {
        title: 'Sum',
        subtitle: 'Forty Tales From The Afterlives',
        author: 'David Eagleman',
        url: 'https://www.indiebound.org/book/9780307377340',
        startDate: parseISO('2010-05-12'),
        endDate: parseISO('2010-05-19'),
        favorite: true,
        image: SUM_COVER
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
        image: GREATEST_SHOW_COVER
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        url: 'https://www.indiebound.org/book/9781573222457',
        startDate: parseISO('2010-02-27'),
        endDate: parseISO('2010-03-05'),
        favorite: false,
        image: KITE_RUNNER_COVER
    },
    {
        title: 'A Short History of Nearly Everything',
        author: 'Bill Bryson',
        url: '',
        endDate: parseISO('2010-02-02'),
        favorite: false,
        image: SHORT_HISTORY_COVER
    },
    {
        title: 'Into Thin Air',
        subtitle: 'A Personal Account of the Mount Everest Disaster',
        author: 'Jon Krakauer',
        url: 'https://www.indiebound.org/book/9780385494786',
        endDate: parseISO('2010-02-01'),
        favorite: true,
        image: INTO_THIN_AIR_COVER
    }
];
