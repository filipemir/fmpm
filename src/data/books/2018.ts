import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2018: BookEntry[] = [
    {
        title: 'The Coddling of the American Mind',
        subtitle:
            'How Good Intentions and Bad Ideas Are Setting Up a Generation for Failure',
        author: 'Greg Lukianoff, Jonathan Haidt',
        url: 'https://www.indiebound.org/book/9780735224919',
        startDate: parseISO('2018-11-16'),
        endDate: parseISO('2018-12-24'),
        favorite: false,
        cover: require('images/books/coddling-of-the-american-mind.jpg')
    },
    {
        title: 'Lost Connections',
        subtitle: 'Why You’re Depressed and How to Find Hope',
        author: 'Johan Hari',
        url: 'https://www.indiebound.org/book/9781632868312',
        startDate: parseISO('2018-12-03'),
        endDate: parseISO('2018-12-24'),
        favorite: false,
        cover: require('images/books/lost-connections.jpg')
    },
    {
        title: 'Acceptance',
        author: 'Jeff VanderMeer',
        url: 'https://www.indiebound.org/book/9780374104115',
        startDate: parseISO('2018-10-29'),
        endDate: parseISO('2018-11-12'),
        favorite: true,
        cover: require('images/books/acceptance.jpg')
    },
    {
        title: 'Going Clear',
        author: 'Lawrence Wright',
        url: 'https://www.indiebound.org/book/9780307700667',
        startDate: parseISO('2018-08-27'),
        endDate: parseISO('2018-10-05'),
        favorite: false,
        cover: require('images/books/going-clear.jpg')
    },
    {
        title: 'Authority',
        author: 'Jeff VanderMeer',
        url: 'https://www.indiebound.org/book/9780374104108',
        startDate: parseISO('2018-08-14'),
        endDate: parseISO('2018-08-26'),
        favorite: true,
        cover: require('images/books/authority.jpg')
    },
    {
        title: 'A Canticle for Leibowitz',
        author: 'Walter Miller',
        url: 'https://www.indiebound.org/book/9780060892999',
        startDate: parseISO('2018-07-18'),
        endDate: parseISO('2018-08-13'),
        favorite: true,
        cover: require('images/books/a-canticle-for-leibowitz.jpg')
    },
    {
        title: 'Annihilation',
        author: 'Jeff Vandermeer',
        url: 'https://www.indiebound.org/book/9780374104092',
        startDate: parseISO('2018-07-10'),
        endDate: parseISO('2018-07-18'),
        favorite: true,
        cover: require('images/books/annihilation.jpg')
    },
    {
        title: 'Less',
        author: 'Andrew Sean Greer',
        url: 'https://www.indiebound.org/book/9780316316125',
        startDate: parseISO('2018-06-21'),
        endDate: parseISO('2018-07-29'),
        favorite: true,
        cover: require('images/books/less.jpg')
    },
    {
        title: 'Enlightenment Now',
        subtitle: 'The Case for Reason, Science, Humanism, and Progress',
        author: 'Steven Pinker',
        url: 'https://www.indiebound.org/book/9780525427575',
        startDate: parseISO('2018-05-16'),
        endDate: parseISO('2018-06-20'),
        favorite: true,
        cover: require('images/books/enlightenment-now.jpg')
    },
    {
        title: 'Universal Harvester',
        author: 'John Darnielle',
        url: 'https://www.indiebound.org/book/9780374282103',
        startDate: parseISO('2018-05-01'),
        endDate: parseISO('2018-05-27'),
        favorite: false,
        cover: require('images/books/universal-harvester.jpg')
    },
    {
        title: 'This Gulf of Fire',
        subtitle:
            'The Great Lisbon Earthquake, or Apocalypse in the Age of Science and Reason',
        author: 'Mark Molesky',
        url: 'https://www.indiebound.org/book/9780307387509',
        startDate: parseISO('2018-04-01'),
        endDate: parseISO('2018-04-23'),
        favorite: false,
        cover: require('images/books/this-gulf-of-fire.jpg')
    },
    {
        title: 'Meet The Frugalwoods',
        subtitle: 'Achieving Financial Independence Through Simple Living',
        author: 'Elizabeth Willar Thames',
        url: 'https://www.indiebound.org/book/9780062668141',
        startDate: parseISO('2018-03-10'),
        endDate: parseISO('2018-03-30'),
        favorite: false,
        cover: require('images/books/meet-the-frugalwoods.jpg')
    },
    {
        title: 'Utopia for Realists',
        subtitle: 'How We Can Build the Ideal World',
        author: 'Rutger Bregman',
        url: 'https://www.indiebound.org/book/9780316471893',
        startDate: parseISO('2018-01-17'),
        endDate: parseISO('2018-03-28'),
        favorite: false,
        cover: require('images/books/utopia-for-realists.jpg')
    },
    {
        title: 'Blood Meridian',
        subtitle: 'Or the Evening Redness in the West ',
        author: 'Cormac McCarthy',
        url: 'https://www.indiebound.org/book/9780679728757',
        startDate: parseISO('2018-01-31'),
        endDate: parseISO('2018-03-27'),
        favorite: true,
        cover: require('images/books/blood-meridian.jpg')
    },
    {
        title: 'The State of Affairs',
        subtitle: 'Rethinking Infidelity',
        author: 'Esther Perel',
        url: 'https://www.indiebound.org/book/9780062322593',
        startDate: parseISO('2018-02-21'),
        endDate: parseISO('2018-02-28'),
        favorite: false,
        cover: require('images/books/state-of-affairs.jpg')
    },
    {
        title: 'Twin Peaks',
        subtitle: 'The Final Dossier',
        author: 'Mark Frost',
        url: 'https://www.indiebound.org/book/9781250163301',
        startDate: parseISO('2018-02-06'),
        endDate: parseISO('2018-02-11'),
        favorite: false,
        cover: require('images/books/tp-final-dossier.jpg')
    },
    {
        title: 'The Language Instinct',
        subtitle: 'How the Mind Creates Language',
        author: 'Steven Pinker',
        url: 'https://www.indiebound.org/book/9780061336461',
        startDate: parseISO('2018-01-06'),
        endDate: parseISO('2018-01-31'),
        favorite: false,
        cover: require('images/books/language-instinct.jpg')
    },
    {
        title: 'The Once and Future Liberal',
        subtitle: 'After Identity Politics',
        author: 'Mark Lilla',
        url: 'https://www.indiebound.org/book/9780062697431',
        startDate: parseISO('2018-01-01'),
        endDate: parseISO('2018-01-06'),
        favorite: false,
        cover: require('images/books/once-and-future-liberal.jpg')
    }
];
