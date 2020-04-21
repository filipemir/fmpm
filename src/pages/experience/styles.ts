import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_QUATERNARY,
    COLOR_TERNARY,
    FONT_FAMILY_MONO,
    PADDING_TOP_PAGE
} from 'styles/global';

export const RootDiv = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
`;

export const ResumeWrapper = styled.div`
    display: block;
    position: relative;
`;

export const Note = styled.div`
    background-color: ${COLOR_QUATERNARY};
    text-align: center;
    margin: 20px auto 0 auto;
    padding: 15px;
    font-size: 0.8em;
    font-family: ${FONT_FAMILY_MONO};
`;

export const ResumeButton = styled.a`
    background: ${COLOR_BG_ACCENT};
    border-radius: 6px;
    color: ${COLOR_ACCENT};
    padding: 7px;
    box-shadow: 2px 2px 0 ${COLOR_TERNARY};
    width: 150px;
    text-align: center;

    &:hover {
        text-decoration: none;
    }

    @media (max-width: 900px) {
        width: 100%;
        max-width: 150px;
        margin: 10px auto 0 auto;
        display: block;
    }
`;
