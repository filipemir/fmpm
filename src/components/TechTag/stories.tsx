import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import TechTag from './index';
import { Tech } from 'models/tech';

storiesOf(`TechTag`, module).add(`default`, () => {
    const tech = select('Technology', Object.values(Tech), Tech.TS);
    return <TechTag technology={tech} />;
});
