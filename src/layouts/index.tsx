import React, { useState, ReactNode } from 'react';
import { Global } from '@emotion/core';
import globalCss from 'styles/global';
import 'styles/global.scss';
import { LayoutRoot } from './styles';
import NavBar from 'components/NavBar';
import Page from 'models/page';

import Transition from './transition';

interface LayoutProps {
    children: ReactNode;
    location: Location;
}

export default function Layout({ children, location }: LayoutProps) {
    const [page, setPage] = useState(Page.ABOUT);

    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBar currentPage={page} onPageClick={setPage} />
            <Transition location={location}>{children}</Transition>
        </LayoutRoot>
    );
}
