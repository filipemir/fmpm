import React, { useState, ReactElement } from 'react';

import { RootDiv, PhaseDiv, JobDiv } from './styles';

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

export default function CareerTimeline() {
    const [activePhase, setActivePhase] = useState(PHASES[0]),
        [activeJob, setActiveJob] = useState(activePhase.jobs[0]),
        changeActiveJob = ({
            phase,
            job
        }: {
            phase: CareerPhase,
            job?: string
        }) => {
            setActivePhase(phase);
            setActiveJob(job || phase.jobs[0]);
        },
        TimelineItems: ReactElement[] = [];

    PHASES.forEach((phase) => {
        const { name, jobs } = phase;

        TimelineItems.push(
            <PhaseDiv
                active={phase === activePhase}
                onClick={() => changeActiveJob({ phase })}
                key={`phase-${name}`}
            >
                {name}
            </PhaseDiv>
        );

        jobs.forEach((job) => {
            TimelineItems.push(
                <JobDiv
                    active={job === activeJob}
                    onClick={() => changeActiveJob({ phase, job })}
                    key={`job-${job}`}
                >
                    {job}
                </JobDiv>
            );
        });
    });

    return <RootDiv>{TimelineItems}</RootDiv>;
}
