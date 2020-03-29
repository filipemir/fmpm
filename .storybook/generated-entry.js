import { configure } from '@storybook/react';
module._StorybookPreserveDecorators = true;

configure(
    [
        require.context(
            '../stories',
            true,
            /^\.\/(?:(?:(?!\.)(?:(?:(?!(?:|\/)\.).)*?)\/)?(?!\.)(?=.)[^\/]*?\.stories\.js\/?)$/
        )
    ],
    module
);
