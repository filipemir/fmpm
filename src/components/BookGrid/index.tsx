import React, { useState } from 'react';
import { BookEntry } from '../../models/media';
import styled from '@emotion/styled';
import BookModal from '../BookModal';

const Root = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 120px));
    gap: 15px;
    justify-content: center;
    align-items: center;
`;

const Book = styled.div`
    position: relative;
    cursor: pointer;
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
    grid-auto-flow: row dense;

    &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        padding-bottom: calc(1.5 * 100%);
    }

    &:hover {
        box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0px;
        transform: scale(1.3);
        z-index: 1;
    }
`;

const BookCover = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    top: 0;
    transition: 150ms ease-in-out;

    &:hover {
        object-fit: fill;
    }
`;

const BookGrid = ({ books }: { books: BookEntry[] }) => {
    const [activeBook, setActiveBook] = useState<BookEntry | null>(null);
    return (
        <Root>
            {books.map((book) => {
                const { title, author, image } = book,
                    description = `"${title}" by ${author}`;
                return (
                    <Book key={title} onClick={() => setActiveBook(book)}>
                        <BookCover src={image} alt={description} title={description} />
                    </Book>
                );
            })}
            {activeBook && <BookModal book={activeBook} onClose={() => setActiveBook(null)} />}
        </Root>
    );
};

export default BookGrid;
