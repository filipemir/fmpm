import React from 'react';
import { storiesOf } from '@storybook/react';
import JobFeed from './index';

storiesOf(`JobFeed`, module).add(`default`, () => {
    return (
        <div style={{ height: '75vh' }}>
            <JobFeed />
        </div>
    );
});
