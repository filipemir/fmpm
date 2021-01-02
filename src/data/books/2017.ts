import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import WAKING_UP_COVER from 'images/books/waking-up.jpg';
import ASSHOLES_COVER from 'images/books/assholes-trump.jpg';
import TERROR_YEARS_COVER from 'images/books/terror-years.jpg';
import COURSE_OF_LOVE_COVER from 'images/books/the-course-of-love.jpg';
import FELICITY_COVER from 'images/books/felicity.jpg';
import MY_STRUGGLE_COVER from 'images/books/my-struggle.jpg';
import ALONE_ON_THE_WALL_COVER from 'images/books/alone-on-the-wall.jpg';
import THE_VEGETARIAN_COVER from 'images/books/the-vegetarian.jpg';
import WIND_UP_BIRD_CHRONICLE_COVER from 'images/books/wind-up-bird-chronicle.jpg';
import FAHRENHEIT_451_COVER from 'images/books/fahrenheit-451.jpg';
import GRATITUDE_COVER from 'images/books/gratitude.jpg';
import ON_TYRANNY_COVER from 'images/books/on-tyranny.jpg';
import DEEP_WORK_COVER from 'images/books/deep-work.jpg';
import A_MAN_CALLED_OVE_COVER from 'images/books/a-man-called-ove.jpg';
import CREATIVE_SCHOOLS_COVER from 'images/books/creative-schools.jpg';
import LINCOLN_IN_THE_BARDO_COVER from 'images/books/lincoln-in-the-bardo.jpg';
import WHY_BUDDHISM_IS_TRUE_COVER from 'images/books/why-buddhism-is-true.jpg';
import THE_SYMPATHIZER_COVER from 'images/books/the-sympathizer.jpg';
import LYING_COVER from 'images/books/lying.jpg';
import DOING_GOOD_BETTER_COVER from 'images/books/doing-good-better.jpg';
import THE_PUSH_COVER from 'images/books/the-push.jpg';
import MANS_SEARCH_FOR_MEANING_COVER from 'images/books/mans-search-for-meaning.jpg';
import WOLF_IN_WHITE_VAN_COVER from 'images/books/wolf-in-white-van.jpg';

export const BOOKS_2017: BookEntry[] = [
    {
        title: 'Wolf in White Van',
        author: 'John Darnielle',
        url: 'https://www.indiebound.org/book/9780374292089',
        startDate: parseISO('2017-12-25'),
        endDate: parseISO('2017-12-30'),
        favorite: true,
        image: WOLF_IN_WHITE_VAN_COVER
    },
    {
        title: "Man's Search for Meaning",
        author: 'Viktor Frankl',
        url: 'https://www.indiebound.org/book/9780807000007',
        startDate: parseISO('2017-12-20'),
        endDate: parseISO('2017-12-25'),
        favorite: true,
        image: MANS_SEARCH_FOR_MEANING_COVER
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
        image: THE_PUSH_COVER
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
        image: DOING_GOOD_BETTER_COVER
    },
    {
        title: 'Lying',
        author: 'Sam Harris',
        url: 'https://www.indiebound.org/book/9781940051000',
        startDate: parseISO('2017-11-30'),
        endDate: parseISO('2017-11-30'),
        favorite: false,
        image: LYING_COVER
    },
    {
        title: 'The Sympathizer',
        author: 'Viet Thanh Nguyen',
        url: 'https://www.indiebound.org/book/9780802123459',
        startDate: parseISO('2017-10-23'),
        endDate: parseISO('2017-11-29'),
        favorite: false,
        image: THE_SYMPATHIZER_COVER
    },
    {
        title: 'Why Buddhism is True',
        subtitle: 'The Science and Philosophy of Meditation and Enlightenment',
        author: 'Robert Wright',
        url: 'https://www.indiebound.org/book/9781439195451',
        startDate: parseISO('2017-09-23'),
        endDate: parseISO('2017-10-23'),
        favorite: false,
        image: WHY_BUDDHISM_IS_TRUE_COVER
    },
    {
        title: 'Lincoln in the Bardo',
        author: 'George Saunders',
        url: 'https://www.indiebound.org/book/9780812995343',
        startDate: parseISO('2017-10-06'),
        endDate: parseISO('2017-10-18'),
        favorite: true,
        image: LINCOLN_IN_THE_BARDO_COVER
    },
    {
        title: 'Creative Schools',
        subtitle: `The Grassroots Revolution That’s Transforming Education`,
        author: 'Ken Robinson, Lou Aronica',
        url: 'https://www.indiebound.org/book/9780670016716',
        startDate: parseISO('2017-09-01'),
        endDate: parseISO('2017-10-01'),
        favorite: false,
        image: CREATIVE_SCHOOLS_COVER
    },
    {
        title: 'A Man Called Ove',
        author: 'Fredrick Backmnan',
        url: 'https://www.indiebound.org/book/9781476738024',
        startDate: parseISO('2017-08-26'),
        endDate: parseISO('2017-09-26'),
        favorite: false,
        image: A_MAN_CALLED_OVE_COVER
    },
    {
        title: 'Deep Work',
        subtitle: 'Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        url: 'https://www.indiebound.org/book/9781455586691',
        startDate: parseISO('2017-08-10'),
        endDate: parseISO('2017-08-25'),
        favorite: false,
        image: DEEP_WORK_COVER
    },
    {
        title: 'On Tyranny',
        subtitle: 'Twenty Lessons from the Twentieth Century',
        author: 'Timothy Snyder',
        url: 'https://www.indiebound.org/book/9780804190114',
        startDate: parseISO('2017-08-07'),
        endDate: parseISO('2017-08-09'),
        favorite: false,
        image: ON_TYRANNY_COVER
    },
    {
        title: 'Gratitude',
        author: 'Oliver Sacks',
        url: 'https://www.indiebound.org/book/9780451492937',
        startDate: parseISO('2017-08-01'),
        endDate: parseISO('2017-08-02'),
        favorite: true,
        image: GRATITUDE_COVER
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        url: 'https://www.indiebound.org/book/9781613832493',
        startDate: parseISO('2017-07-17'),
        endDate: parseISO('2017-07-27'),
        favorite: true,
        image: FAHRENHEIT_451_COVER
    },
    {
        title: 'The Wind-up Bird Chronicle',
        author: 'Haruki Murakami',
        url: 'https://www.indiebound.org/book/9780679775430',
        startDate: parseISO('2017-06-12'),
        endDate: parseISO('2017-07-16'),
        favorite: true,
        image: WIND_UP_BIRD_CHRONICLE_COVER
    },
    {
        title: 'The Vegetarian',
        author: 'Han Kang',
        url: 'https://www.indiebound.org/book/9781101906118',
        startDate: parseISO('2017-05-28'),
        endDate: parseISO('2017-06-11'),
        favorite: false,
        image: THE_VEGETARIAN_COVER
    },
    {
        title: 'Alone on the Wall',
        author: 'Alex Honnold, David Roberts',
        url: 'https://www.indiebound.org/book/9780393247626',
        startDate: parseISO('2017-05-01'),
        endDate: parseISO('2017-05-31'),
        favorite: false,
        image: ALONE_ON_THE_WALL_COVER
    },
    {
        title: 'My Struggle',
        subtitle: 'Book 1',
        author: 'Karl Ove Knausgård',
        url: 'https://www.indiebound.org/book/9780374534141',
        startDate: parseISO('2017-05-15'),
        endDate: parseISO('2017-05-28'),
        favorite: false,
        image: MY_STRUGGLE_COVER
    },
    {
        title: 'Felicity',
        author: 'Mary Oliver',
        url: 'https://www.indiebound.org/book/9781594206764',
        startDate: parseISO('2017-05-10'),
        endDate: parseISO('2017-05-11'),
        favorite: false,
        image: FELICITY_COVER
    },
    {
        title: 'The Course of Love',
        author: 'Alain de Botton',
        url: 'https://www.indiebound.org/book/9781501134258',
        startDate: parseISO('2017-03-15'),
        endDate: parseISO('2017-04-28'),
        favorite: false,
        image: COURSE_OF_LOVE_COVER
    },
    {
        title: 'The Terror Years',
        subtitle: 'From al-Qaeda to the Islamic State',
        author: 'Lawrence Wright',
        url: 'https://www.indiebound.org/book/9781501134258',
        startDate: parseISO('2017-04-11'),
        endDate: parseISO('2017-04-21'),
        favorite: false,
        image: TERROR_YEARS_COVER
    },
    {
        title: 'Assholes',
        subtitle: 'A Theory of Donald Trump',
        author: 'Aaron James',
        url: 'https://www.indiebound.org/book/9780385542036',
        startDate: parseISO('2017-03-15'),
        endDate: parseISO('2017-03-15'),
        favorite: false,
        image: ASSHOLES_COVER
    },
    {
        title: 'Waking Up',
        subtitle: 'A Guide to Spirituality Without Religion',
        author: 'Sam Harris',
        url: 'https://www.indiebound.org/book/9781451636024',
        startDate: parseISO('2017-01-24'),
        endDate: parseISO('2017-02-02'),
        favorite: false,
        image: WAKING_UP_COVER
    }
];
