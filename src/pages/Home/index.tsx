import React from 'react';

import Layout from 'components/Layout';
import Resume from 'components/Resume';
import { RootDiv, WelcomeSection, Section, HeaderWrapper, ResumeWrapper, ProjectsWrapper } from './styles';
import Header from 'components/Header';
import Welcome from 'components/Welcome';
import { PROJECTS } from 'data/projects';
import ProjectCard from 'components/ProjectCard';

export default function HomePage() {
    return (
        <Layout>
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
                <Section>
                    <HeaderWrapper>
                        <Header text={'experience'} emoji={'👨‍💻'} />
                    </HeaderWrapper>
                    <ResumeWrapper>
                        <Resume />
                    </ResumeWrapper>
                </Section>
            </RootDiv>
        </Layout>
    );
}
