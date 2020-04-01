import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_PRIMARY,
    COLOR_SECONDARY,
    COLOR_TERNARY,
    FONT_FAMILY_MONO,
    FONT_FAMILY_SANS_SERIF,
    FONT_FAMILY_SERIF
} from 'styles/global';

export const RootDiv = styled.div`
    max-width: 690px;
    font-size: 14px;
`;

export const TopRowDiv = styled.div`
    font-size: 20px;
    font-family: ${FONT_FAMILY_SERIF};
    font-style: italic;
`;

export const JobTitleSpan = styled.span`
    color: ${COLOR_PRIMARY};
    font-weight: 600;
`;

export const TeamSpan = styled.span`
    color: ${COLOR_TERNARY};
`;

export const CompanySpan = styled.span`
    color: ${COLOR_ACCENT};

    &:before {
        content: ' @ ';
        color: ${COLOR_TERNARY};
    }
`;

export const DatesDiv = styled.div`
    font-family: ${FONT_FAMILY_MONO};
    font-style: italic;
    font-size: 12px;
    color: ${COLOR_TERNARY};
    margin: -2px 0 5px 0;
`;

export const TechDiv = styled.div`
    overflow-y: scroll;
    margin-bottom: 10px;

    > * {
        margin-left: 8px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`;

export const DescriptionDiv = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    color: ${COLOR_SECONDARY};
    line-height: 20px;
`;
