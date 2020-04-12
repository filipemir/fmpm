import React from 'react';

import { RootDiv, WelcomeSection } from './styles';
import Welcome from 'components/Welcome';

export default function HomePage() {
    return (
        <RootDiv>
            <WelcomeSection>
                <Welcome />
            </WelcomeSection>
        </RootDiv>
    );
}
