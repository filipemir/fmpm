import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import JobCard from './index';
import { Degree, Job } from 'models/experience';
import { stSoftwareEngineer } from 'data/jobs';
import { RESUME } from 'data/resume';
import { isJob } from 'utils/experience';

const jobs: { [key: string]: Job } = {};

RESUME.forEach(({ experiences }: { experiences: (Degree | Job)[] }) => {
    experiences.forEach((e) => isJob(e) && (jobs[e.title] = e));
});

storiesOf(`JobCard`, module).add(`default`, () => {
    const job = select('Job', Object.keys(jobs), stSoftwareEngineer.title);
    return <JobCard job={jobs[job]} />;
});
