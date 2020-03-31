import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from './index';
import Page from 'models/page';

function NavBarWithState() {
    const [page, setPage] = useState(Page.ABOUT);
    return <NavBar currentPage={page} onPageClick={setPage} />;
}

storiesOf(`NavBar`, module).add(`default`, () => {
    return <NavBarWithState />;
});
