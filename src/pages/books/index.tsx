import React, { useState } from 'react';

import { RootDiv } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import styled from '@emotion/styled';
import { FONT_FAMILY_SANS_SERIF } from 'styles/global';

import { BOOKS } from '../../data/books';

const DESCRIPTION = "Filipe's books";

const Year = styled.h2`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    text-align: center;
`;

const BookGrid = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
    gap: 20px;
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
        transform: scale(1.2);
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

export default function BooksPage() {
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
                    {BOOKS.map(({ title, image }) => (
                        <Book key={title}>
                            <BookCover src={image} />
                        </Book>
                    ))}
                </BookGrid>
            </Section>
        </RootDiv>
    );
}
