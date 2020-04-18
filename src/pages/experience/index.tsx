import React from 'react';

import Resume from 'components/Resume';
import { ResumeWrapper, RootDiv, Section } from './styles';
import { SectionHeaderWrapper, SectionIntro } from 'styles/sections';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';

const DESCRIPTION =
    "My online resume. I've been lucky to do a lot of interesting things over the years. This is where I keep a running tally.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.EXPERIENCE} pageTitle='Experience' description={DESCRIPTION} />
            <Section>
                <SectionHeaderWrapper>
                    <Header text={'experience'} emoji={'🎩'} />
                </SectionHeaderWrapper>
                <SectionIntro>
                    I&apos;ve been lucky to wear a lot of different hats on my way to software engineering: teacher,
                    researcher, reporter, analyst, consultant. Not all those roles connect directly to the work I do
                    today, but each taught me something that has made me a better engineer. So here is the full list:
                </SectionIntro>
                <ResumeWrapper>
                    <Resume />
                </ResumeWrapper>
            </Section>
        </RootDiv>
    );
}
