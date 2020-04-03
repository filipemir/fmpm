import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import JobCard from './index';
import { Job } from 'models/experience';
import { stSoftwareEngineer } from 'data/jobs';
import { CAREER } from 'data/resume';
import { isJob } from 'utils/experience';

const jobs: { [key: string]: Job } = {};

CAREER.forEach(({ tenures }) => {
    tenures.forEach((tenure) => {
        tenure.experiences.forEach((e) => {
            isJob(e) && (jobs[e.title] = e);
        });
    });
});

storiesOf(`Resume|JobCard`, module).add(`default`, () => {
    const job = select('Job', Object.keys(jobs), stSoftwareEngineer.title);
    return <JobCard job={jobs[job]} />;
});
