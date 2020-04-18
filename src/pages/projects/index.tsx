import React from 'react';

import { HeaderWrapper, ProjectsWrapper, RootDiv, Section, Project } from './styles';
import Header from 'components/Header';
import { PROJECTS } from 'data/projects';
import ProjectRow from 'components/ProjectRow';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionIntro } from 'styles/sections';

const DESCRIPTION = "A few of the side-projects I've built over the years.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.PROJECTS} pageTitle='Projects' description={DESCRIPTION} />
            <Section>
                <HeaderWrapper>
                    <Header text={'projects'} emoji={'🛠'} />
                </HeaderWrapper>
                <SectionIntro>Some side-projects I have worked on over the years, mostly for fun.</SectionIntro>
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
