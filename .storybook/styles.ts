import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const storybookGlobal = css`
    html,
    body {
        margin: 0;
    }
`;

export const Root = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 10px 20px;
    box-sizing: border-box;
`;
