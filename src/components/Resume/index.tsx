import React, { useState } from 'react';
import { RootDiv, TimelineWrapper, JobsWrapper } from './styles';
import CareerTimeline from 'components/CareerTimeline';
import useResumeReducer from 'hooks/useResumeReducer';
import JobFeed from 'components/JobFeed';

export default function Resume() {
    const { state, actions } = useResumeReducer(),
        { section, phase, tenure } = state,
        { setTenure, setPhase } = actions,
        [scrollListenerEnabled, setScrollListenerEnabled] = useState(false);

    return (
        <RootDiv>
            <TimelineWrapper
                onMouseEnter={() => setScrollListenerEnabled(false)}
                onMouseLeave={() => setScrollListenerEnabled(true)}
            >
                <CareerTimeline
                    activeSection={section}
                    activeTenure={tenure}
                    activeCareerPhase={phase}
                    onCareerPhaseClick={setPhase}
                    onTenureClick={setTenure}
                />
            </TimelineWrapper>
            <JobsWrapper>
                <JobFeed activeTenure={tenure} setActiveTenure={scrollListenerEnabled ? setTenure : undefined} />
            </JobsWrapper>
        </RootDiv>
    );
}
