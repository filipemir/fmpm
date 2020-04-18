import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import ProjectRowDesktop from './index';
import { BPD } from 'data/projects';

storiesOf(`Projects|ProjectRow.Desktop`, module).add(`default`, () => {
    return <ProjectRowDesktop project={BPD} leftAlignedContent={boolean('Align content left?', false)} />;
});
