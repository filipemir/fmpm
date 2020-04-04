import React from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import useMeasure, { RectReadOnly } from 'react-use-measure';

import { activeTenurePanelCss, PhaseDiv, RootDiv, TenureDiv } from './styles';
import { RESUME } from 'data/resume';
import { CareerPhase, ResumeSection, Tenure } from 'models/experience';

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
    activeTenure?: Tenure;
    activeCareerPhase?: CareerPhase;
    onCareerPhaseClick?: (c: CareerPhase) => void;
    onTenureClick?: (t: Tenure) => void;
}

export default function CareerTimeline({
    activeSection,
    activeTenure,
    activeCareerPhase,
    onCareerPhaseClick,
    onTenureClick
}: CareerTimelineProps) {
    const [rootRef, rootRect] = useMeasure(),
        [activeItemRef, activeItemRect] = useMeasure(),
        activeTenurePanelSpring = useSpring(getActiveTenurePanelSpring({ rootRect, activeItemRect })),
        phases = RESUME[ResumeSection.EXPERIENCE],
        outerTrail = useTrail(phases.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={activeTenurePanelSpring} css={activeTenurePanelCss} />
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
                        <PhaseDiv active={isActive} onClick={() => onCareerPhaseClick && onCareerPhaseClick(phase)}>
                            {name}
                        </PhaseDiv>
                        {innerTrail.map((style, j) => {
                            const tenure = tenures[j],
                                isActive = tenure === activeTenure,
                                { company } = tenure;

                            return (
                                <animated.div style={style} key={`tenure-${company}`}>
                                    <TenureDiv
                                        active={isActive}
                                        onClick={() => onTenureClick && onTenureClick(tenure)}
                                        ref={isActive ? activeItemRef : undefined}
                                    >
                                        {company}
                                    </TenureDiv>
                                </animated.div>
                            );
                        })}
                    </animated.div>
                );
            })}
        </RootDiv>
    );
}
