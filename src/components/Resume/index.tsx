import React from 'react';
import { useTrail, animated } from 'react-spring';
import {
    RootDiv,
    TimelineWrapper,
    PhasesWrapper,
    ExperienceDiv,
    PhaseDiv,
    TenureDiv,
    TenureDurationDiv,
    TenureNameDiv,
    SlashDiv
} from './styles';
import CareerTimeline from 'components/CareerTimeline';
import { CAREER } from 'data/resume';
import { getTenureDurationString, isJob } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import { Tenure } from 'models/experience';
import { ReactSVG } from 'react-svg';
import underline from 'images/underline.svg';

function useTrailItems<T>(collection: T[]) {
    return useTrail(collection.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });
}

function TenureWrapper({ tenure }: { tenure: Tenure }) {
    const { company, experiences } = tenure,
        trail = useTrailItems(experiences);

    return (
        <TenureDiv>
            <TenureNameDiv>
                {company}
                <SlashDiv>
                    <ReactSVG src={underline} />
                </SlashDiv>
            </TenureNameDiv>
            <TenureDurationDiv>{getTenureDurationString(tenure)}</TenureDurationDiv>
            {trail.map(({ opacity, x }, i) => {
                const e = experiences[i];
                return (
                    <animated.div
                        style={{ opacity, transform: x.interpolate((x) => `translateY(${-x}px)`) }}
                        key={`experience-${e.title}`}
                    >
                        <ExperienceDiv>{isJob(e) ? <JobCard job={e} /> : <DegreeCard degree={e} />}</ExperienceDiv>
                    </animated.div>
                );
            })}
        </TenureDiv>
    );
}

export default function Resume() {
    const trail = useTrailItems(CAREER);

    return (
        <RootDiv>
            <TimelineWrapper>
                <CareerTimeline />
            </TimelineWrapper>
            <PhasesWrapper>
                {trail.map(({ opacity, x }, i) => {
                    const careerPhase = CAREER[i],
                        { name, tenures } = careerPhase;
                    return (
                        <animated.div
                            style={{ opacity, transform: x.interpolate((x) => `translateY(${-x}px)`) }}
                            key={`phase-${name}`}
                        >
                            <PhaseDiv>
                                {tenures.map((tenure) => (
                                    <TenureWrapper tenure={tenure} key={`tenure-${tenure.company}`} />
                                ))}
                            </PhaseDiv>
                        </animated.div>
                    );
                })}
            </PhasesWrapper>
        </RootDiv>
    );
}
