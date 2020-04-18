import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectRowMobile from './index';
import { BPD } from 'data/projects';

storiesOf(`Projects|ProjectRow.Mobile`, module).add(`default`, () => {
    return <ProjectRowMobile project={BPD} />;
});
