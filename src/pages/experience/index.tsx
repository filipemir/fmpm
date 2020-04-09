import React from 'react';

import Resume from 'components/Resume';
import { RootDiv, Section, HeaderWrapper, ResumeWrapper } from './styles';
import Header from 'components/Header';

export default function HomePage() {
    return (
        <RootDiv>
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
