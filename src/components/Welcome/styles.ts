import styled from '@emotion/styled';
import img from './mtns.jpg';

import { COLOR_BG_ACCENT, COLOR_PRIMARY, COLOR_SECONDARY, FONT_FAMILY_SERIF } from 'styles/global';

export const Root = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
`;

export const AvatarWrapper = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 600px;
    font-family: ${FONT_FAMILY_SERIF};
    letter-spacing: -0.2px;
`;

export const Avatar = styled.div`
    height: 190px;
    width: 190px;
    border-radius: 50%;
    background-image: url(${img});
    background-size: contain;
    background-position: center center;
    border: 3px solid ${COLOR_BG_ACCENT};
    box-shadow: 10px 22px 0 ${COLOR_BG_ACCENT};
`;

export const Header1Wrapper = styled.div`
    z-index: 0;
    position: relative;
    display: inline-block;
`;

export const Header1 = styled.h1`
    font-size: 45px;
    color: ${COLOR_PRIMARY};
    font-weight: 400;
    z-index: 2;
    text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
    margin: 0;
`;

export const Slash = styled.div`
    position: absolute;
    height: 55%;
    z-index: -1;
    fill: ${COLOR_BG_ACCENT};
    top: 60%;
    left: 50%;
    width: 110%;
    transform: translate(-50%, -50%);

    div {
        height: 100%;
    }
`;

export const Header2 = styled.h2`
    font-size: 27px;
    color: ${COLOR_PRIMARY};
    font-style: italic;
    font-weight: 300;
    margin: 5px 0 15px 0;
`;

export const About = styled.div`
    font-size: 18px;
    color: ${COLOR_SECONDARY};
    font-style: italic;
    font-weight: 300;
    line-height: 1.5;
`;

export const Technologies = styled.div`
    margin-top: 15px;
    font-style: normal;

    > * {
        margin-left: 8px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`;
