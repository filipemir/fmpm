import React from 'react';

import { RootDiv, WelcomeSection } from './styles';
import Welcome from 'components/Welcome';
import Helmet from 'components/Helmet';

const DESCRIPTION =
    "Hi! I'm Filipe, a Boston-based Software Engineer working with TypesScript, Java, React and whatever other tool seems right for the job.";

export default function HomePage() {
    return (
        <RootDiv>
            <Helmet description={DESCRIPTION} />
            <WelcomeSection>
                <Welcome />
            </WelcomeSection>
        </RootDiv>
    );
}
