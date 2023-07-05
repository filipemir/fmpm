import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import PESSOA from 'images/books/pessoa.jpg';
import THREE_BODY from 'images/books/3-body.jpg';
import HEART_OF_DARKNESS from 'images/books/heart-of-darkness.jpg';
import SEA_OF_TRANQUILITY from 'images/books/sea-of-tranquility.jpg';
import SWIM from 'images/books/a-swim.jpg';
import KAFKA from 'images/books/kafka.jpg';
import SHINING from 'images/books/shining.jpg';
import BEASTMAKING from 'images/books/beastmaking.jpg';
import ON_WRITING from 'images/books/on-writing.jpg';
import EARTH from 'images/books/earth.jpg';
import WHEN_WE_CEASE from 'images/books/when-we-cease.jpg';
import DRIVE_YOUR_PLOW from 'images/books/drive-your-plow.jpg';
import SACRED_COW from 'images/books/sacred-cow.jpg';
import THE_90S from 'images/books/90s.jpg';
import GIFTS from 'images/books/gifts.jpg';

export const BOOKS_2022: BookEntry[] = [
    {
        title: 'A Swim in a Pond in the Raine',
        subtitle:
            'In Which Four Russians Give a Master Class on Writing, Reading, and Life',
        author: 'George Saunders',
        url:
            'https://bookshop.org/p/books/a-swim-in-a-pond-in-the-rain-in-which-four-russians-give-a-master-class-on-writing-reading-and-life-george-saunders/14594710?ean=9781984856036',
        startDate: parseISO('2022-11-01'),
        endDate: parseISO('2022-12-27'),
        favorite: true,
        cover: SWIM
    },
    {
        title: 'Kafka on the Shore',
        author: 'Haruki Murakami',
        url:
            'https://bookshop.org/p/books/kafka-on-the-shore-haruki-murakami/15540221?ean=9781400079278',
        startDate: parseISO('2022-06-20'),
        endDate: parseISO('2022-12-01'),
        favorite: false,
        cover: KAFKA
    },
    {
        title: 'The Shining',
        author: 'Stephen King',
        url:
            'https://bookshop.org/p/books/the-shining-stephen-king/8278245?ean=9780345806789',
        startDate: parseISO('2022-09-15'),
        endDate: parseISO('2022-10-07'),
        favorite: false,
        cover: SHINING
    },
    {
        title: 'Beastmaking',
        subtitle: 'A Fingers-First Approach to Becoming a Better Climber',
        author: 'Ned Feehally',
        url:
            'https://bookshop.org/p/books/beastmaking-a-fingers-first-approach-to-becoming-a-better-climber-ned-feehally/17744833?ean=9781839810091',
        startDate: parseISO('2022-07-24'),
        endDate: parseISO('2022-08-30'),
        favorite: false,
        cover: BEASTMAKING
    },
    {
        title: 'On Writing',
        subtitle: 'A Memoir of the Craft',
        author: 'Stephen King',
        url:
            'https://bookshop.org/p/books/on-writing-a-memoir-of-the-craft-stephen-king/14560198?ean=9781982159375',
        startDate: parseISO('2022-08-15'),
        endDate: parseISO('2022-09-12'),
        favorite: false,
        cover: ON_WRITING
    },
    {
        title: 'A Brief History of Earth',
        subtitle: 'Four Billion Years in Eight Chapters',
        author: 'Andrew H. Knoll',
        url:
            'https://bookshop.org/p/books/a-brief-history-of-earth-four-billion-years-in-eight-chapters-andrew-h-knoll/14939842?ean=9780062853929',
        startDate: parseISO('2022-07-18'),
        endDate: parseISO('2022-07-30'),
        favorite: false,
        cover: EARTH
    },
    {
        title: 'When We Cease to Understand the World',
        author: 'Benjamín Labatut',
        url:
            'https://bookshop.org/p/books/when-we-cease-to-understand-the-world/18834780?ean=9781681375663',
        startDate: parseISO('2022-07-25'),
        endDate: parseISO('2022-08-13'),
        favorite: true,
        cover: WHEN_WE_CEASE
    },
    {
        title: 'Drive Your Plow Over the Bones of the Dead',
        subtitle: 'A Novel',
        author: 'Olga Tokarczuk',
        url:
            'https://bookshop.org/p/books/drive-your-plow-over-the-bones-of-the-dead-olga-tokarczuk/14950549?ean=9780525541349',
        startDate: parseISO('2022-06-27'),
        endDate: parseISO('2022-08-01'),
        favorite: false,
        cover: DRIVE_YOUR_PLOW
    },
    {
        title: 'Sacred Cow',
        subtitle:
            'The Case for (Better) Meat: Why Well-Raised Meat Is Good for You and Good for the Planet',
        author: 'Diana Rogers, Robb Wolf',
        url:
            'https://bookshop.org/p/books/sacred-cow-the-case-for-better-meat-why-well-raised-meat-is-good-for-you-and-good-for-the-planet-robb-wolf/15725941?ean=9781953295798',
        startDate: parseISO('2022-05-15'),
        endDate: parseISO('2022-06-28'),
        favorite: false,
        cover: SACRED_COW
    },
    {
        title: 'The Nineties',
        author: 'Chuck Klosterman',
        url:
            'https://bookshop.org/p/books/the-nineties-a-book-chuck-klosterman/17035828?ean=9780735217966',
        startDate: parseISO('2022-05-15'),
        endDate: parseISO('2022-05-30'),
        favorite: false,
        cover: THE_90S
    },
    {
        title: 'Gifts',
        author: 'Ursula K. Le Guin',
        url:
            'https://bookshop.org/p/books/gifts-1-ursula-k-le-guin/286315?ean=9780152051242',
        startDate: parseISO('2022-06-01'),
        endDate: parseISO('2022-06-30'),
        favorite: true,
        cover: GIFTS
    },
    {
        title: 'Sea of Tranquility',
        author: 'Emily St John Mandel',
        url:
            'https://bookshop.org/p/books/sea-of-tranquility-emily-st-john-mandel/17768221?ean=9780593466735',
        startDate: parseISO('2022-05-15'),
        endDate: parseISO('2022-05-30'),
        favorite: false,
        cover: SEA_OF_TRANQUILITY
    },
    {
        title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        url:
            'https://bookshop.org/p/books/heart-of-darkness-joseph-conrad/15493573?ean=9781513263199',
        startDate: parseISO('2022-05-01'),
        endDate: parseISO('2022-05-15'),
        favorite: true,
        cover: HEART_OF_DARKNESS
    },
    {
        title: 'Three Body Problem',
        author: 'Liu Cixin',
        url:
            'https://bookshop.org/p/books/the-three-body-problem-cixin-liu/265918?ean=9780765382030',
        startDate: parseISO('2022-04-01'),
        endDate: parseISO('2022-04-20'),
        favorite: false,
        cover: THREE_BODY
    },
    {
        title: 'Pessoa',
        subtitle: 'A Biography',
        author: 'Richard Zenith',
        url: 'https://www.indiebound.org/book/9780871404718',
        startDate: parseISO('2021-09-18'),
        endDate: parseISO('2022-01-03'),
        favorite: false,
        cover: PESSOA
    }
];
