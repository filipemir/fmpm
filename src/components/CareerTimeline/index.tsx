import React, { useState, ReactElement } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure, { RectReadOnly } from 'react-use-measure';

import { RootDiv, PhaseDiv, JobDiv, activeJobPanelCss } from './styles';

interface CareerPhase {
    name: string;
    jobs: string[];
}

const PHASES = [
    {
        name: 'Engineering',
        jobs: ['SmarterTravel', 'Launch Academy']
    },
    {
        name: 'Consulting',
        jobs: ['Cornerstone Research']
    },
    {
        name: "Other Things I've Done",
        jobs: [
            'Planet Money',
            'Tufts University',
            'Advent School',
            'Rebuilding Together',
            'IRD',
            'Santa Clara University'
        ]
    }
];

function getActiveJobPanelSpring({ rootRect, activeJobRect }: { rootRect: RectReadOnly; activeJobRect: RectReadOnly }) {
    const hide = rootRect.left === 0 || activeJobRect.left === 0;

    if (hide) {
        return { top: 0, opacity: 0 };
    }

    return { top: activeJobRect.top - rootRect.top, left: 0, opacity: 1 };
}

export default function CareerTimeline() {
    const [activePhase, setActivePhase] = useState(PHASES[0]),
        [activeJob, setActiveJob] = useState(activePhase.jobs[0]),
        changeActiveJob = ({ phase, job }: { phase: CareerPhase; job?: string }) => {
            setActivePhase(phase);
            setActiveJob(job || phase.jobs[0]);
        },
        TimelineItems: ReactElement[] = [],
        [rootRef, rootRect] = useMeasure(),
        [activeJobRef, activeJobRect] = useMeasure(),
        activeJobPanelSpring = useSpring(getActiveJobPanelSpring({ rootRect, activeJobRect }));

    PHASES.forEach((phase) => {
        const { name, jobs } = phase;

        TimelineItems.push(
            <PhaseDiv active={phase === activePhase} onClick={() => changeActiveJob({ phase })} key={`phase-${name}`}>
                {name}
            </PhaseDiv>
        );

        jobs.forEach((job) => {
            TimelineItems.push(
                <JobDiv
                    active={job === activeJob}
                    onClick={() => changeActiveJob({ phase, job })}
                    key={`job-${job}`}
                    ref={job === activeJob ? activeJobRef : undefined}
                >
                    {job}
                </JobDiv>
            );
        });
    });

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={activeJobPanelSpring} css={activeJobPanelCss} />
            {TimelineItems}
        </RootDiv>
    );
}
