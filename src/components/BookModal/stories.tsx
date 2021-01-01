import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { BOOKS } from 'data/books';
import BookModal from './index';

const bookTitles = BOOKS.map((b) => b.title);

storiesOf(`BookModal`, module).add(`default`, () => {
    const bookTitle = select('Book', bookTitles, bookTitles[0]),
        book = BOOKS.find((b) => b.title === bookTitle)!;
    return <BookModal book={book} onClose={action('Close modal')} />;
});
