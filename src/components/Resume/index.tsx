import React, { useState } from 'react';
import { RootDiv, TimelineWrapper, JobsWrapper } from './styles';
import CareerTimeline from 'components/CareerTimeline';
import useResumeReducer from 'hooks/useResumeReducer';
import ResumeContent from 'components/ResumeContent';

export default function Resume() {
    const { state, actions } = useResumeReducer(),
        { item, section, phase, tenure } = state,
        { setTenure, setPhase, setItem, setSection } = actions,
        [scrollListenerEnabled, setScrollListenerEnabled] = useState(true);

    return (
        <RootDiv>
            <TimelineWrapper
                onMouseEnter={() => setScrollListenerEnabled(false)}
                onMouseLeave={() => setScrollListenerEnabled(true)}
            >
                <CareerTimeline
                    activeItem={item}
                    activeSection={section}
                    activeTenure={tenure}
                    activeCareerPhase={phase}
                    onCareerPhaseClick={setPhase}
                    onTenureClick={setTenure}
                    onSectionClick={setSection}
                    onItemClick={setItem}
                />
            </TimelineWrapper>
            <JobsWrapper>
                <ResumeContent
                    activeItem={item}
                    activeSection={section}
                    activeTenure={tenure}
                    activeCareerPhase={phase}
                    setActiveTenure={scrollListenerEnabled ? setTenure : undefined}
                    setActiveItem={scrollListenerEnabled ? setItem : undefined}
                />
            </JobsWrapper>
        </RootDiv>
    );
}
