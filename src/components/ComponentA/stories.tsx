import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ComponentA from './index';

storiesOf(`Test Components/ComponentA`, module).add(`default`, () => (
    <ComponentA isWelcome={boolean('Is welcome?', true)} />
));
