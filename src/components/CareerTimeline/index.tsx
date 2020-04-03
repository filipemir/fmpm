import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
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
    const hide = rootRect.left === 0 || activeTenureRect.left === 0;

    if (hide) {
        return { top: 0, opacity: 0 };
    }

    return { top: activeTenureRect.top - rootRect.top, left: 0, opacity: 1 };
}

export default function CareerTimeline() {
    const [activePhase, setActivePhase] = useState(CAREER[0]),
        [activeTenure, setActiveTenure] = useState(activePhase.tenures[0]),
        changeActiveTenure = ({ phase, tenure }: { phase: CareerPhase; tenure?: Tenure }) => {
            console.log(phase);
            setActivePhase(phase);
            setActiveTenure(tenure || phase.tenures[0]);
        },
        [rootRef, rootRect] = useMeasure(),
        [activeTenureRef, activeTenureRect] = useMeasure(),
        activeTenurePanelSpring = useSpring(getActiveTenurePanelSpring({ rootRect, activeTenureRect }));

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={activeTenurePanelSpring} css={activeTenurePanelCss} />
            {CAREER.map((phase) => {
                const { name, tenures } = phase;

                return (
                    <React.Fragment key={`phase-${name}`}>
                        <PhaseDiv active={phase === activePhase} onClick={() => changeActiveTenure({ phase })}>
                            {name}
                        </PhaseDiv>
                        {tenures.map((tenure) => {
                            const isActive = tenure === activeTenure;
                            return (
                                <TenureDiv
                                    active={isActive}
                                    onClick={() => changeActiveTenure({ phase, tenure })}
                                    key={`tenure-${tenure.company}`}
                                    ref={isActive ? activeTenureRef : undefined}
                                >
                                    {tenure.company}
                                </TenureDiv>
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </RootDiv>
    );
}
