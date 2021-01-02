import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import LIBRA_COVER from 'images/books/libra.jpg';
import HYPERION_COVER from 'images/books/hyperion.jpg';
import TESTAMENTS_COVER from 'images/books/testaments.jpg';
import TEAM_OF_RIVALS_COVER from 'images/books/team-of-rivals.jpg';
import EMPIRE_OF_ILLUSION_COVER from 'images/books/empire-of-illusion.jpg';
import JESUS_SON_COVER from 'images/books/jesus-son.jpg';
import DIGITAL_MINIMALISM_COVER from 'images/books/digital-minimalism.jpg';
import DEATH_IS_HARD_WORK_COVER from 'images/books/death-is-hard-work.jpg';
import PALE_FIRE_COVER from 'images/books/pale-fire.jpg';
import ESPRESSO_LESSONS_COVER from 'images/books/espresso-lessons.jpg';
import STONER_COVER from 'images/books/stoner.jpg';
import LABYRINTHS_COVER from 'images/books/labyrinths.jpg';
import FREE_RANGE_KIDS_COVER from 'images/books/free-range-kids.jpg';
import BULLET_JOURNAL_COVER from 'images/books/the-bullet-journal-method.jpg';
import SUTTREE_COVER from 'images/books/suttree.jpg';
import RESERVOIR_13_COVER from 'images/books/reservoir-13.jpg';
import { ICE } from './common';

export const BOOKS_2019: BookEntry[] = [
    {
        title: 'Libra',
        author: 'Don Delillo',
        url: 'https://www.indiebound.org/book/9780140156041',
        startDate: parseISO('2019-10-12'),
        endDate: parseISO('2019-12-09'),
        favorite: false,
        image: LIBRA_COVER
    },
    {
        title: 'Hyperion',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780553283686',
        startDate: parseISO('2019-10-26'),
        endDate: parseISO('2019-11-20'),
        favorite: false,
        image: HYPERION_COVER
    },
    {
        title: 'The Testaments',
        author: 'Margaret Atwood',
        url: 'https://www.indiebound.org/book/9780385543781',
        startDate: parseISO('2019-10-13'),
        endDate: parseISO('2019-10-14'),
        favorite: false,
        image: TESTAMENTS_COVER
    },
    {
        title: 'Team of Rivals',
        subtitle: 'The Political Genius of Abraham Lincoln',
        author: 'Doris Kearns Goodwin',
        url: 'https://www.indiebound.org/book/9780684824901',
        startDate: parseISO('2019-09-07'),
        endDate: parseISO('2019-10-11'),
        favorite: true,
        image: TEAM_OF_RIVALS_COVER
    },
    {
        title: 'Empire of Illusion',
        subtitle: 'The End of Literacy and the Triumph of Spectacle',
        author: 'Chris Hedges',
        url: 'https://www.indiebound.org/book/9781568586137',
        startDate: parseISO('2019-09-09'),
        endDate: parseISO('2019-09-11'),
        favorite: false,
        image: EMPIRE_OF_ILLUSION_COVER
    },
    {
        title: "Jesus' Son",
        author: 'Denis Johnson',
        url: 'https://www.indiebound.org/book/9780060975777',
        startDate: parseISO('2019-09-05'),
        endDate: parseISO('2019-09-09'),
        favorite: false,
        image: JESUS_SON_COVER
    },
    {
        title: 'Digital Minimalism',
        subtitle: 'Choosing a Focused Life in a Noisy World',
        author: 'Cal Newport',
        url: 'https://www.indiebound.org/book/9780525536512',
        startDate: parseISO('2019-09-02'),
        endDate: parseISO('2019-09-04'),
        favorite: false,
        image: DIGITAL_MINIMALISM_COVER
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
        image: DEATH_IS_HARD_WORK_COVER
    },
    {
        title: 'Pale Fire',
        author: 'Vladimir Nabokov',
        url: 'https://www.indiebound.org/book/9780679410775',
        startDate: parseISO('2019-03-18'),
        endDate: parseISO('2019-05-15'),
        favorite: true,
        image: PALE_FIRE_COVER
    },
    {
        title: 'Espresso Lessons',
        author: 'Arno Ilgner',
        url: 'https://www.amazon.com/Espresso-Lessons-Rock-Warriors-Way/dp/0974011231',
        startDate: parseISO('2019-01-19'),
        endDate: parseISO('2019-03-18'),
        favorite: false,
        image: ESPRESSO_LESSONS_COVER
    },
    {
        title: 'Stoner',
        author: 'John Williams',
        url: 'https://www.indiebound.org/book/9781590171998',
        startDate: parseISO('2019-03-13'),
        endDate: parseISO('2019-03-18'),
        favorite: false,
        image: STONER_COVER
    },
    {
        title: 'Labyrinths',
        author: 'Jorge Luis Borges',
        url: 'https://www.indiebound.org/book/9780811216999',
        startDate: parseISO('2018-01-18'),
        endDate: parseISO('2019-03-14'),
        favorite: true,
        image: LABYRINTHS_COVER
    },
    {
        title: 'Free Range Kids',
        subtitle: 'How To Raise Safe, Self-Reliant Children (Without Going Nuts With Worry)',
        author: 'Lenore Skenazy',
        url: 'https://www.indiebound.org/book/9780470574751',
        startDate: parseISO('2019-01-28'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        image: FREE_RANGE_KIDS_COVER
    },
    {
        title: 'The Bullet Journal Method',
        subtitle: 'Track the Past, Order the Present, Design the Future',
        author: 'Ryder Carrol',
        url: 'https://www.indiebound.org/book/9780525533337',
        startDate: parseISO('2019-01-28'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        image: BULLET_JOURNAL_COVER
    },
    {
        title: 'Suttree',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679736325',
        startDate: parseISO('2018-11-16'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        image: SUTTREE_COVER
    },
    {
        title: 'Reservoir 13',
        author: 'Jon McGregor',
        url: 'https://www.indiebound.org/book/9781936787708',
        startDate: parseISO('2018-12-24'),
        endDate: parseISO('2019-03-02'),
        favorite: false,
        image: RESERVOIR_13_COVER
    }
];
