import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2016: BookEntry[] = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adam',
        url: 'https://www.indiebound.org/book/9781400052929',
        startDate: parseISO('2016-12-11'),
        endDate: parseISO('2016-12-28'),
        favorite: false,
        cover: require('images/books/hitchhikers-guide.jpeg')
    },
    {
        title: 'The Crucible',
        author: 'Arthur Miller',
        url: 'https://www.indiebound.org/book/9780142437339',
        startDate: parseISO('2016-11-18'),
        endDate: parseISO('2016-11-26'),
        favorite: true,
        cover: require('images/books/crucible.jpeg')
    },
    {
        title: 'On Beauty',
        author: 'Zadie Smith',
        url: 'https://www.indiebound.org/book/9780143037743',
        startDate: parseISO('2016-11-01'),
        endDate: parseISO('2016-11-16'),
        favorite: false,
        cover: require('images/books/on-beauty.jpg')
    },
    {
        title: 'Zen and The Art of Motorcycle Maintenance',
        subtitle: 'An Inquiry Into Values',
        author: 'Robert Pirsig',
        url: 'https://www.indiebound.org/book/9780688002305',
        startDate: parseISO('2016-09-01'),
        endDate: parseISO('2016-10-01'),
        favorite: true,
        cover: require('images/books/zen-and-the-art-of-motorcycle-maintenance.jpg')
    },
    {
        title: 'The Brief Wondrous Life of Oscar Wao',
        author: 'Junot Díaz',
        url: 'https://www.indiebound.org/book/9781594483295',
        startDate: parseISO('2016-03-01'),
        endDate: parseISO('2016-03-28'),
        favorite: false,
        cover: require('images/books/the-brief-wondrous-life-of-oscar-wao.jpg')
    },
    {
        title: 'The Satanic Verses',
        author: 'Salman Rushdie',
        url: 'https://www.indiebound.org/book/9780812976717',
        startDate: parseISO('2016-01-26'),
        endDate: parseISO('2016-02-12'),
        favorite: false,
        cover: require('images/books/the-satanic-verses.jpg')
    },
    {
        title: 'The Jeeves Omnibus',
        author: 'P.G. Wodehouse',
        url:
            'https://www.amazon.com/Jeeves-omnibus-Wodehouse-P-G/dp/0091745748',
        startDate: parseISO('2016-01-06'),
        endDate: parseISO('2016-05-05'),
        favorite: true,
        cover: require('images/books/jeeves-omnibus.jpg')
    },
    {
        title: 'Far From The Tree',
        subtitle: 'Parents, Children and the Search for Identity',
        author: 'Andrew Solomon',
        url: 'https://www.indiebound.org/book/9780743236720',
        startDate: parseISO('2016-10-01'),
        endDate: parseISO('2016-05-06'),
        favorite: true,
        cover: require('images/books/far-from-the-tree.jpg')
    }
];
