import React, { useRef, useState, useEffect, MutableRefObject } from 'react';
import {
    useTrail,
    animated,
    useSpring,
    config,
    OpaqueInterpolation
} from 'react-spring';
import { Waypoint } from 'react-waypoint';
import throttle from 'lodash/throttle';
import parse from 'react-html-parser';

import {
    RootDiv,
    ResumeItemDiv,
    ResumeSectionDiv,
    DurationSpan,
    TenureDescription,
    ResumeSectionNameDiv,
    SlashDiv,
    Logo
} from './styles';
import { RESUME } from 'data/resume';
import { getTenureDurationString } from 'utils/experience';
import JobCard from 'components/JobCard';
import DegreeCard from 'components/DegreeCard';
import Underline from 'images/underline.svg';
import {
    CareerPhase,
    ResumeItem,
    ResumeSection,
    Tenure
} from 'models/experience';

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
        spring = useSpring({
            opacity: 1,
            from: { opacity: 0 },
            config: config.slow
        }),
        [scrollIntoView, setScrollIntoView] = useState(false),
        throttledSetTenure =
            setActiveTenure &&
            throttle(setActiveTenure, 100, { trailing: true });

    return (
        <animated.div style={spring}>
            {careerPhases.map((phase) => {
                const { name, tenures } = phase;

                return (
                    <div key={`phase-${name}`}>
                        {tenures.map((tenure) => {
                            const {
                                    company,
                                    jobs,
                                    logo,
                                    description,
                                    url
                                } = tenure,
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                innerTrail = useTrail(jobs.length, {
                                    opacity: 1,
                                    x: 0,
                                    from: { opacity: 1, x: 20 },
                                    config: config.wobbly,
                                    onRest: () => setScrollIntoView(true)
                                });

                            return (
                                <ResumeSectionDiv
                                    key={`tenure-${company}`}
                                    ref={
                                        tenure === activeTenure
                                            ? activeItemRef
                                            : undefined
                                    }
                                >
                                    <a
                                        href={url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <ResumeSectionNameDiv withLogo={!!logo}>
                                            {company}
                                            {logo && (
                                                <Logo
                                                    src={logo.src}
                                                    alt={company}
                                                />
                                            )}
                                            <SlashDiv>
                                                <Underline />
                                            </SlashDiv>
                                        </ResumeSectionNameDiv>
                                    </a>
                                    <DurationSpan>
                                        {getTenureDurationString(tenure)}
                                    </DurationSpan>
                                    {description && (
                                        <TenureDescription>
                                            {parse(description)}
                                        </TenureDescription>
                                    )}
                                    {innerTrail.map(({ opacity, x }, i) => {
                                        const e = jobs[i],
                                            onEnter = () =>
                                                scrollIntoView &&
                                                throttledSetTenure &&
                                                throttledSetTenure(tenure),
                                            transform = (x as OpaqueInterpolation<number>).interpolate(
                                                (x) => `translateX(${-x}px)`
                                            );

                                        return (
                                            <animated.div
                                                style={{
                                                    opacity,
                                                    transform
                                                }}
                                                key={`experience-${e.title}`}
                                            >
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
        throttledSetItem =
            setActiveItem && throttle(setActiveItem, 100, { trailing: true });

    return (
        <animated.div style={spring}>
            <ResumeSectionDiv>
                <ResumeSectionNameDiv withLogo={false}>
                    Education
                    <SlashDiv>
                        <Underline />
                    </SlashDiv>
                </ResumeSectionNameDiv>
                {degrees.map((degree) => {
                    const { name } = degree,
                        onEnter = () =>
                            throttledSetItem && throttledSetItem(degree);

                    return (
                        <div key={`degree-${name}`}>
                            <Waypoint onEnter={onEnter} />
                            <ResumeItemDiv
                                ref={
                                    degree === activeItem
                                        ? activeItemRef
                                        : undefined
                                }
                            >
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
        [scrollIntoView, setScrollIntoView] = useState<boolean>(false),
        rootRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        activeItemRef = useRef() as MutableRefObject<HTMLDivElement | null>;

    useEffect(() => {
        // Prevent scrolling into view upon the first render so that page
        // doesn't snap to the first active resume item
        if (!scrollIntoView) {
            activeItem && setScrollIntoView(true);
            return;
        }

        const el = activeItemRef.current;
        el && el.scrollIntoView({ behavior: 'smooth' });
    }, [scrollIntoView, activeItem, activeItemRef]);

    return (
        <RootDiv ref={rootRef}>
            <ExperienceSection
                {...props}
                rootRef={rootRef}
                activeItemRef={activeItemRef}
            />
            <EducationSection
                {...props}
                rootRef={rootRef}
                activeItemRef={activeItemRef}
            />
        </RootDiv>
    );
}
