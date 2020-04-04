import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JobFeed from './index';

storiesOf(`Resume|JobFeed`, module).add(`default`, () => {
    return (
        <div style={{ height: '75vh' }}>
            <JobFeed setActiveTenure={action('Set tenure')} />
        </div>
    );
});
