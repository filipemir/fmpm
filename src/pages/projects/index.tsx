import React from 'react';

import { HeaderWrapper, ProjectsWrapper, RootDiv, Section } from './styles';
import Header from 'components/Header';
import { PROJECTS } from 'data/projects';
import ProjectRow from 'components/ProjectRow';
import Helmet from 'components/Helmet';
import Page from 'models/page';

const DESCRIPTION = "A few of the side-projects I've built over the years.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.PROJECTS} pageTitle='Projects' description={DESCRIPTION} />
            <Section>
                <HeaderWrapper>
                    <Header text={'projects'} emoji={'🛠'} />
                </HeaderWrapper>
                <ProjectsWrapper>
                    {PROJECTS.map((p, i) => (
                        <ProjectRow project={p} key={`project-${i}`} leftAlignedContent={i % 2 === 0} />
                    ))}
                </ProjectsWrapper>
            </Section>
        </RootDiv>
    );
}
