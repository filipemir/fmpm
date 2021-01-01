import styled from '@emotion/styled';
import { COLOR_SECONDARY, COLOR_TERNARY, FONT_FAMILY_SANS_SERIF, FONT_FAMILY_SERIF } from 'styles/global';

export const StyledRoot = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const StyledModalShadowBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 70%);
`;

export const StyledContent = styled.div`
    position: absolute;
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledCover = styled.img`
    height: 100%;
    box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0px;
`;

export const StyledInfo = styled.div`
    position: relative;
    top: -40%;
    transform: translate(50%, -50%);
`;

export const StyledTitle = styled.a`
    font-style: italic;
    font-family: ${FONT_FAMILY_SANS_SERIF};
    font-size: 18px;
`;

export const StyledSubtitle = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    font-size: 14px;
`;

export const StyledAuthor = styled.div`
    margin-top: 0.5em;
    font-style: italic;
    font-family: ${FONT_FAMILY_SERIF};
    color: ${COLOR_SECONDARY};
    font-size: 14px;
`;

export const StyledDates = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    color: ${COLOR_TERNARY};
    font-size: 12px;
`;
