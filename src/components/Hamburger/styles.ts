import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG, COLOR_BG_ACCENT, COLOR_PRIMARY, COLOR_TERNARY, FONT_FAMILY_MONO } from 'styles/global';
import { css } from '@emotion/core';

export const Root = styled.div`
    .bm-burger-button {
        position: absolute;
        width: 26px;
        height: 15px;
        right: 36px;
        top: 36px;
    }

    .bm-burger-bars {
        background: ${COLOR_ACCENT};
        height: 2px !important;

        &:nth-of-type(1) {
            width: 100%;
        }

        &:nth-of-type(2) {
            width: 75%;
        }

        &:nth-of-type(3) {
            width: 50%;
        }
    }

    .bm-burger-bars-hover {
        background: ${COLOR_ACCENT};
    }

    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    .bm-cross {
        background: ${COLOR_TERNARY};
    }

    .bm-menu-wrap {
        position: fixed;
        height: 100%;
        width: 180px !important;
    }

    .bm-menu {
        background: ${COLOR_BG};
        padding: 0 1.5em 0;
        font-size: 1.15em;
        box-shadow: rgba(2, 12, 27, 0.3) -10px 0px 30px -15px;
        position: relative;
        display: flex;
        align-items: center;
    }

    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    .bm-item-list {
        height: unset !important;
        position: relative;
        display: block;
        text-align: center;
    }
`;

export const PageDivWrapper = styled.div`
    display: inline-block;
    outline: none;
    text-align: center;
    font-size: 18px;

    a:hover {
        text-decoration: none;
    }
`;

const withUnderline = css`
    &:after {
        content: ' ';
        display: block;
        position: absolute;
        background-color: ${COLOR_BG_ACCENT};
        height: 6px;
        bottom: 22px;
        z-index: -1;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const dynamic = ({ active }: { active: boolean }) => css`
    color: ${active ? COLOR_ACCENT : COLOR_PRIMARY};
    ${active && withUnderline};
`;

export const PageDiv = styled.div`
    ${dynamic};
    text-align: center;
    padding: 20px 10px;
    cursor: pointer;
    font-family: ${FONT_FAMILY_MONO};
    position: relative;
    z-index: 10;
    display: inline-block;
`;

export const ContactMe = styled.a`
    background-color: ${COLOR_BG_ACCENT};
    border-radius: 6px;
    padding: 10px;

    div {
        color: ${COLOR_ACCENT};
    }
`;
