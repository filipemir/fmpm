import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import TechTag from './index';
import { Technology } from 'models/tech';

storiesOf(`TechTag`, module).add(`default`, () => {
    const tech = select('Technology', Object.values(Technology), Technology.TS);
    return <TechTag technology={tech} />;
});
