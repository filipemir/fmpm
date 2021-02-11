import parseISO from 'date-fns/parseISO';
import { BookEntry } from 'models/media';

export const BOOKS_2013: BookEntry[] = [
    {
        title: 'Klondike Tales',
        author: 'Jack London',
        url: 'https://www.indiebound.org/book/9780375756856',
        startDate: parseISO('2013-11-04'),
        endDate: parseISO('2013-12-26'),
        favorite: true,
        covers: {
            placeholder: require('images/books/klondike-tales.jpg?{"width":32}'),
            thumbnail: require('images/books/klondike-tales.jpg?{"width":200}'),
            full: require('images/books/klondike-tales.jpg?{"width":600}')
        }
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        url: 'https://www.indiebound.org/book/9780439023511',
        startDate: parseISO('2013-12-02'),
        endDate: parseISO('2013-12-26'),
        favorite: false,
        covers: {
            placeholder: require('images/books/mockingjay.jpg?{"width":32}'),
            thumbnail: require('images/books/mockingjay.jpg?{"width":200}'),
            full: require('images/books/mockingjay.jpg?{"width":600}')
        }
    },
    {
        title: 'Catch-22',
        author: 'Joseph Heller',
        url: 'https://www.indiebound.org/book/9781451621174',
        startDate: parseISO('2013-10-09'),
        endDate: parseISO('2013-10-12'),
        favorite: true,
        covers: {
            placeholder: require('images/books/catch-22.jpg?{"width":32}'),
            thumbnail: require('images/books/catch-22.jpg?{"width":200}'),
            full: require('images/books/catch-22.jpg?{"width":600}')
        }
    },
    {
        title: 'The Emperor of All Maladies',
        subtitle: 'A Biography of Cancer',
        author: 'Siddhartha Mukherjee',
        url: 'https://www.indiebound.org/book/9781439195703',
        startDate: parseISO('2013-07-29'),
        endDate: parseISO('2013-08-24'),
        favorite: true,
        covers: {
            placeholder: require('images/books/emperor-of-all-maladies.jpg?{"width":32}'),
            thumbnail: require('images/books/emperor-of-all-maladies.jpg?{"width":200}'),
            full: require('images/books/emperor-of-all-maladies.jpg?{"width":600}')
        }
    },
    {
        title: 'Let the Great World Spin',
        author: 'Colum McMann',
        url:
            'https://www.indiebound.org/book/9780812973990/colum-mccann/let-great-world-spin',
        startDate: parseISO('2013-07-02'),
        endDate: parseISO('2013-07-23'),
        favorite: false,
        covers: {
            placeholder: require('images/books/let-the-great-world-spin.jpg?{"width":32}'),
            thumbnail: require('images/books/let-the-great-world-spin.jpg?{"width":200}'),
            full: require('images/books/let-the-great-world-spin.jpg?{"width":600}')
        }
    },
    {
        title: 'A Confederacy of Dunces',
        author: 'John Kennedy Toole',
        url: 'https://www.indiebound.org/book/9780802130204',
        startDate: parseISO('2013-06-16'),
        endDate: parseISO('2013-07-02'),
        favorite: true,
        covers: {
            placeholder: require('images/books/a-confederacy-of-dunces.jpg?{"width":32}'),
            thumbnail: require('images/books/a-confederacy-of-dunces.jpg?{"width":200}'),
            full: require('images/books/a-confederacy-of-dunces.jpg?{"width":600}')
        }
    },
    {
        title: 'Eiger Dreams',
        subtitle: 'Ventures Among Men and Mountains',
        author: 'Jon Krakauer',
        url: 'https://www.indiebound.org/book/9780385488181',
        startDate: parseISO('2013-06-01'),
        endDate: parseISO('2013-06-14'),
        favorite: false,
        covers: {
            placeholder: require('images/books/eiger-dreams.jpg?{"width":32}'),
            thumbnail: require('images/books/eiger-dreams.jpg?{"width":200}'),
            full: require('images/books/eiger-dreams.jpg?{"width":600}')
        }
    },
    {
        title: 'Voyage of the Beagle',
        subtitle: "Charles Darwin's Journal of Researches",
        author: 'Charles Darwin',
        url: 'https://www.indiebound.org/book/9780140432688',
        startDate: parseISO('2013-05-08'),
        endDate: parseISO('2013-06-01'),
        favorite: false,
        covers: {
            placeholder: require('images/books/voyage-of-the-beagle.jpg?{"width":32}'),
            thumbnail: require('images/books/voyage-of-the-beagle.jpg?{"width":200}'),
            full: require('images/books/voyage-of-the-beagle.jpg?{"width":600}')
        }
    },
    {
        title: "Let's Explore Diabetes with Owls",
        author: 'David Sedaris',
        url: 'https://www.indiebound.org/book/9780316154697',
        startDate: parseISO('2013-05-05'),
        endDate: parseISO('2013-05-08'),
        favorite: false,
        covers: {
            placeholder: require('images/books/lets-explore-diabetes-with-owls.jpg?{"width":32}'),
            thumbnail: require('images/books/lets-explore-diabetes-with-owls.jpg?{"width":200}'),
            full: require('images/books/lets-explore-diabetes-with-owls.jpg?{"width":600}')
        }
    },
    {
        title: 'Galápagos',
        author: 'Kurt Vonnegut',
        url: 'https://www.indiebound.org/book/9780385333870',
        startDate: parseISO('2013-04-27'),
        endDate: parseISO('2013-05-03'),
        favorite: false,
        covers: {
            placeholder: require('images/books/galapagos.jpg?{"width":32}'),
            thumbnail: require('images/books/galapagos.jpg?{"width":200}'),
            full: require('images/books/galapagos.jpg?{"width":600}')
        }
    },
    {
        title: 'Cloud Atlas',
        author: 'David Mitchell',
        url: 'https://www.indiebound.org/book/9780812994711',
        startDate: parseISO('2013-04-25'),
        endDate: parseISO('2013-04-27'),
        favorite: false,
        covers: {
            placeholder: require('images/books/cloud-atlas.jpg?{"width":32}'),
            thumbnail: require('images/books/cloud-atlas.jpg?{"width":200}'),
            full: require('images/books/cloud-atlas.jpg?{"width":600}')
        }
    },
    {
        title: 'The Amazing Adventures of Kavalier & Clay',
        author: 'Michael Chabon',
        url: 'https://www.indiebound.org/book/9780312282998',
        endDate: parseISO('2013-05-16'),
        favorite: false,
        covers: {
            placeholder: require('images/books/kavalier-and-clay.jpg?{"width":32}'),
            thumbnail: require('images/books/kavalier-and-clay.jpg?{"width":200}'),
            full: require('images/books/kavalier-and-clay.jpg?{"width":600}')
        }
    },
    {
        title: 'Middlesex',
        author: 'Jeffrey Eugenides',
        url: 'https://www.indiebound.org/book/9780312427733',
        endDate: parseISO('2013-01-17'),
        favorite: true,
        covers: {
            placeholder: require('images/books/middlesex.jpg?{"width":32}'),
            thumbnail: require('images/books/middlesex.jpg?{"width":200}'),
            full: require('images/books/middlesex.jpg?{"width":600}')
        }
    }
];
