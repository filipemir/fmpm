import React from 'react';

import Layout from 'components/Layout';
import Resume from 'components/Resume';
import { RootDiv, ResumeSection, ResumeWrapper } from './styles';
import Header from 'components/Header';

export default function HomePage() {
    return (
        <Layout>
            <RootDiv>
                <h2>
                    <Header text={'experience'} emoji={'👨‍💻'} />
                </h2>
                <ResumeSection>
                    <ResumeWrapper>
                        <Resume />
                    </ResumeWrapper>
                </ResumeSection>
            </RootDiv>
        </Layout>
    );
}
