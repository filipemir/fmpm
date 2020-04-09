import React from 'react';

import { RootDiv, WelcomeSection, Section, HeaderWrapper, ProjectsWrapper } from './styles';
import Header from 'components/Header';
import Welcome from 'components/Welcome';
import { PROJECTS } from 'data/projects';
import ProjectCard from 'components/ProjectCard';

export default function HomePage() {
    return (
        <RootDiv>
            <WelcomeSection>
                <Welcome />
            </WelcomeSection>

            <Section>
                <HeaderWrapper>
                    <Header text={'projects'} emoji={'🛠'} />
                </HeaderWrapper>
                <ProjectsWrapper>
                    {PROJECTS.map((p, i) => (
                        <ProjectCard project={p} key={`project-${i}`} />
                    ))}
                </ProjectsWrapper>
            </Section>
        </RootDiv>
    );
}
