import React, { ReactNode } from 'react';
import { Global } from '@emotion/core';
import globalCss from 'styles/global';
import 'styles/global.scss';
import { LayoutRoot } from './styles';
import NavBar from 'components/NavBar';
import Page from 'models/page';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBar currentPage={Page.ABOUT} onPageClick={(page) => console.log(page)} />
            {children}
        </LayoutRoot>
    );
}
