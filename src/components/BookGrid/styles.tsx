import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_QUATERNARY,
    FONT_FAMILY_SANS_SERIF
} from 'styles/global';

export const Root = styled.div`
    position: relative;
    margin: 40px auto 0 auto;
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
    height: 100%;
    min-height: 180px;

    @media (min-width: 800px) {
        &:hover {
            transform: scale(1.3);
            z-index: 1;
            img {
                box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0;
            }
        }
        > * {
            overflow: visible !important;
        }
    }

    > div {
        display: block !important;
    }

    img {
        transition: 0.3s;
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

    @media (min-width: 800px) {
        &:hover {
            transform: scale(1.1);
            z-index: 1;
            box-shadow: unset;
        }
    }
`;

export const StyledBookCover = styled.div`
    img {
        position: absolute;
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 180px;
        top: 0;
        transition: 150ms ease-in-out;
        background-color: ${COLOR_QUATERNARY};

        @media (min-width: 800px) {
            &:hover {
                object-fit: fill;
            }
        }
    }
`;
