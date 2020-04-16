import React from 'react';

import Resume from 'components/Resume';
import { HeaderWrapper, ResumeWrapper, RootDiv, Section } from './styles';
import Header from 'components/Header';
import Helmet from 'components/Helmet';
import Page from 'models/page';

const DESCRIPTION =
    "My online resume. I've been lucky to do a lot of things over the years. This is where I keep a running tally.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.EXPERIENCE} pageTitle='Experience' description={DESCRIPTION} />
            <Section>
                <HeaderWrapper>
                    <Header text={'experience'} emoji={'👨‍💻'} />
                </HeaderWrapper>
                <ResumeWrapper>
                    <Resume />
                </ResumeWrapper>
            </Section>
        </RootDiv>
    );
}
