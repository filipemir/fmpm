import styled from '@emotion/styled';

import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    COLOR_SECONDARY,
    FONT_FAMILY_SERIF,
    StyledBlurrableImage
} from 'styles/global';

const MOBILE_MAX_WIDTH = '800px';

export const Root = styled.div`
    position: relative;
    z-index: 0;
`;

export const Part1 = styled.div`
    position: relative;
    display: block;
    height: 100vh;
    min-height: 500px;
`;

export const Part1Inner = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    height: fit-content;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        display: block;
        position: relative;
    }
`;

export const AvatarWrapper = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        display: inline-block;
        margin: 0;
        height: 160px;
    }
`;

export const Content = styled.div`
    font-family: ${FONT_FAMILY_SERIF};
    letter-spacing: -0.2px;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        display: block;
    }
`;

export const Avatar = styled(StyledBlurrableImage)`
    height: 190px;
    width: 190px;
    border-radius: 50%;
    border: 3px solid ${COLOR_BG_ACCENT};
    box-shadow: 10px 22px 0 ${COLOR_BG_ACCENT};

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        height: 130px;
        width: 130px;
        box-shadow: 5px 7px 0 ${COLOR_BG_ACCENT};
    }
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

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        font-size: 25px;
    }
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

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        line-height: 1.2;
        margin: 0;
        font-size: 16px;
    }
`;

export const JobTitle = styled.span`
    color: ${COLOR_ACCENT};
    position: relative;
    z-index: 0;

    &:after {
        background-color: ${COLOR_BG_ACCENT};
        content: ' ';
        position: absolute;
        width: 100%;
        height: 5px;
        left: 0;
        bottom: 5px;
        z-index: -1;
    }
`;

export const About = styled.div`
    font-size: 18px;
    max-width: 540px;
    color: ${COLOR_SECONDARY};
    font-weight: 300;
    text-align: left;

    > div {
        margin-top: 1em;
    }

    font-family: ${FONT_FAMILY_SERIF};
    line-height: 1.4;
    font-style: normal;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        font-size: 15px;
        max-width: 280px;
        margin: 0 auto;
    }
`;

export const Technologies = styled.div`
    margin: 20px 0 25px 0;

    > * {
        margin-left: 8px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`;
