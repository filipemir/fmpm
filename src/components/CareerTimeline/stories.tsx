import React from 'react';
import { storiesOf } from '@storybook/react';
import CareerTimeline from './index';
import useResumeReducer from 'hooks/useResumeReducer';

function CareerTimelineWrapper() {
    const { state, actions } = useResumeReducer(),
        { item, section, tenure, phase } = state,
        { setItem, setSection, setTenure, setPhase } = actions;

    return (
        <CareerTimeline
            activeItem={item}
            activeSection={section}
            activeTenure={tenure}
            activeCareerPhase={phase}
            onTenureClick={setTenure}
            onCareerPhaseClick={setPhase}
            onItemClick={setItem}
            onSectionClick={setSection}
        />
    );
}

storiesOf(`Resume|CareerTimeline`, module).add(`default`, () => <CareerTimelineWrapper />);
