import React from 'react';
import { storiesOf } from '@storybook/react';
import { BOOKS_SORTED } from 'data/books';
import BookGrid from './index';

storiesOf(`BookGrid`, module).add(`default`, () => {
    return <BookGrid books={BOOKS_SORTED} />;
});
