import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_TERNARY, FONT_FAMILY_MONO } from 'styles/global';

export const RootDiv = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    font-size: 13px;
    color: ${COLOR_TERNARY};
    max-width: 220px;
    border-left: 1px solid ${COLOR_BG_ACCENT};
    position: relative;
`;

export const TimelineItem = css`
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        color: ${COLOR_ACCENT};
    }
`;

export const DynamicColor = ({ active }: { active: boolean }) => `color: ${active ? COLOR_ACCENT : COLOR_TERNARY};`;

export const PhaseDiv = styled.div`
    ${TimelineItem};
    ${DynamicColor};
    padding: 0 1em;
`;

export const DynamicJob = ({ active }: { active: boolean }) => `
    background-color: ${active && COLOR_BG_ACCENT};
    border-left: 3px solid ${active ? COLOR_ACCENT : 'transparent'};
    border-radius: 0 6px 6px 0;
    position: relative;
    left: -1px;
`;

export const JobDiv = styled.div`
    ${TimelineItem};
    ${DynamicColor};
    ${DynamicJob};
    padding: 0 1em 0 2em;
`;
