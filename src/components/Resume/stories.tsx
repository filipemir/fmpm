import React from 'react';
import { storiesOf } from '@storybook/react';
import Resume from './index';

storiesOf(`Resume`, module).add(`default`, () => {
    return (
        <div style={{ height: '75vh' }}>
            <Resume />
        </div>
    );
});
