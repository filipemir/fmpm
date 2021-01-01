import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import DogearedTile from './index';

storiesOf(`DogearedTile`, module).add(`default`, () => {
    return (
        <DogearedTile onClick={action('clicked')} height={text('Height', '')} width={text('Width', '')}>
            <h1>a header</h1>
            <div>a div</div>
        </DogearedTile>
    );
});
