import React from 'react';
import { Waypoint } from 'react-waypoint';
import { StyledRoot } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import BookGrid from 'components/BookGrid';
import usePaginatedBooks from 'hooks/usePaginatedBooks';
import useMedia from 'use-media';

const DESCRIPTION = "Books I've read over the years";

export default function BooksPage() {
    const isMobile = useMedia({ maxWidth: '900px' }),
        { books, getMoreBooks } = usePaginatedBooks({
            pageSize: isMobile ? 20 : 40
        }),
        lastBook = books && books[books.length - 1];
    return (
        <StyledRoot>
            <Helmet
                page={Page.PROJECTS}
                pageTitle='Books'
                description={DESCRIPTION}
            />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'books'} emoji={'📚'} />
                </SectionHeaderWrapper>
                <SectionIntro>
                    A mostly chronological list of books I&apos;ve finished over
                    the years.
                </SectionIntro>
                <BookGrid books={books} />
                <Waypoint
                    key={lastBook && `${lastBook.title}`}
                    bottomOffset={'-50%'}
                    onEnter={getMoreBooks}
                />
            </Section>
        </StyledRoot>
    );
}
