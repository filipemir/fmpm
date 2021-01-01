import React, { useState } from 'react';

import { RootDiv } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import styled from '@emotion/styled';
import { FONT_FAMILY_SANS_SERIF } from 'styles/global';

import { BOOKS } from '../../data/books';
import { BookEntry } from '../../models/media';

const DESCRIPTION = "Filipe's books";

const Year = styled.h2`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    text-align: center;
`;

const BookGrid = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 120px));
    gap: 15px;
    justify-content: center;
    align-items: center;
`;

type BookProps = {
    imgUrl?: string;
};

const Book = styled.div<BookProps>`
    position: relative;
    cursor: pointer;
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
    box-shadow: rgba(2, 12, 27, 0.2) 5px 10px 10px 0px;
    z-index: 0;
    grid-auto-flow: row dense;
    &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        padding-bottom: calc(1.5 * 100%);
        background-color: red;
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

const ActiveBook = styled(Book)`
    position: relative;
    grid-column: auto / span 2;
    grid-row: auto / span 2;

    box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0px;
    z-index: 2;
    transition: all 150ms ease-in-out;

    &:hover {
        transform: none;
    }
`;

const ActiveBookInfoWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    box-sizing: border-box;
    vertical-align: bottom;

    &:before {
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.8);
        content: ' ';
        height: 100%;
        width: 100%;
        z-index: -1;
    }
`;

const ActiveBookInfo = styled.div`
    padding: 20px;
    color: #bc4124;
    text-align: end;
    bottom: 0;
`;

interface BookCardProps {
    isActive: boolean;
    onClick: () => void;
    book: BookEntry;
}

const BookCard = ({ isActive, onClick, book }: BookCardProps) => {
    const { title, image } = book,
        Root = isActive ? ActiveBook : Book;
    return (
        <Root key={title} onClick={onClick}>
            <BookCover src={image} />
            {isActive && (
                <ActiveBookInfoWrapper>
                    <ActiveBookInfo>{title}</ActiveBookInfo>
                </ActiveBookInfoWrapper>
            )}
        </Root>
    );
};

export default function BooksPage() {
    const [activeBook, setActiveBook] = useState<BookEntry | null>(null);
    return (
        <RootDiv>
            <Helmet page={Page.PROJECTS} pageTitle='Books' description={DESCRIPTION} />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'books'} emoji={'📚'} />
                </SectionHeaderWrapper>
                <SectionIntro>Books I&apos;ve read because otherwise I can&apos;t keep track of them.</SectionIntro>
                <Year>2020</Year>
                <BookGrid>
                    {BOOKS.map((book) => (
                        <BookCard
                            key={book.title}
                            book={book}
                            onClick={() => setActiveBook(activeBook === book ? null : book)}
                            isActive={!!activeBook && activeBook === book}
                        />
                    ))}
                </BookGrid>
            </Section>
        </RootDiv>
    );
}
