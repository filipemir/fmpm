import React from 'react';
import { storiesOf } from '@storybook/react';

import BookModal from './index';
import { BOOKS } from '../../data/books';
import { select } from '@storybook/addon-knobs';

const bookTitles = BOOKS.map((b) => b.title);

storiesOf(`BookModal`, module).add(`default`, () => {
    const bookTitle = select('Job', bookTitles, bookTitles[0]),
        book = BOOKS.find((b) => b.title === bookTitle)!;
    return <BookModal book={book} />;
});
