import React, { useRef, useEffect, MutableRefObject } from 'react';
import { useTrail, animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import throttle from 'lodash/throttle';

import { RootDiv, ResumeItemDiv, ResumeSectionDiv, DurationSpan, ResumeSectionNameDiv, SlashDiv } from './styles';
import { RESUME } from 'data/resume';
import { getTenureDurationString } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import { ReactSVG } from 'react-svg';
import underlineSvg from 'images/underline.svg';
import { CareerPhase, ResumeItem, ResumeSection, Tenure } from 'models/experience';

function useTrailItems<T>(collection: T[]) {
    return useTrail(collection.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });
}

interface ResumeContentProps {
    activeSection: ResumeSection;
    activeCareerPhase?: CareerPhase;
    activeItem?: ResumeItem;
    activeTenure?: Tenure;
    setActiveTenure?: (tenure: Tenure) => void;
    setActiveItem?: (item: ResumeItem) => void;
}

function ExperienceSection({
    activeTenure,
    setActiveTenure,
    activeItemRef
}: ResumeContentProps & {
    rootRef: MutableRefObject<HTMLDivElement | null>;
    activeItemRef: MutableRefObject<HTMLDivElement | null>;
}) {
    const careerPhases = RESUME[ResumeSection.EXPERIENCE],
        spring = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow }),
        throttledSetTenure = setActiveTenure && throttle(setActiveTenure, 100, { trailing: true });

    return (
        <animated.div style={spring}>
            {careerPhases.map((phase) => {
                const { name, tenures } = phase;

                return (
                    <div key={`phase-${name}`}>
                        {tenures.map((tenure) => {
                            const { company, jobs } = tenure,
                                innerTrail = useTrailItems(jobs);

                            return (
                                <ResumeSectionDiv
                                    key={`tenure-${company}`}
                                    ref={tenure === activeTenure ? activeItemRef : undefined}
                                >
                                    <ResumeSectionNameDiv>
                                        {company}
                                        <SlashDiv>
                                            <ReactSVG src={underlineSvg} />
                                        </SlashDiv>
                                    </ResumeSectionNameDiv>
                                    <DurationSpan>{getTenureDurationString(tenure)}</DurationSpan>
                                    {innerTrail.map(({ opacity, x }, i) => {
                                        const e = jobs[i],
                                            transform = x.interpolate((x) => `translateY(${-x}px)`),
                                            onEnter = () => throttledSetTenure && throttledSetTenure(tenure);

                                        return (
                                            <animated.div style={{ opacity, transform }} key={`experience-${e.title}`}>
                                                <Waypoint onEnter={onEnter} />
                                                <ResumeItemDiv>
                                                    <JobCard job={e} />
                                                </ResumeItemDiv>
                                            </animated.div>
                                        );
                                    })}
                                </ResumeSectionDiv>
                            );
                        })}
                    </div>
                );
            })}
        </animated.div>
    );
}

function EducationSection({
    activeItem,
    activeItemRef,
    setActiveItem
}: ResumeContentProps & {
    rootRef: MutableRefObject<HTMLDivElement | null>;
    activeItemRef: MutableRefObject<HTMLDivElement | null>;
}) {
    const degrees = RESUME[ResumeSection.EDUCATION],
        spring = useSpring({ opacity: 1, from: { opacity: 0 } }),
        throttledSetItem = setActiveItem && throttle(setActiveItem, 100, { trailing: true });

    return (
        <animated.div style={spring}>
            <ResumeSectionDiv>
                <ResumeSectionNameDiv>
                    Education
                    <SlashDiv>
                        <ReactSVG src={underlineSvg} />
                    </SlashDiv>
                </ResumeSectionNameDiv>
                {degrees.map((degree) => {
                    const { name } = degree,
                        onEnter = () => throttledSetItem && throttledSetItem(degree);

                    return (
                        <div key={`degree-${name}`}>
                            <Waypoint onEnter={onEnter} />
                            <ResumeItemDiv ref={degree === activeItem ? activeItemRef : undefined}>
                                <DegreeCard degree={degree} />
                            </ResumeItemDiv>
                        </div>
                    );
                })}
            </ResumeSectionDiv>
        </animated.div>
    );
}

export default function ResumeContent(props: ResumeContentProps) {
    const { activeItem } = props,
        rootRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        activeItemRef = useRef() as MutableRefObject<HTMLDivElement | null>;

    useEffect(() => {
        const el = activeItemRef.current;
        el && el.scrollIntoView({ behavior: 'smooth' });
    }, [activeItem, activeItemRef]);

    return (
        <RootDiv ref={rootRef}>
            <ExperienceSection {...props} rootRef={rootRef} activeItemRef={activeItemRef} />
            <EducationSection {...props} rootRef={rootRef} activeItemRef={activeItemRef} />
        </RootDiv>
    );
}
