import React from 'react';
import { RootDiv, TimelineWrapper, JobsWrapper } from './styles';
import CareerTimeline from 'components/CareerTimeline';
import { Tenure } from 'models/experience';
import useCareer from 'hooks/useCareer';
import JobFeed from 'components/JobFeed';

export default function Resume() {
    const { tenure, phase, setExperience } = useCareer(),
        onTenureChange = (tenure: Tenure) => {
            setExperience(tenure.experiences[0]);
        };

    return (
        <RootDiv>
            <TimelineWrapper>
                <CareerTimeline activePhase={phase} activeTenure={tenure} onTenureChange={onTenureChange} />
            </TimelineWrapper>
            <JobsWrapper>
                <JobFeed activeTenure={tenure} />
            </JobsWrapper>
        </RootDiv>
    );
}
