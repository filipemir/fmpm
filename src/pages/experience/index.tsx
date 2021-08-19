import React from 'react';

import Resume from 'components/Resume';
import { ResumeWrapper, RootDiv, ResumeButton, Note } from './styles';
import { SectionHeaderWrapper, SectionIntro, Section } from 'styles/sections';
import Header from 'components/Header';
import SEO from 'components/SEO';
import Page from 'models/page';
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
