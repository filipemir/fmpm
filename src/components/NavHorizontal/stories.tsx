import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import NavHorizontal from './index';
import Page from 'models/page';

function NavHorizontalWithState() {
    const [page, setPage] = useState(Page.ABOUT);

    return <NavHorizontal currentPage={page} onPageClick={setPage} />;
}

storiesOf(`NavHorizontal`, module).add(`default`, () => {
    return <NavHorizontalWithState />;
});
