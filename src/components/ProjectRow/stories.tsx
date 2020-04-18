import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import ProjectRow from './index';
import { BPD } from 'data/projects';

storiesOf(`Projects|ProjectRow`, module).add(`default`, () => {
    return <ProjectRow project={BPD} leftAlignedContent={boolean('Align content left?', false)} />;
});
