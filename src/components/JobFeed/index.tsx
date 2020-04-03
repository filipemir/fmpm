import React, { useRef, useEffect, MutableRefObject } from 'react';
import { useTrail, animated } from 'react-spring';
import { RootDiv, ExperienceDiv, TenureDiv, TenureDurationDiv, TenureNameDiv, SlashDiv } from './styles';
import { CAREER } from 'data/resume';
import { getTenureDurationString, isJob } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import { ReactSVG } from 'react-svg';
import underlineSvg from 'images/underline.svg';
import { Tenure } from 'models/experience';

function useTrailItems<T>(collection: T[]) {
    return useTrail(collection.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });
}

export default function JobFeed({ activeTenure }: { activeTenure: Tenure }) {
    const outerTrail = useTrailItems(CAREER),
        activeTenureRef = useRef() as MutableRefObject<HTMLDivElement | null>;

    useEffect(() => {
        const el = activeTenureRef.current;
        el && el.scrollIntoView({ behavior: 'smooth' });
    }, [activeTenureRef.current]);

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
                                <TenureDiv
                                    key={`tenure-${company}`}
                                    ref={tenure === activeTenure ? activeTenureRef : undefined}
                                >
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
