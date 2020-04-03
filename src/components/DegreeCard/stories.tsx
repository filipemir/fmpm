import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import DegreeCard from './index';
import { Degree } from 'models/experience';
import { CAREER } from 'data/resume';
import { isJob } from 'utils/experience';
import { launchAcademy } from 'data/degrees';

const degrees: { [key: string]: Degree } = {};

CAREER.forEach(({ tenures }) => {
    tenures.forEach((tenure) => {
        tenure.experiences.forEach((e) => {
            !isJob(e) && (degrees[e.title] = e);
        });
    });
});

storiesOf(`Resume|DegreeCard`, module).add(`default`, () => {
    const degree = select('Degree', Object.keys(degrees), launchAcademy.title);
    return <DegreeCard degree={degrees[degree]} />;
});
