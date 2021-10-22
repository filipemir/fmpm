import React from 'react';

import Resume from 'components/Resume';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import Header from 'components/Header';
import SEO from 'components/SEO';
import Page from 'models/page';
import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_QUATERNARY,
    COLOR_TERNARY,
    FONT_FAMILY_MONO,
    PADDING_TOP_PAGE
} from 'styles/global';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
`;

export const ResumeWrapper = styled.div`
    display: block;
    position: relative;
`;

export const Note = styled.div`
    background-color: ${COLOR_QUATERNARY};
    text-align: center;
    margin: 20px auto 0 auto;
    padding: 15px;
    font-size: 0.8em;
    font-family: ${FONT_FAMILY_MONO};
`;

export const ResumeButton = styled.a`
    background: ${COLOR_BG_ACCENT};
    border-radius: 6px;
    color: ${COLOR_ACCENT};
    padding: 7px;
    box-shadow: 2px 2px 0 ${COLOR_TERNARY};
    width: 150px;
    text-align: center;

    &:hover {
        border-bottom: none;
    }

    @media (max-width: 900px) {
        width: 100%;
        max-width: 150px;
        margin: 10px auto 0 auto;
        display: block;
    }
`;

const DESCRIPTION =
    "My online resume. I've been lucky to do a lot of interesting things over the years. This is where I keep a running tally.";

export default function HomePage() {
    return (
        <RootDiv>
            <SEO
                page={Page.EXPERIENCE}
                pageTitle='Experience'
                description={DESCRIPTION}
            />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'experience'} emoji={'👨‍💻'} />
                </SectionHeaderWrapper>
                <SectionIntro>
                    <Note>
                        For a much abbreviated print version, see my{' '}
                        <ResumeButton
                            href={`/resume.pdf`}
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            resume
                        </ResumeButton>
                    </Note>
                </SectionIntro>
                <ResumeWrapper>
                    <Resume />
                </ResumeWrapper>
            </Section>
        </RootDiv>
    );
}
