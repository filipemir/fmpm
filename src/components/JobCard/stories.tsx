import React from 'react';
import { storiesOf } from '@storybook/react';
import Job from './index';
import { JOBS } from 'data/jobs';

storiesOf(`JobCard`, module).add(`default`, () => {
    return <Job job={JOBS[0]} />;
});
