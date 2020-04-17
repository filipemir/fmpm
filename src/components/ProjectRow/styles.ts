import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_SECONDARY, FONT_FAMILY_MONO } from 'styles/global';

export const Root = styled.div`
    position: relative;
    max-width: 1000px;
    display: flex;
    z-index: 0;
`;

export const Preview = styled.div`
    justify-self: start;
    position: relative;
    order: ${(p: { alignLeft: boolean }) => (p.alignLeft ? 1 : 2)};
    z-index: 1;
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
`;

export const Title = styled.div`
    font-size: 18px;
    display: inline-block;
    color: ${COLOR_ACCENT};
    position: relative;
    text-transform: uppercase;
    font-weight: 300;
    font-family: ${FONT_FAMILY_MONO};
`;

export const SlashDiv = styled.div`
    position: absolute;
    height: 0.7em;
    z-index: -1;
    fill: ${COLOR_BG_ACCENT};
    top: 50%;
    left: 50%;
    width: 110%;
    transform: translate(-50%, -50%);

    div {
        height: 100%;
    }
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

export const Technologies = styled.div`
    position: relative;
    margin-top: 30px;
    > div {
        margin-left: 8px;

        &:first-of-type {
            margin-left: 0;
        }
    }
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
`;
