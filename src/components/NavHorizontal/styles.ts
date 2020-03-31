import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_PRIMARY, FONT_FAMILY_MONO } from 'styles/global';

export const RootDiv = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    text-transform: lowercase;
    font-size: 15px;
    color: ${COLOR_PRIMARY};
    position: relative;
    z-index: 0;
    text-shadow: 2px 2px ${COLOR_BG_ACCENT};
    display: inline-block;
    margin-top: 10px;
`;

const dynamic = ({ active }: { active: boolean }) => css`
    color: ${active && COLOR_ACCENT};
`;

export const PageDiv = styled.div`
    ${dynamic};
    cursor: pointer;
    display: inline-block;
`;

export const PageSeparator = styled.span`
    margin: 0 1em;
`;

export const underlineDivCss = css`
    position: absolute;
    width: 100%;
    height: 10px;
    z-index: -1;
    fill: ${COLOR_BG_ACCENT};
    transform: translate(-50%, -100%);

    div {
        height: 100%;
    }
`;

const circleSize = '8px';
export const CircleDiv = styled.div`
    width: ${circleSize};
    height: ${circleSize};
    background-color: ${COLOR_ACCENT};
    border-radius: 50%;
    position: absolute;
    box-shadow: 2px 2px ${COLOR_BG_ACCENT};
    transform: translateX(-50%);
`;
