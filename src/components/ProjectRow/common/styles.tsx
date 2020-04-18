import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG_ACCENT, FONT_FAMILY_MONO } from 'styles/global';

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

export const Title = styled.a`
    font-size: 18px;
    display: inline-block;
    color: ${COLOR_ACCENT};
    position: relative;
    text-transform: uppercase;
    font-weight: 400;
    font-family: ${FONT_FAMILY_MONO};

    &:hover {
        text-decoration: none;
    }
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
