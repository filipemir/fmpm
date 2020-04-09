import React from 'react';

import Layout from 'components/Layout';
import Resume from 'components/Resume';
import { RootDiv, Section, HeaderWrapper, ResumeWrapper } from './styles';
import Header from 'components/Header';

export default function HomePage() {
    return (
        <Layout>
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
        </Layout>
    );
}
