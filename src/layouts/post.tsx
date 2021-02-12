import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { PADDING_TOP_PAGE } from 'styles/global';

export const Root = styled.div`
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
    padding-bottom: ${PADDING_TOP_PAGE}px;
    min-height: 100vh;
    max-width: 90ch;

    h1 {
        color: red;
    }
`;

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return <Root>{children}</Root>;
}
