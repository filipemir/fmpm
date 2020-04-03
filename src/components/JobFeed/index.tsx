import React from 'react';
import { useTrail, animated } from 'react-spring';
import { RootDiv, ExperienceDiv, TenureDiv, TenureDurationDiv, TenureNameDiv, SlashDiv } from './styles';
import { CAREER } from 'data/resume';
import { getTenureDurationString, isJob } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import { ReactSVG } from 'react-svg';
import underlineSvg from 'images/underline.svg';

function useTrailItems<T>(collection: T[]) {
    return useTrail(collection.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });
}

export default function JobFeed() {
    const outerTrail = useTrailItems(CAREER);

    return (
        <RootDiv>
            {outerTrail.map(({ opacity, x }, i) => {
                const careerPhase = CAREER[i],
                    { name, tenures } = careerPhase,
                    transform = x.interpolate((x) => `translateY(${-x}px)`);

                return (
                    <animated.div style={{ opacity, transform }} key={`phase-${name}`}>
                        {tenures.map((tenure) => {
                            const { company, experiences } = tenure,
                                innerTrail = useTrailItems(experiences);

                            return (
                                <TenureDiv key={`tenure-${company}`}>
                                    <TenureNameDiv>
                                        {company}
                                        <SlashDiv>
                                            <ReactSVG src={underlineSvg} />
                                        </SlashDiv>
                                    </TenureNameDiv>
                                    <TenureDurationDiv>{getTenureDurationString(tenure)}</TenureDurationDiv>
                                    {innerTrail.map(({ opacity, x }, i) => {
                                        const e = experiences[i],
                                            transform = x.interpolate((x) => `translateY(${-x}px)`);

                                        return (
                                            <animated.div style={{ opacity, transform }} key={`experience-${e.title}`}>
                                                <ExperienceDiv>
                                                    {isJob(e) ? <JobCard job={e} /> : <DegreeCard degree={e} />}
                                                </ExperienceDiv>
                                            </animated.div>
                                        );
                                    })}
                                </TenureDiv>
                            );
                        })}
                    </animated.div>
                );
            })}
        </RootDiv>
    );
}
