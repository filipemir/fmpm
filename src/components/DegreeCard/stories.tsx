import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import DegreeCard from './index';
import { Degree, Job } from 'models/experience';
import { RESUME } from 'data/resume';
import { isJob } from 'utils/experience';
import { tuftsDegree } from 'data/degrees';

const degrees: { [key: string]: Degree } = {};

RESUME.forEach(({ experiences }: { experiences: (Degree | Job)[] }) => {
    experiences.forEach((e) => !isJob(e) && (degrees[e.title] = e));
});

storiesOf(`DegreeCard`, module).add(`default`, () => {
    const degree = select('Degree', Object.keys(degrees), tuftsDegree.title);
    return <DegreeCard degree={degrees[degree]} />;
});
