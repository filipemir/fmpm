import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import Header from './index';

storiesOf(`Header`, module).add(`default`, () => {
    const headerText = text('Header text', 'experience'),
        emoji = text('Emoji', '👨‍💻'),
        fontSize = number('Font size', 40);
    return (
        <h1 style={{ fontSize, margin: 0 }}>
            <Header text={headerText} emoji={emoji} />
        </h1>
    );
});
