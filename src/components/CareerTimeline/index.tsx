import React, { useState } from 'react';
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
        };

    return (
        <RootDiv>
            {PHASES.map((phase) => {
                const { name, jobs } = phase;
                return (
                    <>
                        <PhaseDiv
                            active={phase === activePhase}
                            onClick={() => changeActiveJob({ phase })}
                        >
                            {name}
                        </PhaseDiv>
                        {jobs.map((job) => (
                            <JobDiv
                                active={job === activeJob}
                                onClick={() => changeActiveJob({ phase, job })}
                            >
                                {job}
                            </JobDiv>
                        ))}
                    </>
                );
            })}
        </RootDiv>
    );
}
