import React from 'react';

import { ProjectsWrapper, RootDiv } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import { BOOKS } from '../../data/books';

const DESCRIPTION = "Filipe's books";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.PROJECTS} pageTitle='Projects' description={DESCRIPTION} />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'books'} emoji={'📚'} />
                </SectionHeaderWrapper>
                <SectionIntro>Books I&apos;ve read because otherwise I can&apos;t keep track of them.</SectionIntro>
                <ProjectsWrapper>
                    <img src={BOOKS[0].image} />
                </ProjectsWrapper>
            </Section>
        </RootDiv>
    );
}
