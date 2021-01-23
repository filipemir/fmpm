import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import JEEVES_OMNIBUS_COVER from 'images/books/jeeves-omnibus.jpg';
import FAR_FROM_THE_TREE_COVER from 'images/books/far-from-the-tree.jpg';
import THE_SATANIC_VERSES_COVER from 'images/books/the-satanic-verses.jpg';
import OSCAR_WAO_COVER from 'images/books/the-brief-wondrous-life-of-oscar-wao.jpg';
import ZEN_AND_THE_ART_COVER from 'images/books/zen-and-the-art-of-motorcycle-maintenance.jpg';
import ON_BEAUTY_COVER from 'images/books/on-beauty.jpg';
import CRUCIBLE_COVER from 'images/books/crucible.jpg';
import HITCHHIKERS_GUIDE_COVER from 'images/books/hitchhikers-guide.jpg';

export const BOOKS_2016: BookEntry[] = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adam',
        url: 'https://www.indiebound.org/book/9781400052929',
        startDate: parseISO('2016-12-11'),
        endDate: parseISO('2016-12-28'),
        favorite: false,
        image: HITCHHIKERS_GUIDE_COVER
    },
    {
        title: 'The Crucible',
        author: 'Arthur Miller',
        url: 'https://www.indiebound.org/book/9780142437339',
        startDate: parseISO('2016-11-18'),
        endDate: parseISO('2016-11-26'),
        favorite: true,
        image: CRUCIBLE_COVER
    },
    {
        title: 'On Beauty',
        author: 'Zadie Smith',
        url: 'https://www.indiebound.org/book/9780143037743',
        startDate: parseISO('2016-11-01'),
        endDate: parseISO('2016-11-16'),
        favorite: false,
        image: ON_BEAUTY_COVER
    },
    {
        title: 'Zen and The Art of Motorcycle Maintenance',
        subtitle: 'An Inquiry Into Values',
        author: 'Robert Pirsig',
        url: 'https://www.indiebound.org/book/9780688002305',
        startDate: parseISO('2016-09-01'),
        endDate: parseISO('2016-10-01'),
        favorite: true,
        image: ZEN_AND_THE_ART_COVER
    },
    {
        title: 'The Brief Wondrous Life of Oscar Wao',
        author: 'Junot Díaz',
        url: 'https://www.indiebound.org/book/9781594483295',
        startDate: parseISO('2016-03-01'),
        endDate: parseISO('2016-03-28'),
        favorite: false,
        image: OSCAR_WAO_COVER
    },
    {
        title: 'The Satanic Verses',
        author: 'Salman Rushdie',
        url: 'https://www.indiebound.org/book/9780812976717',
        startDate: parseISO('2016-01-26'),
        endDate: parseISO('2016-02-12'),
        favorite: false,
        image: THE_SATANIC_VERSES_COVER
    },
    {
        title: 'The Jeeves Omnibus',
        author: 'P.G. Wodehouse',
        url:
            'https://www.amazon.com/Jeeves-omnibus-Wodehouse-P-G/dp/0091745748', // TODO: CHECK WHICH
        startDate: parseISO('2016-01-06'),
        endDate: parseISO('2016-05-05'),
        favorite: true,
        image: JEEVES_OMNIBUS_COVER
    },
    {
        title: 'Far From The Tree',
        subtitle: 'Parents, Children and the Search for Identity',
        author: 'Andrew Solomon',
        url: 'https://www.indiebound.org/book/9780743236720',
        startDate: parseISO('2016-10-01'),
        endDate: parseISO('2016-05-06'),
        favorite: true,
        image: FAR_FROM_THE_TREE_COVER
    }
];
