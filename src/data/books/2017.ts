import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2017: BookEntry[] = [
    {
        title: 'Wolf in White Van',
        author: 'John Darnielle',
        url: 'https://www.indiebound.org/book/9780374292089',
        startDate: parseISO('2017-12-25'),
        endDate: parseISO('2017-12-30'),
        favorite: true,
        cover: require('images/books/wolf-in-white-van.jpg')
    },
    {
        title: "Man's Search for Meaning",
        author: 'Viktor Frankl',
        url: 'https://www.indiebound.org/book/9780807000007',
        startDate: parseISO('2017-12-20'),
        endDate: parseISO('2017-12-25'),
        favorite: true,
        cover: require('images/books/mans-search-for-meaning.jpg')
    },
    {
        title: 'The Push',
        subtitle: `A Climber's Journey of Endurance, 
            Risk, and Going Beyond Limits`,
        author: 'Tommy Caldwell',
        url: 'https://www.indiebound.org/book/9780399562709',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-12-24'),
        favorite: false,
        cover: require('images/books/the-push.jpg')
    },
    {
        title: 'Doing Good Better',
        subtitle: `How Effective Altruism Can Help You Help Others, 
        Do Work that Matters, and Make Smarter Choices about Giving Back`,
        author: 'Will MacAskill',
        url: 'https://www.indiebound.org/book/9781592409662',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-12-21'),
        favorite: false,
        cover: require('images/books/doing-good-better.jpg')
    },
    {
        title: 'Lying',
        author: 'Sam Harris',
        url: 'https://www.indiebound.org/book/9781940051000',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-11-30'),
        favorite: false,
        cover: require('images/books/lying.jpg')
    },
    {
        title: 'The Sympathizer',
        author: 'Viet Thanh Nguyen',
        url: 'https://www.indiebound.org/book/9780802123459',
        startDate: parseISO('2017-10-23'),
        endDate: parseISO('2017-11-29'),
        favorite: false,
        cover: require('images/books/the-sympathizer.jpg')
    },
    {
        title: 'Why Buddhism is True',
        subtitle: 'The Science and Philosophy of Meditation and Enlightenment',
        author: 'Robert Wright',
        url: 'https://www.indiebound.org/book/9781439195451',
        startDate: parseISO('2017-09-23'),
        endDate: parseISO('2017-10-23'),
        favorite: false,
        cover: require('images/books/why-buddhism-is-true.jpg')
    },
    {
        title: 'Lincoln in the Bardo',
        author: 'George Saunders',
        url: 'https://www.indiebound.org/book/9780812995343',
        startDate: parseISO('2017-10-06'),
        endDate: parseISO('2017-10-18'),
        favorite: true,
        cover: require('images/books/lincoln-in-the-bardo.jpg')
    },
    {
        title: 'Creative Schools',
        subtitle: `The Grassroots Revolution That’s Transforming Education`,
        author: 'Ken Robinson, Lou Aronica',
        url: 'https://www.indiebound.org/book/9780670016716',
        startDate: parseISO('2017-09-01'),
        endDate: parseISO('2017-10-01'),
        favorite: false,
        cover: require('images/books/creative-schools.jpg')
    },
    {
        title: 'A Man Called Ove',
        author: 'Fredrick Backmnan',
        url: 'https://www.indiebound.org/book/9781476738024',
        startDate: parseISO('2017-08-26'),
        endDate: parseISO('2017-09-26'),
        favorite: false,
        cover: require('images/books/a-man-called-ove.jpg')
    },
    {
        title: 'Deep Work',
        subtitle: 'Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        url: 'https://www.indiebound.org/book/9781455586691',
        startDate: parseISO('2017-08-10'),
        endDate: parseISO('2017-08-25'),
        favorite: false,
        cover: require('images/books/deep-work.jpg')
    },
    {
        title: 'On Tyranny',
        subtitle: 'Twenty Lessons from the Twentieth Century',
        author: 'Timothy Snyder',
        url: 'https://www.indiebound.org/book/9780804190114',
        startDate: parseISO('2017-08-07'),
        endDate: parseISO('2017-08-09'),
        favorite: false,
        cover: require('images/books/on-tyranny.jpg')
    },
    {
        title: 'Gratitude',
        author: 'Oliver Sacks',
        url: 'https://www.indiebound.org/book/9780451492937',
        startDate: parseISO('2017-08-01'),
        endDate: parseISO('2017-08-02'),
        favorite: true,
        cover: require('images/books/gratitude.jpg')
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        url: 'https://www.indiebound.org/book/9781613832493',
        startDate: parseISO('2017-07-17'),
        endDate: parseISO('2017-07-27'),
        favorite: true,
        cover: require('images/books/fahrenheit-451.jpg')
    },
    {
        title: 'The Wind-up Bird Chronicle',
        author: 'Haruki Murakami',
        url: 'https://www.indiebound.org/book/9780679775430',
        startDate: parseISO('2017-06-12'),
        endDate: parseISO('2017-07-16'),
        favorite: true,
        cover: require('images/books/wind-up-bird-chronicle.jpg')
    },
    {
        title: 'The Vegetarian',
        author: 'Han Kang',
        url: 'https://www.indiebound.org/book/9781101906118',
        startDate: parseISO('2017-05-28'),
        endDate: parseISO('2017-06-11'),
        favorite: false,
        cover: require('images/books/the-vegetarian.jpg')
    },
    {
        title: 'Alone on the Wall',
        author: 'Alex Honnold, David Roberts',
        url: 'https://www.indiebound.org/book/9780393247626',
        startDate: parseISO('2017-05-01'),
        endDate: parseISO('2017-05-31'),
        favorite: false,
        cover: require('images/books/alone-on-the-wall.jpg')
    },
    {
        title: 'My Struggle',
        subtitle: 'Book 1',
        author: 'Karl Ove Knausgård',
        url: 'https://www.indiebound.org/book/9780374534141',
        startDate: parseISO('2017-05-15'),
        endDate: parseISO('2017-05-28'),
        favorite: false,
        cover: require('images/books/my-struggle.jpg')
    },
    {
        title: 'Felicity',
        author: 'Mary Oliver',
        url: 'https://www.indiebound.org/book/9781594206764',
        startDate: parseISO('2017-05-10'),
        endDate: parseISO('2017-05-11'),
        favorite: false,
        cover: require('images/books/felicity.jpg')
    },
    {
        title: 'The Course of Love',
        author: 'Alain de Botton',
        url: 'https://www.indiebound.org/book/9781501134258',
        startDate: parseISO('2017-03-15'),
        endDate: parseISO('2017-04-28'),
        favorite: false,
        cover: require('images/books/the-course-of-love.jpg')
    },
    {
        title: 'The Terror Years',
        subtitle: 'From al-Qaeda to the Islamic State',
        author: 'Lawrence Wright',
        url: 'https://www.indiebound.org/book/9781501134258',
        startDate: parseISO('2017-04-11'),
        endDate: parseISO('2017-04-21'),
        favorite: false,
        cover: require('images/books/terror-years.jpg')
    },
    {
        title: 'Assholes',
        subtitle: 'A Theory of Donald Trump',
        author: 'Aaron James',
        url: 'https://www.indiebound.org/book/9780385542036',
        startDate: parseISO('2017-03-15'),
        endDate: parseISO('2017-03-15'),
        favorite: false,
        cover: require('images/books/assholes-trump.jpg')
    },
    {
        title: 'Waking Up',
        subtitle: 'A Guide to Spirituality Without Religion',
        author: 'Sam Harris',
        url: 'https://www.indiebound.org/book/9781451636024',
        startDate: parseISO('2017-01-24'),
        endDate: parseISO('2017-02-02'),
        favorite: false,
        cover: require('images/books/waking-up.jpg')
    }
];
