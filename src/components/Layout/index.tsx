import React, { ReactNode } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import globalCss from 'styles/global';
import 'styles/global.scss';

const Wrapper = styled('div')`
    border: 2px solid green;
    padding: 10px;
`;

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Wrapper>
            <Global styles={globalCss} />
            {children}
        </Wrapper>
    );
}
