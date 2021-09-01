import styled from '@emotion/styled';
import { css } from '@emotion/react';

import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_SECONDARY,
    FONT_FAMILY_MONO
} from 'styles/global';

export const RootDiv = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    font-size: 13px;
    color: ${COLOR_SECONDARY};
    border-left: 1px solid ${COLOR_BG_ACCENT};
    position: relative;
    z-index: 0;
    width: 220px;
`;

const TimelineItem = css`
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 300ms ease-in-out;

    &:hover {
        color: ${COLOR_ACCENT};
    }
`;

export const DynamicColor = ({ active }: { active: boolean }) =>
    `color: ${active ? COLOR_ACCENT : COLOR_SECONDARY};`;

export const SectionHeader = styled.div`
    ${TimelineItem};
    ${DynamicColor};
    padding: 0 1em;
`;

export const SectionItem = styled.div`
    ${TimelineItem};
    ${DynamicColor};
    position: relative;
    padding: 0 1em 0 2em;
`;

export const activeTenurePanelCss = css`
    display: block;
    position: absolute;
    height: 30px;
    background-color: ${COLOR_BG_ACCENT};
    border-left: 3px solid ${COLOR_ACCENT};
    border-radius: 0 3px 3px 0;
    width: 210px;
    z-index: -1;
`;
