import React, { useRef, useEffect, MutableRefObject } from 'react';
import { useTrail, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import throttle from 'lodash/throttle';

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

export default function JobFeed({
    activeTenure,
    setActiveTenure
}: {
    activeTenure?: Tenure;
    setActiveTenure?: (tenure: Tenure) => void;
}) {
    const outerTrail = useTrailItems(CAREER),
        rootRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        activeTenureRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        throttledSetTenure = setActiveTenure && throttle(setActiveTenure, 100, { trailing: true });

    useEffect(() => {
        const el = activeTenureRef.current;
        el && el.scrollIntoView({ behavior: 'smooth' });
    }, [activeTenure, activeTenureRef]);

    return (
        <RootDiv ref={rootRef}>
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
                                            transform = x.interpolate((x) => `translateY(${-x}px)`),
                                            onEnter = () => throttledSetTenure && throttledSetTenure(tenure);

                                        return (
                                            <animated.div style={{ opacity, transform }} key={`experience-${e.title}`}>
                                                <Waypoint onEnter={onEnter} />
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
