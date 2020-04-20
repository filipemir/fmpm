import styled from '@emotion/styled';

import { COLOR_QUATERNARY, COLOR_SECONDARY, FONT_FAMILY_MONO } from 'styles/global';

export const Root = styled.div`
    background-color: ${COLOR_QUATERNARY};
    width: 100%;
    padding: 40px 0;
    bottom: 0;
    margin-top: 20px;
`;

export const Attribution = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    font-size: 12px;
    text-align: center;
    color: ${COLOR_SECONDARY};
`;

export const FooterLinks = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

export const ExternalLinkSvg = styled.a`
    display: inline-block;
    margin-right: 15px;
    fill: ${COLOR_SECONDARY};
    width: 15px;
    height: 15px;
    cursor: pointer;
`;
