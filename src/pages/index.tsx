import React from 'react';

import Welcome from 'components/Welcome';
import SEO from 'components/SEO';
import Page from 'models/page';
import styled from '@emotion/styled';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    height: 100vh;
`;

export const WelcomeSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;

    @media (max-width: 900px) {
        text-align: center;
        height: unset;
        display: block;

        > div {
            transform: none;
        }
    }
`;


const DESCRIPTION =
    "Hi! I'm Filipe, a Boston-based Software Engineer working with TypesScript, Java, React and whatever other tool seems right for the job.";

export default function HomePage() {
    return (
        <RootDiv>
            <SEO page={Page.ABOUT} description={DESCRIPTION} />
            <WelcomeSection>
                <Welcome />
            </WelcomeSection>
        </RootDiv>
    );
}
