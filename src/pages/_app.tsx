import React, { useState } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import type { AppProps } from 'next/app';
import globalCss from 'styles/global';
import NavBar from 'components/NavBar';
import Transition from 'components/Transition';
import { getPage } from 'utils/location';
import Page from 'models/page';
import Footer from 'components/Footer';

export const LayoutRoot = styled.div`
    position: relative;
    height: 100%;
    z-index: 0;
`;

export const NavBarWrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;
`;

export default function App({ Component, pageProps, router }: AppProps) {
    const pathname = router.pathname,
        [page, setPage] = useState(getPage(pathname)),
        onPageClick = (page: Page) => {
            setPage(page);
        };

    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBarWrapper>
                <NavBar currentPage={page} onPageClick={onPageClick} />
            </NavBarWrapper>
            <Transition pathname={pathname}>
                <Component {...pageProps} />
            </Transition>
            <Footer />
        </LayoutRoot>
    );
}
