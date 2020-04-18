import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_SECONDARY, FONT_FAMILY_MONO } from 'styles/global';

const LAYOUT_BREAK_POINT = '600px';

export const Root = styled.div`
    position: relative;
    max-width: 1000px;
    display: flex;
    z-index: 0;

    @media (max-width: ${LAYOUT_BREAK_POINT}) {
        display: block;
    }
`;

export const Preview = styled.a`
    justify-self: start;
    position: relative;
    order: ${(p: { alignLeft: boolean }) => (p.alignLeft ? 1 : 2)};
    z-index: 1;
    flex-grow: 1;

    @media (max-width: ${LAYOUT_BREAK_POINT}) {
        display: block;
        width: 100%;
    }
`;

export const Content = styled.div`
    margin-top: 50px;
    justify-self: end;
    margin-left: auto;
    padding-left: 30px;
    text-align: ${(p: { alignLeft: boolean }) => (p.alignLeft ? 'left' : 'right')};
    order: ${(p: { alignLeft: boolean }) => (p.alignLeft ? 1 : 2)};
    z-index: 2;
    align-content: center;
    max-width: 400px;
`;

export const TitleWrapper = styled.div`
    margin: 0 10px;
    display: flex;
    justify-content: ${(p: { alignLeft: boolean }) => (p.alignLeft ? 'flex-start' : 'flex-end')};
`;

export const DescriptionBoxWrapper = styled.div`
    filter: drop-shadow(-5px 5px 5px ${COLOR_SECONDARY + 50});
`;

export const dynamicDescriptionBox = (p: { alignLeft: boolean }) => css`
    left: ${p.alignLeft ? undefined : '-100px'};
    right: ${p.alignLeft ? 0 : undefined};
    clip-path: polygon(
        ${p.alignLeft
            ? '100% 0px, 100%  75%, 95% 100%, 1px 100%, 0px 0px'
            : '100% 0px, 100% 100%,  5% 100%, 0px  80%, 0px 0px'}
    );
`;

export const DescriptionBox = styled.div`
    background-color: ${COLOR_BG_ACCENT};
    margin-top: 30px;
    padding: 30px 30px 30px 15px;
    position: relative;
    transition: transform 100ms ease-in-out;
    width: calc(100% + 60px);
    ${dynamicDescriptionBox};
`;

export const Description = styled.div`
    font-size: 14px;
    color: ${COLOR_SECONDARY};
    letter-spacing: -0.26px;
    line-height: 20px;
`;

const logoSize = '18px';

export const GithubLogo = styled.a`
    display: inline-block;
    fill: ${COLOR_ACCENT};
    width: ${logoSize};
    height: ${logoSize};
    cursor: pointer;
    transition: fill 500ms ease-in-out;
    margin: 0 20px;
    position: relative;
    top: 3px;
    order: ${(p: { alignLeft: boolean }) => (p.alignLeft ? -1 : undefined)};
`;