import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_QUATERNARY,
    FONT_FAMILY_SANS_SERIF,
    StyledBlurrableImage
} from 'styles/global';

export const Root = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 120px));
    gap: 15px;
    justify-content: center;
    align-items: center;
`;

export const StyledBook = styled.div`
    position: relative;
    cursor: pointer;
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
    grid-auto-flow: row dense;
    z-index: 0;

    &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        padding-bottom: calc(1.5 * 100%);
    }

    &:hover {
        box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0;
        transform: scale(1.3);
        z-index: 1;
    }
`;

export const StyledYear = styled.div`
    color: ${COLOR_ACCENT};
    font-size: 70px;
    font-weight: 700;
    font-family: ${FONT_FAMILY_SANS_SERIF};
    background-color: ${COLOR_BG_ACCENT};
    height: 100%;
    width: 100%;
    border-radius: 5px;
    line-height: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 0 ${COLOR_QUATERNARY};
    border: 1px solid ${COLOR_ACCENT};
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;

    &:hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: unset;
    }
`;

export const StyledBookCover = styled(StyledBlurrableImage)`
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    top: 0;
    transition: 150ms ease-in-out;

    &:hover {
        object-fit: fill;
    }
`;
