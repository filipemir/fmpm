import parseISO from 'date-fns/parseISO';
import { BookEntry } from '../models/media';
import STUBBORN_ATTACHMENTS_COVER from 'images/books/stubborn-attachments.jpg';
import PAINTING_RESILIENCE_COVER from 'images/books/painting-resilience.jpg';
import ICE_COVER from 'images/books/ice.jpg';
import THE_REVENANT_COVER from 'images/books/the-revenant.jpg';
import CODE_COVER from 'images/books/code.jpg';
import CHILDREN_OF_MEN_COVER from 'images/books/children-of-men.jpg';
import BIRTH_PARTNER_COVER from 'images/books/birth-partner.jpg';
import STALIN_COVER from 'images/books/stalin.jpg';
import MEASURE_WHAT_MATTERS_COVER from 'images/books/measure-what-matters.jpg';
import ETHICS_IN_THE_REAL_WORLD_COVER from 'images/books/ethics-in-the-real-world.jpg';
import OPEN_BORDERS_COVER from 'images/books/open-borders.jpg';
import CRIBSHEET_COVER from 'images/books/cribsheet.jpg';
import LENIN_COVER from 'images/books/lenin.jpg';
import BLUEPRINT_COVER from 'images/books/blueprint.jpg';
import THE_BLUEST_EYE_COVER from 'images/books/the-bluest-eye.jpg';
import REWORK_COVER from 'images/books/rework.png';
import SELFISH_REASONS_COVER from 'images/books/selfish-reasons.jpg';
import OVERSTORY_COVER from 'images/books/overstory.jpg';
import UNDERLAND_COVER from 'images/books/underland.jpg';
import GOLDEN_COMPASS_COVER from 'images/books/golden-compass.jpg';
import NEVER_LET_ME_GO_COVER from 'images/books/never-let-me-go.jpg';
import STRANGE_BIRD_COVER from 'images/books/strange-bird.jpg';
import PRAGMATIC_PROGRAMMER_COVER from 'images/books/pragmatic-programmer.jpg';
import BIG_SUR_COVER from 'images/books/big-sur.jpg';
import BORNE_COVER from 'images/books/borne.jpg';
import THE_PROBLEM_WITH_EVERYTHING_COVER from 'images/books/the-problem-with-everything.jpg';
import A_WRINKLE_IN_TIME_COVER from 'images/books/a-wrinkle-in-time.jpg';
import FALL_OF_HYPERION_COVER from 'images/books/fall-of-hyperion.jpg';
import EXHALATION_COVER from 'images/books/exhalation.jpg';
import STORIES_OF_YOUR_LIFE from 'images/books/stories-of-your-life.jpg';

export const BOOKS: BookEntry[] = [
    {
        title: 'Stubborn Attachments',
        subtitle: 'A Vision for a Society of Free, Prosperous, and Responsible Individuals',
        author: 'Tyler Cowen',
        url: 'https://www.amazon.com/Stubborn-Attachments-Prosperous-Responsible-Individuals/dp/1732265135',
        startDate: parseISO('2020-12-26'),
        endDate: parseISO('2020-12-28'),
        favorite: false,
        image: STUBBORN_ATTACHMENTS_COVER
    },
    {
        title: 'Painting Resilience',
        subtitle: 'The Life and Art of Fred Terna',
        author: 'Julia Mayer',
        url: 'https://www.indiebound.org/book/9781735876221',
        startDate: parseISO('2020-12-21'),
        endDate: parseISO('2020-12-26'),
        favorite: false,
        image: PAINTING_RESILIENCE_COVER
    },
    {
        title: 'Ice',
        author: 'Anna Kavan',
        url: 'https://www.indiebound.org/book/9780143131991',
        startDate: parseISO('2020-12-05'),
        endDate: parseISO('2020-12-25'),
        favorite: true,
        image: ICE_COVER
    },
    {
        title: 'The Revenant',
        subtitle: 'A Novel of Revenge',
        author: 'Michael Punke',
        url: 'https://www.indiebound.org/book/9781250101198',
        startDate: parseISO('2020-11-16'),
        endDate: parseISO('2020-11-24'),
        favorite: false,
        image: THE_REVENANT_COVER
    },
    {
        title: 'Code',
        subtitle: 'The Hidden Language of Computer Hardware and Software',
        author: 'Charles Petzold',
        url: 'https://www.indiebound.org/book/9780735611313',
        startDate: parseISO('2020-10-23'),
        endDate: parseISO('2020-12-19'),
        favorite: true,
        image: CODE_COVER
    },
    {
        title: 'The Children of Men',
        author: 'P.D. James',
        url: 'https://www.indiebound.org/book/9780307275431',
        startDate: parseISO('2020-10-14'),
        endDate: parseISO('2020-10-23'),
        favorite: false,
        image: CHILDREN_OF_MEN_COVER
    },
    {
        title: 'The Birth Partner',
        subtitle: 'A Complete Guide to Childbirth for Dads, Partners, Doulas, and All Other Labor Companions',
        author: 'Penny Simkin',
        url: 'https://www.indiebound.org/book/9781558329102',
        startDate: parseISO('2020-10-14'),
        endDate: parseISO('2020-12-24'),
        favorite: false,
        image: BIRTH_PARTNER_COVER
    },
    {
        title: 'Stalin',
        subtitle: 'New Biography Of A Dictator',
        author: 'Oleg Khlevniuk',
        url: 'https://www.indiebound.org/book/9780300219784',
        startDate: parseISO('2020-9-14'),
        endDate: parseISO('2020-10-13'),
        favorite: false,
        image: STALIN_COVER
    },
    {
        title: 'Measure What Matters',
        subtitle: 'How Google, Bono, and the Gates Foundation Rock the World with OKRs',
        author: 'John Doerr',
        url: 'https://www.indiebound.org/book/9780525536222',
        startDate: parseISO('2020-09-10'),
        endDate: parseISO('2020-12-27'),
        favorite: false,
        image: MEASURE_WHAT_MATTERS_COVER
    },
    {
        title: 'Ethics In The Real World',
        subtitle: '82 Brief Essays on Things That Matter',
        author: 'Peter Singer',
        url: 'https://www.indiebound.org/book/9780691178479',
        startDate: parseISO('2020-09-07'),
        endDate: parseISO('2020-09-26'),
        favorite: false,
        image: ETHICS_IN_THE_REAL_WORLD_COVER
    },
    {
        title: 'Open Borders',
        subtitle: 'The Science and Ethics of Immigration',
        author: 'Bryan Caplan',
        url: 'https://www.indiebound.org/book/9781250316967',
        startDate: parseISO('2020-09-02'),
        endDate: parseISO('2020-09-05'),
        favorite: false,
        image: OPEN_BORDERS_COVER
    },
    {
        title: 'Cribsheet',
        subtitle: 'A Data-Driven Guide to Better, More Relaxed Parenting, from Birth to Preschool',
        author: 'Emily Oster',
        url: 'https://www.indiebound.org/book/9780525559276',
        startDate: parseISO('2020-09-01'),
        endDate: parseISO('2020-10-08'),
        favorite: false,
        image: CRIBSHEET_COVER
    },
    {
        title: 'Lenin',
        subtitle: 'The Man, the Dictator, and the Master of Terror',
        author: 'Victor Sebestyen',
        url: 'https://www.indiebound.org/book/9781101974308',
        startDate: parseISO('2020-08-10'),
        endDate: parseISO('2020-08-31'),
        favorite: false,
        image: LENIN_COVER
    },
    {
        title: 'Blueprint',
        subtitle: 'How DNA Makes Us Who We Are',
        author: 'Robert Plomin',
        url: 'https://www.indiebound.org/book/9780262537988',
        startDate: parseISO('2020-07-31'),
        endDate: parseISO('2020-08-02'),
        favorite: false,
        image: BLUEPRINT_COVER
    },
    {
        title: 'The Bluest Eye',
        author: 'Toni Morrison',
        url: 'https://www.indiebound.org/book/9780307278449',
        startDate: parseISO('2020-07-18'),
        endDate: parseISO('2020-07-25'),
        favorite: false,
        image: THE_BLUEST_EYE_COVER
    },
    {
        title: 'Rework',
        author: 'Jason Fried, David Heinemeir Hansson',
        url: 'https://basecamp.com/books/rework',
        startDate: parseISO('2020-07-04'),
        endDate: parseISO('2020-07-18'),
        favorite: false,
        image: REWORK_COVER
    },
    {
        title: 'Selfish Reasons To Have More Kids',
        subtitle: 'Why Being a Great Parent is Less Work and More Fun Than You Think',
        author: 'Bryan Caplan',
        url: 'https://www.indiebound.org/book/9780465028610',
        startDate: parseISO('2020-07-01'),
        endDate: parseISO('2020-07-10'),
        favorite: false,
        image: SELFISH_REASONS_COVER
    },
    {
        title: 'The Overstory',
        author: 'Richard Powers',
        url: 'https://www.indiebound.org/book/9780393635522',
        startDate: parseISO('2020-06-07'),
        endDate: parseISO('2020-07-31'),
        favorite: false,
        image: OVERSTORY_COVER
    },
    {
        title: 'Underland',
        subtitle: 'A Deep Time Journey',
        author: 'Robert McFarlane',
        url: 'https://www.indiebound.org/book/9780393242140',
        startDate: parseISO('2020-05-01'),
        endDate: parseISO('2020-0515'),
        favorite: false,
        image: UNDERLAND_COVER
    },
    {
        title: 'Golden Compass',
        author: 'Bill Pullman',
        url: 'https://www.indiebound.org/book/9780679893103',
        startDate: parseISO('2020-05-17'),
        endDate: parseISO('2020-06-05'),
        favorite: false,
        image: GOLDEN_COMPASS_COVER
    },
    {
        title: 'Never Let Me Go',
        author: 'Kazuo Ishiguro',
        url: 'https://www.indiebound.org/book/9781400078776',
        startDate: parseISO('2020-04-01'),
        endDate: parseISO('2020-05-17'),
        favorite: false,
        image: NEVER_LET_ME_GO_COVER
    },
    {
        title: 'The Strange Bird',
        subtitle: 'A Borne Story',
        author: 'Jeff VanderMeer',
        url: 'https://www.indiebound.org/book/9780374537920',
        startDate: parseISO('2020-04-05'),
        endDate: parseISO('2020-04-30'),
        favorite: true,
        image: STRANGE_BIRD_COVER
    },
    {
        title: 'The Pragmatic Programmer',
        subtitle: 'Your Journey to Mastery',
        author: 'David Thomas, Andrew Hunt',
        url: 'https://www.indiebound.org/buy-local/9780135957059',
        startDate: parseISO('2020-03-01'),
        endDate: parseISO('2020-10-16'),
        favorite: false,
        image: PRAGMATIC_PROGRAMMER_COVER
    },
    {
        title: 'Big Sur',
        author: 'Jack Kerouac',
        url: 'https://www.indiebound.org/book/9781734029260',
        startDate: parseISO('2020-03-01'),
        endDate: parseISO('2020-03-21'),
        favorite: false,
        image: BIG_SUR_COVER
    },
    {
        title: 'Borne',
        author: 'Jeff VanderMeer',
        url: 'https://www.indiebound.org/book/9780374537654',
        startDate: parseISO('2020-02-11'),
        endDate: parseISO('2020-02-31'),
        favorite: true,
        image: BORNE_COVER
    },
    {
        title: 'The Problem With Everything',
        subtitle: 'My Journey Through the New Culture Wars',
        author: 'Meghan Daum',
        url: 'https://www.indiebound.org/book/9781982129330',
        startDate: parseISO('2020-02-03'),
        endDate: parseISO('2020-02-21'),
        favorite: true,
        image: THE_PROBLEM_WITH_EVERYTHING_COVER
    },
    {
        title: 'A Wrinkle In Time',
        author: "Madeleine L'Engle",
        url: 'https://www.indiebound.org/book/9780312367541',
        startDate: parseISO('2020-02-01'),
        endDate: parseISO('2020-02-12'),
        favorite: false,
        image: A_WRINKLE_IN_TIME_COVER
    },
    {
        title: 'The Fall of Hyperion',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780553288209',
        startDate: parseISO('2020-01-11'),
        endDate: parseISO('2020-01*24'),
        favorite: false,
        image: FALL_OF_HYPERION_COVER
    },
    {
        title: 'Exhalation',
        subtitle: 'Stories',
        author: 'Ted Chiang',
        url: 'https://www.indiebound.org/book/9781101947883',
        startDate: parseISO('2019-12-29'),
        endDate: parseISO('2020-02-02'),
        favorite: true,
        image: EXHALATION_COVER
    },
    {
        title: 'Stories of Your Life And Others',
        author: 'Ted Chiang',
        url: 'https://www.indiebound.org/book/9781101972120',
        startDate: parseISO('2019-12-10'),
        endDate: parseISO('2020-01-07'),
        favorite: true,
        image: STORIES_OF_YOUR_LIFE
    }
];
