import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { BOOKS_SORTED } from 'data/books';
import BookModal from './index';

const bookTitles = BOOKS_SORTED.map((b) => b.title);

storiesOf(`BookModal`, module).add(`default`, () => {
    const bookTitle = select('Book', bookTitles, bookTitles[0]),
        book =
            BOOKS_SORTED.find((b) => b.title === bookTitle) || BOOKS_SORTED[0];
    return <BookModal book={book} onClose={action('Close modal')} />;
});
