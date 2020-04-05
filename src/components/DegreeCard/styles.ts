import styled from '@emotion/styled';

import { ExperienceRootDiv, DescriptionDiv, TitleSpan } from 'styles/experience-cards';
import { COLOR_ACCENT, COLOR_TERNARY } from 'styles/global';

export const RootDiv = ExperienceRootDiv;
export const DegreeNameDiv = TitleSpan;
export const SchoolSpan = styled.span`
    color: ${COLOR_ACCENT};
    text-shadow: none;
    font-style: normal;
    font-size: 0.8em;

    &:before {
        content: ' | ';
        color: ${COLOR_TERNARY};
        font-weight: 100;
    }
`;

export { TopRowDiv, TechDiv, DatesDiv, DescriptionDiv } from 'styles/experience-cards';
