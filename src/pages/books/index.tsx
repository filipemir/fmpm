import React from 'react';

import { ProjectsWrapper, RootDiv, Project } from './styles';
import Header from 'components/Header';
import { PROJECTS } from 'data/projects';
import ProjectRow from 'components/ProjectRow';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';

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
                    {PROJECTS.map((p, i) => (
                        <Project key={`project-${i}`}>
                            <ProjectRow project={p} leftAlignedContent={i % 2 === 0} />
                        </Project>
                    ))}
                </ProjectsWrapper>
            </Section>
        </RootDiv>
    );
}
