import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import ProjectRow from './index';
import { BPD } from 'data/projects';

storiesOf(`ProjectRow`, module).add(`default`, () => {
    return <ProjectRow project={BPD} />;
});
