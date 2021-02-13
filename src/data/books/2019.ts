import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import { ICE } from './common';

export const BOOKS_2019: BookEntry[] = [
    {
        title: 'Libra',
        author: 'Don Delillo',
        url: 'https://www.indiebound.org/book/9780140156041',
        startDate: parseISO('2019-10-12'),
        endDate: parseISO('2019-12-09'),
        favorite: false,
        cover: require('images/books/libra.jpg')
    },
    {
        title: 'Hyperion',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780553283686',
        startDate: parseISO('2019-10-26'),
        endDate: parseISO('2019-11-20'),
        favorite: false,
        cover: require('images/books/hyperion.jpg')
    },
    {
        title: 'The Testaments',
        author: 'Margaret Atwood',
        url: 'https://www.indiebound.org/book/9780385543781',
        startDate: parseISO('2019-10-13'),
        endDate: parseISO('2019-10-14'),
        favorite: false,
        cover: require('images/books/testaments.jpg')
    },
    {
        title: 'Team of Rivals',
        subtitle: 'The Political Genius of Abraham Lincoln',
        author: 'Doris Kearns Goodwin',
        url: 'https://www.indiebound.org/book/9780684824901',
        startDate: parseISO('2019-09-07'),
        endDate: parseISO('2019-10-11'),
        favorite: true,
        cover: require('images/books/team-of-rivals.jpg')
    },
    {
        title: 'Empire of Illusion',
        subtitle: 'The End of Literacy and the Triumph of Spectacle',
        author: 'Chris Hedges',
        url: 'https://www.indiebound.org/book/9781568586137',
        startDate: parseISO('2019-09-09'),
        endDate: parseISO('2019-09-11'),
        favorite: false,
        cover: require('images/books/empire-of-illusion.jpg')
    },
    {
        title: "Jesus' Son",
        author: 'Denis Johnson',
        url: 'https://www.indiebound.org/book/9780060975777',
        startDate: parseISO('2019-09-05'),
        endDate: parseISO('2019-09-09'),
        favorite: false,
        cover: require('images/books/jesus-son.jpg')
    },
    {
        title: 'Digital Minimalism',
        subtitle: 'Choosing a Focused Life in a Noisy World',
        author: 'Cal Newport',
        url: 'https://www.indiebound.org/book/9780525536512',
        startDate: parseISO('2019-09-02'),
        endDate: parseISO('2019-09-04'),
        favorite: false,
        cover: require('images/books/digital-minimalism.jpg')
    },
    {
        ...ICE,
        startDate: parseISO('2019-08-26'),
        endDate: parseISO('2019-09-02')
    },
    {
        title: 'Death is Hard Work',
        author: 'Khaled Khalifa',
        url: 'https://www.indiebound.org/book/9780374135737',
        startDate: parseISO('2019-07-13'),
        endDate: parseISO('2019-08-25'),
        favorite: false,
        cover: require('images/books/death-is-hard-work.jpg')
    },
    {
        title: 'Pale Fire',
        author: 'Vladimir Nabokov',
        url: 'https://www.indiebound.org/book/9780679410775',
        startDate: parseISO('2019-03-18'),
        endDate: parseISO('2019-05-15'),
        favorite: true,
        cover: require('images/books/pale-fire.jpg')
    },
    {
        title: 'Espresso Lessons',
        author: 'Arno Ilgner',
        url:
            'https://www.amazon.com/Espresso-Lessons-Rock-Warriors-Way/dp/0974011231',
        startDate: parseISO('2019-01-19'),
        endDate: parseISO('2019-03-18'),
        favorite: false,
        cover: require('images/books/espresso-lessons.jpg')
    },
    {
        title: 'Stoner',
        author: 'John Williams',
        url: 'https://www.indiebound.org/book/9781590171998',
        startDate: parseISO('2019-03-13'),
        endDate: parseISO('2019-03-18'),
        favorite: false,
        cover: require('images/books/stoner.jpg')
    },
    {
        title: 'Labyrinths',
        author: 'Jorge Luis Borges',
        url: 'https://www.indiebound.org/book/9780811216999',
        startDate: parseISO('2018-01-18'),
        endDate: parseISO('2019-03-14'),
        favorite: true,
        cover: require('images/books/labyrinths.jpg')
    },
    {
        title: 'Free Range Kids',
        subtitle:
            'How To Raise Safe, Self-Reliant Children (Without Going Nuts With Worry)',
        author: 'Lenore Skenazy',
        url: 'https://www.indiebound.org/book/9780470574751',
        startDate: parseISO('2019-01-28'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        cover: require('images/books/free-range-kids.jpg')
    },
    {
        title: 'The Bullet Journal Method',
        subtitle: 'Track the Past, Order the Present, Design the Future',
        author: 'Ryder Carrol',
        url: 'https://www.indiebound.org/book/9780525533337',
        startDate: parseISO('2019-01-28'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        cover: require('images/books/the-bullet-journal-method.jpg')
    },
    {
        title: 'Suttree',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679736325',
        startDate: parseISO('2018-11-16'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        cover: require('images/books/suttree.jpg')
    },
    {
        title: 'Reservoir 13',
        author: 'Jon McGregor',
        url: 'https://www.indiebound.org/book/9781936787708',
        startDate: parseISO('2018-12-24'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        cover: require('images/books/reservoir-13.jpg')
    }
];
