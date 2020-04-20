import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_QUATERNARY } from 'styles/global';

export const RootWithDropShadow = styled.div`
    display: inline-block;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    padding: 10px 15px 20px 10px;
    box-sizing: border-box;
    background-color: ${COLOR_QUATERNARY};
    clip-path: polygon(96.74% 1px, 80% 87.5%, 3px 95.87%, 3px 5px);
    position: relative;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.03);
    }
`;

export const ExternalLinkSvg = styled.a`
    display: block;
    margin: 15px auto;
    fill: ${COLOR_BG_ACCENT};
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: fill 300ms ease-in-out;

    &:hover {
        fill: ${COLOR_ACCENT};
    }
`;
