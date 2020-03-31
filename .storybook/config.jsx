import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Global } from '@emotion/core';

import { Root, storybookGlobal } from './styles';
import globalCss from '../src/styles/global';
import '../src/styles/global.scss';

addDecorator((story) => (
    <Root>
        <Global styles={globalCss} />
        <Global styles={storybookGlobal} />
        {story()}
    </Root>
));

// Automatically import all files ending in stories.tsx from the components folder
export const req = require.context('../src/components', true, /.*stories\.tsx$/);

// Add global decorators:
addDecorator(withKnobs({ escapeHTML: false }));
addParameters({
    options: {
        theme: { brandTitle: 'FMPM Storybook', brandUrl: 'https://fmpm.dev' }
    }
});

// Gatsby's Link overrides:
global.___loader = { enqueue: () => {}, hovering: () => {} }; // Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.__PATH_PREFIX__ = ''; // Gatsby internal mocking to prevent unnecessary errors in storybook testing environment:
window.___navigate = (pathname) => {
    action('NavigateTo:')(pathname);
}; // This is to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook:

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
