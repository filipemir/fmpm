import React, { useState, ReactNode } from 'react';
import { Global } from '@emotion/core';
import globalCss from 'styles/global';
import 'styles/global.scss';
import { LayoutRoot, NavBarWrapper } from './styles';
import NavBar from 'components/NavBar';
import Transition from './transition';
import { getPage } from 'utils/location';
import Page from 'models/page';
import Footer from 'components/Footer';

interface LayoutProps {
    children: ReactNode;
    location: Location;
}

export default function GlobalLayout({ children, location }: LayoutProps) {
    const [page, setPage] = useState(getPage(location)),
        onPageClick = (page: Page) => {
            setPage(page);
        };

    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBarWrapper>
                <NavBar currentPage={page} onPageClick={onPageClick} />
            </NavBarWrapper>
            <Transition location={location}>{children}</Transition>
            <Footer />
        </LayoutRoot>
    );
}
