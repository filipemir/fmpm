import React, { RefCallback } from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import useMeasure, { RectReadOnly } from 'react-use-measure';

import { activeTenurePanelCss, RootDiv, SectionHeader, SectionItem } from './styles';
import { RESUME } from 'data/resume';
import { CareerPhase, ResumeItem, ResumeSection, Tenure } from 'models/experience';

function getActiveTenurePanelSpring({
    rootRect,
    activeItemRect
}: {
    rootRect: RectReadOnly;
    activeItemRect: RectReadOnly;
}) {
    return {
        top: activeItemRect.top - rootRect.top,
        left: 0,
        opacity: 1,
        from: { top: 0, left: 0, opacity: 0 }
    };
}

interface CareerTimelineProps {
    activeSection: ResumeSection;
    activeItem: ResumeItem;
    activeTenure?: Tenure;
    activeCareerPhase?: CareerPhase;
    onCareerPhaseClick: (c: CareerPhase) => void;
    onTenureClick: (t: Tenure) => void;
    onItemClick: (i: ResumeItem) => void;
    onSectionClick: (s: ResumeSection) => void;
}

function ExperienceSection({
    activeTenure,
    activeCareerPhase,
    onCareerPhaseClick,
    onTenureClick,
    activeItemRef
}: CareerTimelineProps & { activeItemRef: RefCallback<HTMLDivElement | null> }) {
    const phases = RESUME[ResumeSection.EXPERIENCE],
        outerTrail = useTrail(phases.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

    return (
        <>
            {outerTrail.map(({ opacity, x }, i) => {
                const phase = phases[i],
                    { name, tenures } = phase,
                    isActive = phase === activeCareerPhase,
                    innerTrail = useTrail(tenures.length, { opacity: 1, from: { opacity: 0 } });

                return (
                    <animated.div
                        style={{ opacity, transform: x.interpolate((x) => `translateX(${-x}px)`) }}
                        key={`section-${name}`}
                    >
                        <SectionHeader active={isActive} onClick={() => onCareerPhaseClick(phase)}>
                            {name}
                        </SectionHeader>
                        {innerTrail.map((style, j) => {
                            const tenure = tenures[j],
                                isActive = tenure === activeTenure,
                                { company } = tenure;

                            return (
                                <animated.div style={style} key={`tenure-${company}`}>
                                    <SectionItem
                                        active={isActive}
                                        onClick={() => onTenureClick(tenure)}
                                        ref={isActive ? activeItemRef : undefined}
                                    >
                                        {company}
                                    </SectionItem>
                                </animated.div>
                            );
                        })}
                    </animated.div>
                );
            })}
        </>
    );
}

function EducationSection({
    activeSection,
    activeItem,
    onSectionClick,
    onItemClick,
    activeItemRef
}: CareerTimelineProps & { activeItemRef: RefCallback<HTMLDivElement | null> }) {
    const section = RESUME[ResumeSection.EDUCATION],
        isActive = activeSection === ResumeSection.EDUCATION,
        trail = useTrail(section.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

    return (
        <>
            <SectionHeader active={isActive} onClick={() => onSectionClick(ResumeSection.EDUCATION)}>
                {ResumeSection.EDUCATION}
            </SectionHeader>
            {trail.map(({ opacity, x }, i) => {
                const degree = section[i],
                    isActive = degree === activeItem,
                    { name } = degree;
                return (
                    <animated.div
                        style={{ opacity, transform: x.interpolate((x) => `translateX(${-x}px)`) }}
                        key={`degree-${name}`}
                    >
                        <SectionItem
                            active={isActive}
                            onClick={() => onItemClick(degree)}
                            ref={isActive ? activeItemRef : undefined}
                        >
                            {name}
                        </SectionItem>
                    </animated.div>
                );
            })}
        </>
    );
}

export default function CareerTimeline(props: CareerTimelineProps) {
    const [rootRef, rootRect] = useMeasure(),
        [activeItemRef, activeItemRect] = useMeasure(),
        activeTenurePanelSpring = useSpring(getActiveTenurePanelSpring({ rootRect, activeItemRect })),
        components = [
            <ExperienceSection {...props} activeItemRef={activeItemRef} />,
            <EducationSection {...props} activeItemRef={activeItemRef} />
        ],
        trail = useTrail(components.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={activeTenurePanelSpring} css={activeTenurePanelCss} />

            {trail.map(({ opacity, x }, i) => {
                const Component = components[i];
                return (
                    <animated.div
                        style={{ opacity, transform: x.interpolate((x) => `translateX(${-x}px)`) }}
                        key={`degree-${name}`}
                    >
                        {Component}
                    </animated.div>
                );
            })}
        </RootDiv>
    );
}
