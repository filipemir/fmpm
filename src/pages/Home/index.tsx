import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import Layout from 'components/Layout';
import Resume from 'components/Resume';
import { RootDiv, WelcomeSection, Section, HeaderWrapper, ResumeWrapper, ProjectsWrapper } from './styles';
import Header from 'components/Header';
import Welcome from 'components/Welcome';
import { PROJECTS } from 'data/projects';
import ProjectCard from 'components/ProjectCard';
import { Waypoint } from 'react-waypoint';

export default function HomePage() {
    const [showExperience, setShowExperience] = useState(false),
        [showProjects, setShowProjects] = useState(false),
        experienceSectionStyle = useSpring({
            opacity: showExperience ? 1 : 0,
            x: showExperience ? 0 : 20,
            config: config.molasses
        }),
        projectsSectionStyle = useSpring({ opacity: showProjects ? 1 : 0, config: config.molasses });
    return (
        <Layout>
            <RootDiv>
                <WelcomeSection>
                    <Welcome />
                </WelcomeSection>

                <Waypoint onEnter={() => setShowExperience(true)} />
                <animated.div style={experienceSectionStyle}>
                    <Section>
                        <HeaderWrapper>
                            <Header text={'experience'} emoji={'👨‍💻'} />
                        </HeaderWrapper>
                        <ResumeWrapper>
                            <Resume />
                        </ResumeWrapper>
                    </Section>
                </animated.div>

                <Waypoint onEnter={() => setShowProjects(true)} />
                <animated.div style={projectsSectionStyle}>
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
                </animated.div>
            </RootDiv>
        </Layout>
    );
}
