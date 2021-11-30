import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_SECONDARY,
    COLOR_TERNARY,
    FONT_FAMILY_SANS_SERIF,
    FONT_FAMILY_SERIF
} from 'styles/global';

const MOBILE_THRESHOLD = '900px';

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
    height: 80vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: ${MOBILE_THRESHOLD}) {
        height: auto;
    }
`;

export const StyledCover = styled.div`
    display: block;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    max-width: 600px;

    @media (max-width: ${MOBILE_THRESHOLD}) {
        height: auto;
        max-height: 50vh;
        max-width: 95vw;
        object-fit: cover;
        object-position: center center;
        transform: unset;
        top: unset;
        position: unset;
    }
`;

export const StyledInfo = styled.div`
    position: absolute;
    width: fit-content;
    top: 50%;
    left: 100%;
    transform: translate(-60%, -50%);

    @media (max-width: ${MOBILE_THRESHOLD}) {
        position: relative;
        max-width: 100%;
        left: 30px;
        top: -40px;
        transform: unset;
    }
`;

export const StyledTitle = styled.div`
    color: ${COLOR_ACCENT};
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
