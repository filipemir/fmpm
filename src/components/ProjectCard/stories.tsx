import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './index';
import { BPD } from 'data/projects';

storiesOf(`ProjectCard`, module).add(`default`, () => {
    return <ProjectCard project={BPD} />;
});
