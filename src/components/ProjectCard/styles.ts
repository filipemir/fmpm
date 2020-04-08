import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    COLOR_QUATERNARY,
    COLOR_SECONDARY,
    FONT_FAMILY_SANS_SERIF,
    FONT_FAMILY_SERIF
} from 'styles/global';

export const RootWithDropShadow = styled.div`
    filter: drop-shadow(5px 5px 0 ${COLOR_QUATERNARY});
    display: inline-block;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    width: 290px;
    height: 240px;
    padding: 20px 30px 40px 30px;
    box-sizing: border-box;
    background-color: ${COLOR_BG_ACCENT};
    box-shadow: 5px 5px 0 ${COLOR_QUATERNARY};
    clip-path: polygon(50% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 0);
    position: relative;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.03);
    }
`;

export const Title = styled.a`
    font-family: ${FONT_FAMILY_SERIF};
    color: ${COLOR_PRIMARY};
    font-style: italic;
    font-size: 22px;
    margin-bottom: 0.5em;
    margin-right: 50px;
    display: inline-block;

    &:hover {
        text-decoration: none;
    }
`;

export const Description = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    line-height: 1.4;
    font-size: 14px;
    color: ${COLOR_SECONDARY};
`;

export const Technologies = styled.div`
    position: absolute;
    bottom: 20px;

    > div {
        margin-left: 8px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`;

export const ExternalLinks = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`;

export const ExternalLinkSvg = styled.a`
    margin-right: 4px;
    display: inline-block;
    fill: ${COLOR_QUATERNARY};
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: fill 500ms ease-in-out;

    &:hover {
        fill: ${COLOR_ACCENT};
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const GithubLogo = ExternalLinkSvg;
