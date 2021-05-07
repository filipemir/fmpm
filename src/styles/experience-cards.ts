import styled from '@emotion/styled';
import {
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    COLOR_SECONDARY,
    FONT_FAMILY_MONO,
    FONT_FAMILY_SANS_SERIF,
    FONT_FAMILY_SERIF
} from 'styles/global';

export const ExperienceRootDiv = styled.div`
    font-size: 14px;
    max-width: 1100px;
`;

export const TopRowDiv = styled.div`
    font-size: 20px;
    font-family: ${FONT_FAMILY_SERIF};
    font-style: italic;
    line-height: 1;
`;

export const TitleSpan = styled.span`
    color: ${COLOR_PRIMARY};
    font-weight: 500;
    font-size: 20px;
    text-shadow: 2px 2px 0 ${COLOR_BG_ACCENT};
`;

export const DatesDiv = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    font-style: italic;
    font-size: 14px;
    color: ${COLOR_SECONDARY};
    margin: 5px 0;
`;

export const TechDiv = styled.div`
    overflow-y: scroll;
    margin: 10px 0 10px 0;
    white-space: nowrap;

    > * {
        margin-left: 8px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`;

export const DescriptionDiv = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    color: ${COLOR_PRIMARY};
    line-height: 1.7;
    font-size: 15px;
    font-style: normal;
`;
