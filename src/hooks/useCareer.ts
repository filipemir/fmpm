import { useState } from 'react';
import hash from 'object-hash';

import { CAREER } from 'data/resume';
import { CareerPhase, Experience, Tenure } from 'models/experience';

const experiences: { [hash: string]: { phase: CareerPhase; tenure: Tenure } } = {};

const getExperienceKey = (e: Experience) => hash(e),
    mostRecent = CAREER[0].tenures[0].experiences[0];

CAREER.forEach((phase) => {
    phase.tenures.forEach((tenure) => {
        tenure.experiences.forEach((e) => {
            experiences[getExperienceKey(e)] = { phase, tenure };
        });
    });
});

export default function useCareer() {
    const [experience, setExperience] = useState(mostRecent),
        key = getExperienceKey(experience),
        { phase, tenure } = experiences[key];

    return { experience, tenure, phase, setExperience };
}
