import React from 'react';

import { RootDiv, WelcomeSection } from './styles';
import Welcome from 'components/Welcome';
import Helmet from 'components/Helmet';
import Page from 'models/page';

const DESCRIPTION =
    "Hi! I'm Filipe, a Boston-based Software Engineer working with TypesScript, Java, React and whatever other tool seems right for the job.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet page={Page.ABOUT} description={DESCRIPTION} />
            <WelcomeSection>
                <Welcome />
            </WelcomeSection>
        </RootDiv>
    );
}
