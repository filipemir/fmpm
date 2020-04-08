import React from 'react';

import Layout from 'components/Layout';
import Resume from 'components/Resume';
import { RootDiv, WelcomeSection, ExperienceSection, ResumeWrapper } from './styles';
import Header from 'components/Header';
import Welcome from 'components/Welcome';

export default function HomePage() {
    return (
        <Layout>
            <RootDiv>
                <WelcomeSection>
                    <Welcome />
                </WelcomeSection>
                <ExperienceSection>
                    <h2>
                        <Header text={'experience'} emoji={'👨‍💻'} />
                    </h2>
                    <ResumeWrapper>
                        <Resume />
                    </ResumeWrapper>
                </ExperienceSection>
            </RootDiv>
        </Layout>
    );
}
