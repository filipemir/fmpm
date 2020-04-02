import React from 'react';
import {
    RootDiv,
    TimelineWrapper,
    PhasesWrapper,
    ExperienceDiv,
    PhaseDiv,
    TenureDiv,
    TenureNameDiv,
    SlashDiv
} from './styles';
import CareerTimeline from 'components/CareerTimeline';
import { CAREER } from 'data/resume';
import { isJob } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import { Tenure } from 'models/experience';
import { ReactSVG } from 'react-svg';
import underline from 'images/underline.svg';

function TenureWrapper({ tenure }: { tenure: Tenure }) {
    const { company, experiences } = tenure;
    return (
        <TenureDiv>
            <TenureNameDiv>
                {company}
                <SlashDiv>
                    <ReactSVG src={underline} />
                </SlashDiv>
            </TenureNameDiv>
            {experiences.map((e) => {
                return (
                    <ExperienceDiv key={`experience-${e.title}`}>
                        {isJob(e) ? <JobCard job={e} /> : <DegreeCard degree={e} />}
                    </ExperienceDiv>
                );
            })}
        </TenureDiv>
    );
}

export default function Resume() {
    return (
        <RootDiv>
            <TimelineWrapper>
                <CareerTimeline />
            </TimelineWrapper>
            <PhasesWrapper>
                {CAREER.map((careerPhase) => {
                    const { name, tenures } = careerPhase;
                    return (
                        <PhaseDiv key={`phase-${name}`}>
                            {tenures.map((tenure) => (
                                <TenureWrapper tenure={tenure} key={`tenure-${tenure.company}`} />
                            ))}
                        </PhaseDiv>
                    );
                })}
            </PhasesWrapper>
        </RootDiv>
    );
}
