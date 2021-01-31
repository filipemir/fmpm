import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import { ICE } from './common';

export const BOOKS_2020: BookEntry[] = [
    {
        title: 'Stubborn Attachments',
        subtitle:
            'A Vision for a Society of Free, Prosperous, and Responsible Individuals',
        author: 'Tyler Cowen',
        url:
            'https://www.amazon.com/Stubborn-Attachments-Prosperous-Responsible-Individuals/dp/1732265135',
        startDate: parseISO('2020-12-26'),
        endDate: parseISO('2020-12-28'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/stubborn-attachments.jpg?{"width":200}'),
            full: require('images/books/stubborn-attachments.jpg?{"width":600}')
        }
    },
    {
        title: 'Measure What Matters',
        subtitle:
            'How Google, Bono, and the Gates Foundation Rock the World with OKRs',
        author: 'John Doerr',
        url: 'https://www.indiebound.org/book/9780525536222',
        startDate: parseISO('2020-09-10'),
        endDate: parseISO('2020-12-27'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/measure-what-matters.jpg?{"width":200}'),
            full: require('images/books/measure-what-matters.jpg?{"width":600}')
        }
    },
    {
        title: 'Painting Resilience',
        subtitle: 'The Life and Art of Fred Terna',
        author: 'Julia Mayer',
        url: 'https://www.indiebound.org/book/9781735876221',
        startDate: parseISO('2020-12-21'),
        endDate: parseISO('2020-12-26'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/painting-resilience.jpg?{"width":200}'),
            full: require('images/books/painting-resilience.jpg?{"width":600}')
        }
    },
    {
        ...ICE,
        startDate: parseISO('2020-12-05'),
        endDate: parseISO('2020-12-25')
    },
    {
        title: 'The Birth Partner',
        subtitle:
            'A Complete Guide to Childbirth for Dads, Partners, Doulas, and All Other Labor Companions',
        author: 'Penny Simkin',
        url: 'https://www.indiebound.org/book/9781558329102',
        startDate: parseISO('2020-10-14'),
        endDate: parseISO('2020-12-24'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/birth-partner.jpg?{"width":200}'),
            full: require('images/books/birth-partner.jpg?{"width":600}')
        }
    },
    {
        title: 'Code',
        subtitle: 'The Hidden Language of Computer Hardware and Software',
        author: 'Charles Petzold',
        url: 'https://www.indiebound.org/book/9780735611313',
        startDate: parseISO('2020-10-23'),
        endDate: parseISO('2020-12-19'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/code.jpg?{"width":200}'),
            full: require('images/books/code.jpg?{"width":600}')
        }
    },
    {
        title: 'The Revenant',
        subtitle: 'A Novel of Revenge',
        author: 'Michael Punke',
        url: 'https://www.indiebound.org/book/9781250101198',
        startDate: parseISO('2020-11-16'),
        endDate: parseISO('2020-11-24'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/the-revenant.jpg?{"width":200}'),
            full: require('images/books/the-revenant.jpg?{"width":600}')
        }
    },
    {
        title: 'The Children of Men',
        author: 'P.D. James',
        url: 'https://www.indiebound.org/book/9780307275431',
        startDate: parseISO('2020-10-14'),
        endDate: parseISO('2020-10-23'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/children-of-men.jpg?{"width":200}'),
            full: require('images/books/children-of-men.jpg?{"width":600}')
        }
    },
    {
        title: 'The Pragmatic Programmer',
        subtitle: 'Your Journey to Mastery',
        author: 'David Thomas, Andrew Hunt',
        url: 'https://www.indiebound.org/buy-local/9780135957059',
        startDate: parseISO('2020-03-01'),
        endDate: parseISO('2020-10-16'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/pragmatic-programmer.jpg?{"width":200}'),
            full: require('images/books/pragmatic-programmer.jpg?{"width":600}')
        }
    },
    {
        title: 'Stalin',
        subtitle: 'New Biography Of A Dictator',
        author: 'Oleg Khlevniuk',
        url: 'https://www.indiebound.org/book/9780300219784',
        startDate: parseISO('2020-09-14'),
        endDate: parseISO('2020-10-13'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/stalin.jpg?{"width":200}'),
            full: require('images/books/stalin.jpg?{"width":600}')
        }
    },
    {
        title: 'Cribsheet',
        subtitle:
            'A Data-Driven Guide to Better, More Relaxed Parenting, from Birth to Preschool',
        author: 'Emily Oster',
        url: 'https://www.indiebound.org/book/9780525559276',
        startDate: parseISO('2020-09-01'),
        endDate: parseISO('2020-10-08'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/cribsheet.jpg?{"width":200}'),
            full: require('images/books/cribsheet.jpg?{"width":600}')
        }
    },
    {
        title: 'Ethics In The Real World',
        subtitle: '82 Brief Essays on Things That Matter',
        author: 'Peter Singer',
        url: 'https://www.indiebound.org/book/9780691178479',
        startDate: parseISO('2020-09-07'),
        endDate: parseISO('2020-09-26'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/ethics-in-the-real-world.jpg?{"width":200}'),
            full: require('images/books/ethics-in-the-real-world.jpg?{"width":600}')
        }
    },
    {
        title: 'Open Borders',
        subtitle: 'The Science and Ethics of Immigration',
        author: 'Bryan Caplan',
        url: 'https://www.indiebound.org/book/9781250316967',
        startDate: parseISO('2020-09-02'),
        endDate: parseISO('2020-09-05'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/open-borders.jpg?{"width":200}'),
            full: require('images/books/open-borders.jpg?{"width":600}')
        }
    },
    {
        title: 'Lenin',
        subtitle: 'The Man, the Dictator, and the Master of Terror',
        author: 'Victor Sebestyen',
        url: 'https://www.indiebound.org/book/9781101974308',
        startDate: parseISO('2020-08-10'),
        endDate: parseISO('2020-08-31'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/lenin.jpg?{"width":200}'),
            full: require('images/books/lenin.jpg?{"width":600}')
        }
    },
    {
        title: 'Blueprint',
        subtitle: 'How DNA Makes Us Who We Are',
        author: 'Robert Plomin',
        url: 'https://www.indiebound.org/book/9780262537988',
        startDate: parseISO('2020-07-31'),
        endDate: parseISO('2020-08-02'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/blueprint.jpg?{"width":200}'),
            full: require('images/books/blueprint.jpg?{"width":600}')
        }
    },
    {
        title: 'The Overstory',
        author: 'Richard Powers',
        url: 'https://www.indiebound.org/book/9780393635522',
        startDate: parseISO('2020-06-07'),
        endDate: parseISO('2020-07-31'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/overstory.jpg?{"width":200}'),
            full: require('images/books/overstory.jpg?{"width":600}')
        }
    },
    {
        title: 'The Bluest Eye',
        author: 'Toni Morrison',
        url: 'https://www.indiebound.org/book/9780307278449',
        startDate: parseISO('2020-07-18'),
        endDate: parseISO('2020-07-25'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/the-bluest-eye.jpg?{"width":200}'),
            full: require('images/books/the-bluest-eye.jpg?{"width":600}')
        }
    },
    {
        title: 'Rework',
        author: 'Jason Fried, David Heinemeir Hansson',
        url: 'https://basecamp.com/books/rework',
        startDate: parseISO('2020-07-04'),
        endDate: parseISO('2020-07-18'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/rework.png?{"width":200}'),
            full: require('images/books/rework.png?{"width":600}')
        }
    },
    {
        title: 'Selfish Reasons To Have More Kids',
        subtitle:
            'Why Being a Great Parent is Less Work and More Fun Than You Think',
        author: 'Bryan Caplan',
        url: 'https://www.indiebound.org/book/9780465028610',
        startDate: parseISO('2020-07-01'),
        endDate: parseISO('2020-07-10'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/selfish-reasons.jpg?{"width":200}'),
            full: require('images/books/selfish-reasons.jpg?{"width":600}')
        }
    },
    {
        title: 'Golden Compass',
        author: 'Bill Pullman',
        url: 'https://www.indiebound.org/book/9780679893103',
        startDate: parseISO('2020-05-17'),
        endDate: parseISO('2020-06-05'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/golden-compass.jpg?{"width":200}'),
            full: require('images/books/golden-compass.jpg?{"width":600}')
        }
    },
    {
        title: 'Never Let Me Go',
        author: 'Kazuo Ishiguro',
        url: 'https://www.indiebound.org/book/9781400078776',
        startDate: parseISO('2020-04-01'),
        endDate: parseISO('2020-05-17'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/never-let-me-go.jpg?{"width":200}'),
            full: require('images/books/never-let-me-go.jpg?{"width":600}')
        }
    },
    {
        title: 'Underland',
        subtitle: 'A Deep Time Journey',
        author: 'Robert McFarlane',
        url: 'https://www.indiebound.org/book/9780393242140',
        startDate: parseISO('2020-05-01'),
        endDate: parseISO('2020-05-15'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/underland.jpg?{"width":200}'),
            full: require('images/books/underland.jpg?{"width":600}')
        }
    },
    {
        title: 'The Strange Bird',
        subtitle: 'A Borne Story',
        author: 'Jeff VanderMeer',
        url: 'https://www.indiebound.org/book/9780374537920',
        startDate: parseISO('2020-04-05'),
        endDate: parseISO('2020-04-30'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/strange-bird.jpg?{"width":200}'),
            full: require('images/books/strange-bird.jpg?{"width":600}')
        }
    },
    {
        title: 'Big Sur',
        author: 'Jack Kerouac',
        url: 'https://www.indiebound.org/book/9781734029260',
        startDate: parseISO('2020-03-01'),
        endDate: parseISO('2020-03-21'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/big-sur.jpg?{"width":200}'),
            full: require('images/books/big-sur.jpg?{"width":600}')
        }
    },
    {
        title: 'Borne',
        author: 'Jeff VanderMeer',
        url: 'https://www.indiebound.org/book/9780374537654',
        startDate: parseISO('2020-02-11'),
        endDate: parseISO('2020-02-28'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/borne.jpg?{"width":200}'),
            full: require('images/books/borne.jpg?{"width":600}')
        }
    },
    {
        title: 'The Problem With Everything',
        subtitle: 'My Journey Through the New Culture Wars',
        author: 'Meghan Daum',
        url: 'https://www.indiebound.org/book/9781982129330',
        startDate: parseISO('2020-02-03'),
        endDate: parseISO('2020-02-21'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/the-problem-with-everything.jpg?{"width":200}'),
            full: require('images/books/the-problem-with-everything.jpg?{"width":600}')
        }
    },
    {
        title: 'A Wrinkle In Time',
        author: "Madeleine L'Engle",
        url: 'https://www.indiebound.org/book/9780312367541',
        startDate: parseISO('2020-02-01'),
        endDate: parseISO('2020-02-12'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/a-wrinkle-in-time.jpg?{"width":200}'),
            full: require('images/books/a-wrinkle-in-time.jpg?{"width":600}')
        }
    },
    {
        title: 'Exhalation',
        subtitle: 'Stories',
        author: 'Ted Chiang',
        url: 'https://www.indiebound.org/book/9781101947883',
        startDate: parseISO('2019-12-29'),
        endDate: parseISO('2020-02-02'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/exhalation.jpg?{"width":200}'),
            full: require('images/books/exhalation.jpg?{"width":600}')
        }
    },
    {
        title: 'The Fall of Hyperion',
        author: 'Dan Simmons',
        url: 'https://www.indiebound.org/book/9780553288209',
        startDate: parseISO('2020-01-11'),
        endDate: parseISO('2020-01-24'),
        favorite: false,
        covers: {
            thumbnail: require('images/books/fall-of-hyperion.jpg?{"width":200}'),
            full: require('images/books/fall-of-hyperion.jpg?{"width":600}')
        }
    },
    {
        title: 'Stories of Your Life And Others',
        author: 'Ted Chiang',
        url: 'https://www.indiebound.org/book/9781101972120',
        startDate: parseISO('2019-12-10'),
        endDate: parseISO('2020-01-07'),
        favorite: true,
        covers: {
            thumbnail: require('images/books/stories-of-your-life.jpg?{"width":200}'),
            full: require('images/books/stories-of-your-life.jpg?{"width":600}')
        }
    }
];
