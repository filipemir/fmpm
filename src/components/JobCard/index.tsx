import React from 'react';
import format from 'date-fns/format';
import getYear from 'date-fns/getYear';
import parse from 'react-html-parser';

import {
    RootDiv,
    TopRowDiv,
    JobTitleSpan,
    TeamSpan,
    DatesDiv,
    TechDiv,
    DescriptionDiv
} from './styles';
import { Job } from 'models/experience';
import TechTag from 'components/TechTag';

const DATE_FORMAT = 'MMMM yyyy';

export default function JobCard({ job }: { job: Job }) {
    const { title, team, startDate, technologies, description, endDate } = job,
        sameYear = endDate && getYear(startDate) === getYear(endDate),
        startDateStr = format(startDate, sameYear ? 'MMMM' : DATE_FORMAT),
        dateStr = endDate
            ? `${startDateStr} to ${format(endDate, DATE_FORMAT)}`
            : `since ${startDateStr}`;

    return (
        <RootDiv>
            <TopRowDiv>
                <JobTitleSpan>{title}</JobTitleSpan>
                {team && <TeamSpan>, {team}</TeamSpan>}
            </TopRowDiv>
            <DatesDiv>{dateStr}</DatesDiv>
            {technologies && technologies.length > 0 && (
                <TechDiv>
                    {technologies.map((tech) => (
                        <TechTag technology={tech} key={tech} />
                    ))}
                </TechDiv>
            )}
            {description && (
                <DescriptionDiv>{parse(description)}</DescriptionDiv>
            )}
        </RootDiv>
    );
}
