import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import THE_PAINTER_COVER from 'images/books/the-painter.jpg';
import STATION_11_COVER from 'images/books/station-11.jpg';
import ONE_FLEW_OVER_COVER from 'images/books/one-flew-over-the-cuckoos-nest.jpg';
import REDEPLOYMENT_COVER from 'images/books/redeployment.jpg';
import WOLF_HALL_COVER from 'images/books/wolf-hall.jpg';
import BRING_UP_THE_BODIES_COVER from 'images/books/bring-up-the-bodies.jpg';
import AMERICANAH_COVER from 'images/books/americanah.jpg';
import WEEKEND_WODEHOUSE_COVER from 'images/books/weekend-wodehouse.jpg';

export const BOOKS_2015: BookEntry[] = [
    {
        title: 'Week-End Wodehouse',
        author: 'P.G Wodehouse',
        url: 'https://www.amazon.com/Week-End-Wodehouse-P-G/dp/0712650342',
        startDate: parseISO('2015-11-19'),
        endDate: parseISO('2015-12-13'),
        favorite: true,
        image: WEEKEND_WODEHOUSE_COVER
    },
    {
        title: 'Americanah',
        author: 'Chimamanda Ngozi Adichie',
        url: 'https://www.indiebound.org/book/9780307455925',
        startDate: parseISO('2015-08-08'),
        endDate: parseISO('2015-09-23'),
        favorite: false,
        image: AMERICANAH_COVER
    },
    {
        title: 'Bring Up The Bodies',
        author: 'Hilary Mantel',
        url: 'https://www.indiebound.org/book/9781250024176',
        startDate: parseISO('2015-07-01'),
        endDate: parseISO('2015-08-07'),
        favorite: true,
        image: BRING_UP_THE_BODIES_COVER
    },
    {
        title: 'Wolf Hall',
        author: 'Hilary Mantel',
        url: 'https://www.indiebound.org/book/9780312429980',
        startDate: parseISO('2015-06-08'),
        endDate: parseISO('2015-07-31'),
        favorite: true,
        image: WOLF_HALL_COVER
    },
    {
        title: 'Redeployment',
        author: 'Phil Klay',
        url: 'https://www.indiebound.org/book/9780143126829',
        startDate: parseISO('2015-02-20'),
        endDate: parseISO('2015-03-10'),
        favorite: true,
        image: REDEPLOYMENT_COVER
    },
    {
        title: "One Flew Over the Cuckoo's Next",
        author: 'Ken Kesey',
        url: 'https://www.indiebound.org/book/9780141181226',
        startDate: parseISO('2015-02-20'),
        endDate: parseISO('2015-02-28'),
        favorite: false,
        image: ONE_FLEW_OVER_COVER
    },
    {
        title: 'Station Eleven',
        author: 'Emily St. John Mandel',
        url: 'https://www.indiebound.org/book/9780385353304',
        startDate: parseISO('2015-01-06'),
        endDate: parseISO('2015-01-21'),
        favorite: true,
        image: STATION_11_COVER
    },
    {
        title: 'The Painter',
        author: 'Peter Heller',
        url: 'https://www.indiebound.org/book/9780385352093',
        startDate: parseISO('2014-12-06'),
        endDate: parseISO('2015-01-05'),
        favorite: false,
        image: THE_PAINTER_COVER
    }
];
