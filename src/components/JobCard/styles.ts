import styled from '@emotion/styled';

import { ExperienceRootDiv, DescriptionDiv, TitleSpan } from 'styles/experience-cards';
import { COLOR_TERNARY } from 'styles/global';

export const RootDiv = ExperienceRootDiv;

export const JobTitleSpan = TitleSpan;

export const TeamSpan = styled.span`
    color: ${COLOR_TERNARY};
`;

export { TopRowDiv, TechDiv, DatesDiv, DescriptionDiv } from 'styles/experience-cards';
