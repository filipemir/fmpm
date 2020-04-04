import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import JobCard from './index';
import { Job } from 'models/experience';
import { stSoftwareEngineer } from 'data/jobs';
import { getAllJobs } from 'utils/experience';

const jobs: { [key: string]: Job } = {};

getAllJobs().forEach((j) => {
    jobs[j.title] = j;
});

storiesOf(`Resume|JobCard`, module).add(`default`, () => {
    const job = select('Job', Object.keys(jobs), stSoftwareEngineer.title);
    return <JobCard job={jobs[job]} />;
});
