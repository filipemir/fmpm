import React from 'react';
import { RootDiv, TimelineWrapper, PhasesWrapper, ExperienceDiv, PhaseDiv } from './styles';
import CareerTimeline from 'components/CareerTimeline';
import { RESUME } from 'data/resume';
import { isJob } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import { ResumePhase } from 'models/experience';

function PhaseWrapper({ resumePhase }: { resumePhase: ResumePhase }) {
    const { phase, experiences } = resumePhase;
    return (
        <PhaseDiv key={`phase-${phase}`}>
            {experiences.map((e) => {
                return <ExperienceDiv>{isJob(e) ? <JobCard job={e} /> : <DegreeCard degree={e} />}</ExperienceDiv>;
            })}
        </PhaseDiv>
    );
}

export default function Resume() {
    return (
        <RootDiv>
            <TimelineWrapper>
                <CareerTimeline />
            </TimelineWrapper>
            <PhasesWrapper>
                {RESUME.map((p) => (
                    <PhaseWrapper resumePhase={p} />
                ))}
            </PhasesWrapper>
        </RootDiv>
    );
}
