import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_SECONDARY, FONT_FAMILY_MONO } from 'styles/global';

export const Root = styled.div`
    position: relative;
    max-width: 600px;
    z-index: 0;
    display: block;
    text-align: center;
    margin: 0 auto;
`;

export const Preview = styled.div`
    margin-top: 15px;
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`;

export const DescriptionBoxWrapper = styled.div`
    filter: drop-shadow(-5px 5px 5px ${COLOR_SECONDARY + 50});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`;

export const Description = styled.div`
    background-color: ${COLOR_BG_ACCENT};
    font-size: 13px;
    color: ${COLOR_SECONDARY};
    letter-spacing: -0.26px;
    line-height: 15px;
    padding: 10px 20px;

    text-align: left;
    box-shadow: -5px 5px 5px ${COLOR_SECONDARY + 50};
    clip-path: polygon(100% 0px, 100% 75%, 95% 100%, 1px 100%, 0px 0px);
`;

export const Technologies = styled.div`
    margin-top: 20px;
    position: relative;
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
    transition: fill 500ms ease-in-out;
    margin: 0 20px;
    top: 3px;
    position: absolute;
    right: 0px;
`;
