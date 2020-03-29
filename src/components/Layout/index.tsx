import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
    border: 2px solid green;
    padding: 10px;
`;

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Wrapper>
            <Global
                styles={css`
                    div {
                        background: pink;
                        color: white;
                    }
                `}
            />
            {children}
        </Wrapper>
    );
}
