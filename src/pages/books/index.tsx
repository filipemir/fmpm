import React from 'react';
import { StyledRoot } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import { BOOKS_SORTED } from 'data/books';
import BookGrid from 'components/BookGrid';

const DESCRIPTION = "Filipe's books";

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
                <BookGrid books={BOOKS_SORTED} />
            </Section>
        </StyledRoot>
    );
}
