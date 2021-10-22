import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { Waypoint } from 'react-waypoint';
import { StyledRoot } from './styles';
import Header from 'components/Header';
import SEO from 'components/SEO';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import BookGrid from 'components/BookGrid';
import usePaginatedBooks from 'hooks/usePaginatedBooks';
import useMedia from 'use-media';
import { PERSONAL_EMAIL } from '../../data/personal';

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
                <SectionIntro>
                    A running list of the books I&apos;ve finished over the
                    years, for my own personal recollection and as a window into
                    some of what I&apos;ve been curious about.
                    <div>
                        Know of a book you think I&apos;d like?{' '}
                        <a
                            href={`mailto:${PERSONAL_EMAIL}`}
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            Let me know.
                        </a>
                    </div>
                </SectionIntro>
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

export async function getServerSideProps(props: GetServerSidePropsContext) {
    return {
        props: { booksCoverPlaceholders: [] }
    };
}
