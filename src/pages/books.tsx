import React from 'react';
import { Waypoint } from 'react-waypoint';
import Header from 'components/Header';
import SEO from 'components/SEO';
import Page from 'models/page';
import { SectionHeaderWrapper, Section } from 'styles/sections';
import BookGrid from 'components/BookGrid';
import usePaginatedBooks from 'hooks/usePaginatedBooks';
import useMedia from 'use-media';
import styled from '@emotion/styled';
import { PADDING_TOP_PAGE } from 'styles/global';

const StyledRoot = styled.div`
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
    padding-bottom: ${PADDING_TOP_PAGE}px;
    min-height: 100vh;
`;

const DESCRIPTION = "Books I've read over the years";

export default function BooksPage() {
    const isMobile = useMedia({ maxWidth: '900px' }),
        { books, getMoreBooks } = usePaginatedBooks({
            pageSize: isMobile ? 30 : 80
        }),
        lastBook = books && books[books.length - 1];
    return (
        <StyledRoot>
            <SEO
                page={Page.BOOKS}
                pageTitle='Books'
                description={DESCRIPTION}
            />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'books'} emoji={'📚'} />
                </SectionHeaderWrapper>
                <BookGrid books={books} />
                <Waypoint
                    key={lastBook && `${lastBook.title}`}
                    bottomOffset={'-100%'}
                    onEnter={getMoreBooks}
                />
            </Section>
        </StyledRoot>
    );
}
