import styled from '@emotion/styled';

import { ExperienceRootDiv, TitleSpan } from 'styles/experience-cards';
import { COLOR_SECONDARY } from 'styles/global';

export const RootDiv = ExperienceRootDiv;

export const JobTitleSpan = TitleSpan;

export const TeamSpan = styled.span`
    color: ${COLOR_SECONDARY};
    white-space: nowrap;
`;

export {
    TopRowDiv,
    TechDiv,
    DatesDiv,
    DescriptionDiv
} from 'styles/experience-cards';
