import React from 'react';
import { storiesOf } from '@storybook/react';
import CareerTimeline from './index';
import useCareer from 'hooks/useCareer';
import { Tenure } from 'models/experience';

function CareerTimelineWrapper() {
    const { tenure, phase, setExperience } = useCareer(),
        onTenureChange = (tenure: Tenure) => {
            setExperience(tenure.experiences[0]);
        };

    return <CareerTimeline activePhase={phase} activeTenure={tenure} onTenureChange={onTenureChange} />;
}

storiesOf(`Resume|CareerTimeline`, module).add(`default`, () => <CareerTimelineWrapper />);
