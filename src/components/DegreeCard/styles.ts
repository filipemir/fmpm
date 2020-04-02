import styled from '@emotion/styled';

import { ExperienceRootDiv, DescriptionDiv, TitleSpan } from 'styles/experience-cards';
import { COLOR_ACCENT } from 'styles/global';

export const RootDiv = ExperienceRootDiv;
export const SchoolDiv = TitleSpan;
export const DegreeNameDiv = styled.div`
    color: ${COLOR_ACCENT};
    font-size: 16px;
    margin: 5px 0;
`;

export { TopRowDiv, TechDiv, DatesDiv, DescriptionDiv } from 'styles/experience-cards';
