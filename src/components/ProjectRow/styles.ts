import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_QUATERNARY, COLOR_SECONDARY } from 'styles/global';

export const Root = styled.div`
    position: relative;
    max-width: 1000px;
    display: flex;
`;

export const Preview = styled.div`
    justify-self: start;
    position: relative;
`;

export const Content = styled.div`
    justify-self: end;
    margin-left: auto;
    padding-left: 30px;
    text-align: right;
`;

export const Title = styled.div`
    font-size: 28px;
    font-style: italic;
    color: ${COLOR_ACCENT};
    position: relative;
    text-transform: lowercase;
`;

export const DescriptionBoxWrapper = styled.div`
    filter: drop-shadow(-5px 5px 0 ${COLOR_QUATERNARY});
`;

export const DescriptionBox = styled.div`
    background-color: ${COLOR_BG_ACCENT};
    margin-top: 30px;
    padding: 30px 30px 30px 15px;
    clip-path: polygon(50% 0%, 100% 0px, 99.63% 100%, 6.11% 99%, 0px 78%, 0px 0px);
    position: relative;
    transition: transform 100ms ease-in-out;
    width: calc(100% + 60px);
    left: -100px;
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

export const GithubLogo = styled.a`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: inline-block;
    fill: ${COLOR_ACCENT};
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: fill 500ms ease-in-out;

    &:last-of-type {
        margin-right: 0;
    }
`;
