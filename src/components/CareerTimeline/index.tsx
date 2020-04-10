import React, { RefCallback, ReactNode, useRef, MutableRefObject } from 'react';
import { animated, useSpring, useTrail, config } from 'react-spring';
import useMeasure, { RectReadOnly } from 'react-use-measure';

import { activeTenurePanelCss, RootDiv, SectionHeader, SectionItem } from './styles';
import { RESUME } from 'data/resume';
import { CareerPhase, ResumeItem, ResumeSection, Tenure } from 'models/experience';

function getActiveTenurePanelSpring({
    rootRef,
    activeItemRect
}: {
    rootRef?: MutableRefObject<HTMLDivElement | null>;
    activeItemRect: RectReadOnly;
}) {
    if (!rootRef || !rootRef.current) {
        return { top: 0, left: 0, opacity: 0 };
    }

    const rootRect = rootRef.current.getBoundingClientRect();

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

function getJobComponents({
    activeTenure,
    activeCareerPhase,
    onCareerPhaseClick,
    onTenureClick,
    activeItemRef
}: CareerTimelineProps & { activeItemRef: RefCallback<HTMLDivElement | null> }) {
    const phases = RESUME[ResumeSection.EXPERIENCE],
        components: ReactNode[] = [];

    phases.forEach((phase) => {
        const { name, tenures } = phase,
            isActive = phase === activeCareerPhase;

        components.push(
            <SectionHeader active={isActive} onClick={() => onCareerPhaseClick(phase)}>
                {name}
            </SectionHeader>
        );

        tenures.forEach((tenure) => {
            const isActive = tenure === activeTenure,
                { company } = tenure;

            components.push(
                <SectionItem
                    active={isActive}
                    onClick={() => onTenureClick(tenure)}
                    ref={isActive ? activeItemRef : undefined}
                >
                    {company}
                </SectionItem>
            );
        });
    });

    return components;
}

function getEducationComponents({
    activeSection,
    activeItem,
    onSectionClick,
    onItemClick,
    activeItemRef
}: CareerTimelineProps & { activeItemRef: RefCallback<HTMLDivElement | null> }) {
    const section = RESUME[ResumeSection.EDUCATION],
        isActive = activeSection === ResumeSection.EDUCATION,
        components = [
            <SectionHeader active={isActive} onClick={() => onSectionClick(ResumeSection.EDUCATION)} key={'education'}>
                {ResumeSection.EDUCATION}
            </SectionHeader>
        ];

    section.forEach((degree) => {
        const isActive = degree === activeItem,
            { name } = degree;
        components.push(
            <SectionItem
                active={isActive}
                onClick={() => onItemClick(degree)}
                ref={isActive ? activeItemRef : undefined}
                key={`degree-${name}`}
            >
                {name}
            </SectionItem>
        );
    });

    return components;
}

export default function CareerTimeline(props: CareerTimelineProps) {
    const rootRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        [activeItemRef, activeItemRect] = useMeasure(),
        activeTenurePanelSpring = useSpring(getActiveTenurePanelSpring({ rootRef, activeItemRect })),
        components = [
            ...getJobComponents({ ...props, activeItemRef }),
            ...getEducationComponents({ ...props, activeItemRef })
        ],
        trail = useTrail(components.length, {
            opacity: 1,
            x: 0,
            from: { opacity: 0, x: 20 },
            config: { ...config.default, tension: 500, friction: 40 }
        });

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={activeTenurePanelSpring} css={activeTenurePanelCss} />

            {trail.map(({ opacity, x }, i) => {
                const component = components[i];
                return (
                    <animated.div
                        style={{ opacity, transform: x.interpolate((x) => `translateX(${-x}px)`) }}
                        key={`component-${i}`}
                    >
                        {component}
                    </animated.div>
                );
            })}
        </RootDiv>
    );
}
