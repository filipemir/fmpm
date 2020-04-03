import React from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import useMeasure, { RectReadOnly } from 'react-use-measure';

import { RootDiv, PhaseDiv, TenureDiv, activeTenurePanelCss } from './styles';
import { CAREER } from 'data/resume';
import { CareerPhase, Tenure } from 'models/experience';

function getActiveTenurePanelSpring({
    rootRect,
    activeTenureRect
}: {
    rootRect: RectReadOnly;
    activeTenureRect: RectReadOnly;
}) {
    return {
        top: activeTenureRect.top - rootRect.top,
        left: 0,
        opacity: 1,
        from: { top: 0, left: 0, opacity: 0 }
    };
}

interface CareerTimelineProps {
    activePhase: CareerPhase;
    activeTenure: Tenure;
    onTenureChange: (e: Tenure) => void;
}

export default function CareerTimeline({ activePhase, activeTenure, onTenureChange }: CareerTimelineProps) {
    const [rootRef, rootRect] = useMeasure(),
        [activeTenureRef, activeTenureRect] = useMeasure(),
        activeTenurePanelSpring = useSpring(getActiveTenurePanelSpring({ rootRect, activeTenureRect })),
        phasesTrail = useTrail(CAREER.length, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={activeTenurePanelSpring} css={activeTenurePanelCss} />
            {phasesTrail.map(({ opacity, x }, i) => {
                const phase = CAREER[i],
                    { name, tenures } = phase,
                    tenuresTrail = useTrail(tenures.length, { opacity: 1, from: { opacity: 0 } });

                return (
                    <animated.div
                        style={{ opacity, transform: x.interpolate((x) => `translateX(${-x}px)`) }}
                        key={`phase-${name}`}
                    >
                        <PhaseDiv active={phase === activePhase} onClick={() => onTenureChange(phase.tenures[0])}>
                            {name}
                        </PhaseDiv>
                        {tenuresTrail.map((style, i) => {
                            const tenure = tenures[i],
                                isActive = tenure === activeTenure;
                            return (
                                <animated.div style={style} key={`tenure-${tenure.company}`}>
                                    <TenureDiv
                                        active={isActive}
                                        onClick={() => onTenureChange(tenure)}
                                        ref={isActive ? activeTenureRef : undefined}
                                    >
                                        {tenure.company}
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
