import React from 'react';

import { ProjectsWrapper, RootDiv, Project } from './styles';
import Header from 'components/Header';
import { PROJECTS } from 'data/projects';
import ProjectRow from 'components/ProjectRow';
import Helmet from 'components/Helmet';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';

const DESCRIPTION = "A few of the side-projects I've built over the years.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.PROJECTS} pageTitle='Projects' description={DESCRIPTION} />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'projects'} emoji={'🛠'} />
                </SectionHeaderWrapper>
                <SectionIntro>
                    Some side-projects I have put together over the years with various degrees of seriousness and in
                    varying stages of completion.
                </SectionIntro>
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
