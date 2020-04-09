import React, { useState, ReactNode } from 'react';
import { Global } from '@emotion/core';
import globalCss from 'styles/global';
import 'styles/global.scss';
import { LayoutRoot } from './styles';
import NavBar from 'components/NavBar';
import Page from 'models/page';

export default function Layout({ children }: { children: ReactNode }) {
    const [page, setPage] = useState(Page.ABOUT);
    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBar currentPage={page} onPageClick={setPage} />
            {children}
        </LayoutRoot>
    );
}
