import React from 'react';
import { storiesOf } from '@storybook/react';
import CareerTimeline from './index';
import useResumeReducer from 'hooks/useResumeReducer';

function CareerTimelineWrapper() {
    const { state, actions } = useResumeReducer(),
        { section, tenure, phase } = state,
        { setTenure, setPhase } = actions;

    return (
        <CareerTimeline
            activeSection={section}
            activeTenure={tenure}
            activeCareerPhase={phase}
            onTenureClick={setTenure}
            onCareerPhaseClick={setPhase}
        />
    );
}

storiesOf(`Resume|CareerTimeline`, module).add(`default`, () => <CareerTimelineWrapper />);
