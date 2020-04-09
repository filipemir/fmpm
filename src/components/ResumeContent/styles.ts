import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG_ACCENT, COLOR_QUATERNARY, COLOR_TERNARY, FONT_FAMILY_MONO } from 'styles/global';

export const RootDiv = styled.div`
    justify-content: right;
    overflow-y: scroll;
    padding-right: 20px;
    height: 100%;
`;

export const ResumeSectionDiv = styled.div`
    position: relative;
    z-index: 0;
    font-weight: 300;
    font-family: ${FONT_FAMILY_MONO};

    &:after {
        content: ' ';
        border-top: 1px solid ${COLOR_QUATERNARY};
        position: absolute;
        z-index: -2;
        width: 100%;
        left: 0;
        top: 16px;
    }
`;

export const withLogo = ({ withLogo }: { withLogo: boolean }) => `margin-left: ${withLogo ? '50px' : 0}`;

export const ResumeSectionNameDiv = styled.div`
    ${withLogo};
    font-size: 16px;
    color: ${COLOR_ACCENT};
    padding: 0 15px;
    margin-bottom: 1.5em;
    text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
    position: relative;
    display: inline-block;
`;

export const DurationSpan = styled.span`
    font-size: 12px;
    color: ${COLOR_TERNARY};
    margin-left: 1em;
`;

export const ResumeItemDiv = styled.div`
    text-align: left;
    margin-bottom: 2em;
`;

export const SlashDiv = styled.div`
    position: absolute;
    height: 0.7em;
    z-index: -1;
    fill: #fff;
    left: 0;
    width: 100%;
    top: 6px;

    div {
        height: 100%;
    }
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 4px;
    top: 0px;
    left: -40px;
    box-shadow: 2px 2px 0 ${COLOR_QUATERNARY};
`;
