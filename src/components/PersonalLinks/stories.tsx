import React from 'react';
import { storiesOf } from '@storybook/react';
import PersonalLinks from './index';

storiesOf(`PersonalLinks`, module).add(`default`, () => {
    return <PersonalLinks />;
});
