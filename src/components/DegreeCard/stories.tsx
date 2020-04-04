import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import DegreeCard from './index';
import { Degree } from 'models/experience';
import { getAllDegrees } from 'utils/experience';
import { scuDegree } from 'data/degrees';

const degrees: { [key: string]: Degree } = {};

getAllDegrees().forEach((d) => {
    degrees[d.name] = d;
});

storiesOf(`Resume|DegreeCard`, module).add(`default`, () => {
    const degree = select('Degree', Object.keys(degrees), scuDegree.name);
    return <DegreeCard degree={degrees[degree]} />;
});
