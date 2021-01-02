import React from 'react';
import { StyledRoot, StyledYear } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import { BOOKS_BY_YEAR } from 'data/books';
import BookGrid from 'components/BookGrid';

const DESCRIPTION = "Filipe's books",
    YEARS = Object.keys(BOOKS_BY_YEAR)
        .map((y) => parseInt(y, 10))
        .sort((a, b) => b - a);

export default function BooksPage() {
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
                    Books I&apos;ve read because otherwise I can&apos;t keep
                    track of them.
                </SectionIntro>
                <div>
                    {YEARS.map((year) => (
                        <>
                            <StyledYear>{year}</StyledYear>
                            <BookGrid books={BOOKS_BY_YEAR[year]} />
                        </>
                    ))}
                </div>
            </Section>
        </StyledRoot>
    );
}
