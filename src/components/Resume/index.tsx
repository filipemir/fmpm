import React, { useState } from 'react';
import { RootDiv, TimelineWrapper, JobsWrapper } from './styles';
import CareerTimeline from 'components/CareerTimeline';
import { Tenure } from 'models/experience';
import useCareer from 'hooks/useCareer';
import JobFeed from 'components/JobFeed';

export default function Resume() {
    const { tenure, phase, setExperience } = useCareer(),
        [scrollListenerEnabled, setScrollListenerEnabled] = useState(false),
        onTenureChange = (tenure: Tenure) => {
            setExperience(tenure.experiences[0]);
        };

    return (
        <RootDiv>
            <TimelineWrapper
                onMouseEnter={() => setScrollListenerEnabled(false)}
                onMouseLeave={() => setScrollListenerEnabled(true)}
            >
                <CareerTimeline activePhase={phase} activeTenure={tenure} onTenureChange={onTenureChange} />
            </TimelineWrapper>
            <JobsWrapper>
                <JobFeed activeTenure={tenure} setActiveTenure={scrollListenerEnabled ? onTenureChange : undefined} />
            </JobsWrapper>
        </RootDiv>
    );
}
