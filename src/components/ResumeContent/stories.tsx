import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ResumeContent from './index';
import useResumeReducer from 'hooks/useResumeReducer';

function ResumeContentWrapper() {
    const { state } = useResumeReducer(),
        { item, section, tenure, phase } = state;

    return (
        <ResumeContent
            activeItem={item}
            activeSection={section}
            activeTenure={tenure}
            activeCareerPhase={phase}
            setActiveTenure={action('Set tenure')}
            setActiveItem={action('Set item')}
        />
    );
}

storiesOf(`Resume|ResumeContent`, module).add(`default`, () => {
    return (
        <div style={{ height: '75vh' }}>
            <ResumeContentWrapper />
        </div>
    );
});
