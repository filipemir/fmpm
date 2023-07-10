import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';
import EARTHSEA from 'images/books/earthsea1.jpg';
import HIGHWAY61 from 'images/books/highway61.jpg';
import POWERS from 'images/books/powers.jpg';
import VOICES from 'images/books/voices.jpg';
import CEM_ANOS from 'images/books/cem-anos.jpeg';
import OUTLIVE from 'images/books/outlive.jpg';
import ENDURANCE from 'images/books/endurance.jpg';
import HALF_THE_WAY from 'images/books/half-the-way-home.jpg';

export const BOOKS_2023: BookEntry[] = [
    {
        title: 'Half the Way Home',
        author: 'Adam Hochschild',
        url:
            'https://bookshop.org/p/books/half-the-way-home-a-memoir-of-father-and-son-adam-hochschild/11850331',
        startDate: parseISO('2023-07-01'),
        endDate: parseISO('2023-07-08'),
        favorite: false,
        cover: HALF_THE_WAY
    },
    {
        title: 'Highway 61 Revisited',
        author: 'Mark Polizzotti',
        url:
            'https://bookshop.org/p/books/highway-61-revisited-mark-polizzotti/10798273?ean=9780826417756',
        startDate: parseISO('2023-05-27'),
        endDate: parseISO('2023-06-29'),
        favorite: false,
        cover: HIGHWAY61
    },
    {
        title: 'A Wizard of Earthsea',
        author: 'Ursula K. Le Guin',
        url:
            'https://bookshop.org/p/books/a-wizard-of-earthsea-1-ursula-k-le-guin/6389611?ean=9780547722023',
        startDate: parseISO('2023-06-10'),
        endDate: parseISO('2023-06-29'),
        favorite: false,
        cover: EARTHSEA
    },
    {
        title: 'Powers',
        author: 'Ursula K. Le Guin',
        url:
            'https://www.amazon.com/Powers-Annals-Western-Shore-Ursula/dp/0152066748/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
        startDate: parseISO('2023-05-02'),
        endDate: parseISO('2023-06-01'),
        favorite: true,
        cover: POWERS
    },
    {
        title: 'Outlive',
        subtitle: 'The Science & Art of Longevity',
        author: 'Peter Attia',
        url:
            'https://bookshop.org/p/books/outlive-the-science-and-art-of-longevity-peter-attia/18517223?ean=9780593236598',
        startDate: parseISO('2023-05-08'),
        endDate: parseISO('2023-05-27'),
        favorite: true,
        cover: OUTLIVE
    },
    {
        title: 'Voices',
        author: 'Ursula K. Le Guin',
        url:
            'https://bookshop.org/p/books/voices-ursula-k-le-guin/6669584?ean=9780152062422',
        startDate: parseISO('2023-03-11'),
        endDate: parseISO('2023-03-28'),
        favorite: false,
        cover: VOICES
    },
    {
        title: 'Cem Anos de Solidão',
        author: 'Gabriel Garcia Marquez',
        url:
            'https://bookshop.org/p/books/one-hundred-years-of-solitude-gabriel-garcia-marquez/286337?ean=9780060883287',
        startDate: parseISO('2023-01-01'),
        endDate: parseISO('2023-05-23'),
        favorite: false,
        cover: CEM_ANOS
    },
    {
        title: 'Endurance',
        subtitle: "Shackleton's Incredible Voyage",
        author: 'Alfred Lansing',
        url:
            'https://bookshop.org/p/books/endurance-shackleton-s-incredible-voyage-alfred-lansing/7205642?ean=9780465062881',
        startDate: parseISO('2023-01-30'),
        endDate: parseISO('2023-02-15'),
        favorite: true,
        cover: ENDURANCE
    }
];
