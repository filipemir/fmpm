import React from 'react';

import { RootDiv, Section, HeaderWrapper, ProjectsWrapper } from './styles';
import Header from 'components/Header';
import { PROJECTS } from 'data/projects';
import ProjectRow from 'components/ProjectRow';

export default function HomePage() {
    return (
        <RootDiv>
            <Section>
                <HeaderWrapper>
                    <Header text={'projects'} emoji={'🛠'} />
                </HeaderWrapper>
                <ProjectsWrapper>
                    {PROJECTS.map((p, i) => (
                        <ProjectRow project={p} key={`project-${i}`} />
                    ))}
                </ProjectsWrapper>
            </Section>
        </RootDiv>
    );
}
