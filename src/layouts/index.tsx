import React, { useState, ReactNode } from 'react';
import { Global } from '@emotion/core';
import globalCss from 'styles/global';
import 'styles/global.scss';
import { LayoutRoot, NavBarWrapper } from './styles';
import NavBar from 'components/NavBar';

import Transition from './transition';
import { getPage } from 'utils/location';

interface LayoutProps {
    children: ReactNode;
    location: Location;
}

export default function Layout({ children, location }: LayoutProps) {
    const [page, setPage] = useState(getPage(location));

    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBarWrapper>
                <NavBar currentPage={page} onPageClick={setPage} />
            </NavBarWrapper>
            <Transition location={location}>{children}</Transition>
        </LayoutRoot>
    );
}
