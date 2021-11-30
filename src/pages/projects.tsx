import React from 'react';

import Header from 'components/Header';
import { PROJECTS } from 'data/projects';
import ProjectRow from 'components/ProjectRow';
import SEO from 'components/SEO';
import Page from 'models/page';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import styled from '@emotion/styled';
import { COLOR_QUATERNARY, PADDING_TOP_PAGE } from 'styles/global';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
`;

export const ProjectsWrapper = styled.div`
    padding-top: 30px;
`;

export const Project = styled.div`
    border-bottom: 1px solid ${COLOR_QUATERNARY};
    padding-bottom: 55px;
    margin-top: 45px;

    @media (max-width: 900px) {
        padding-bottom: 30px;
        margin-top: 25px;
    }

    &:first-of-type {
        margin-top: 0;
    }

    &:last-of-type {
        border-bottom: none;
    }
`;

const DESCRIPTION = "A few of the side-projects I've built over the years.";

export default function HomePage() {
    return (
        <RootDiv>
            <SEO
                page={Page.PROJECTS}
                pageTitle='Projects'
                description={DESCRIPTION}
            />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'projects'} emoji={'🛠'} />
                </SectionHeaderWrapper>
                <SectionIntro>
                    Some side-projects I have put together over the years with
                    various degrees of seriousness and in varying degrees of
                    completion.
                </SectionIntro>
                <ProjectsWrapper>
                    {PROJECTS.map((p, i) => (
                        <Project key={`project-${i}`}>
                            <ProjectRow
                                project={p}
                                leftAlignedContent={i % 2 === 0}
                            />
                        </Project>
                    ))}
                </ProjectsWrapper>
            </Section>
        </RootDiv>
    );
}
