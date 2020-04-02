import styled from '@emotion/styled';
import { COLOR_ACCENT, COLOR_BG_ACCENT, FONT_FAMILY_MONO, TEXT_SHADOW } from 'styles/global';

export const RootDiv = styled.div`
    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: 1000px;
`;

export const TimelineWrapper = styled.div`
    justify-content: start;
    margin-right: 2em;
`;

export const PhasesWrapper = styled.div`
    justify-content: right;
    overflow-y: scroll;
    padding-right: 20px;
`;

export const PhaseDiv = styled.div``;

export const TenureDiv = styled.div`
    position: relative;
    z-index: 0;
    text-align: center;

    &:after {
        content: ' ';
        border-top: 1px solid ${COLOR_BG_ACCENT};
        position: absolute;
        z-index: -1;
        width: 100%;
        left: 0;
        top: 15px;
    }
`;

export const TenureNameDiv = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    font-weight: 300;
    font-size: 16px;
    color: ${COLOR_ACCENT};
    padding: 0 15px;
    margin-bottom: 1em;
    text-shadow: ${TEXT_SHADOW};
    position: relative;
    display: inline-block;
`;

export const ExperienceDiv = styled.div`
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
