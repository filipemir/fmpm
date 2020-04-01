import React from 'react';
import { format } from 'date-and-time';
import parse from 'react-html-parser';

import { RootDiv, TopRowDiv, JobTitleSpan, CompanySpan, TeamSpan, DatesDiv, TechDiv, DescriptionDiv } from './styles';
import { Job } from 'models/career';
import TechTag from 'components/TechTag';

const DATE_FORMAT = 'MMMM, YYYY';

export default function JobCard({ job }: { job: Job }) {
    const { title, team, company, startDate, technologies, description, endDate } = job,
        startDateStr = format(startDate, DATE_FORMAT),
        dateStr = endDate ? `${startDateStr} to ${format(endDate, DATE_FORMAT)}` : `since ${startDateStr}`;
    return (
        <RootDiv>
            <TopRowDiv>
                <JobTitleSpan>{title}</JobTitleSpan>
                {team && <TeamSpan>, {team}</TeamSpan>}
                <CompanySpan>{company}</CompanySpan>
            </TopRowDiv>
            <DatesDiv>{dateStr}</DatesDiv>
            {technologies.length > 0 && (
                <TechDiv>
                    {technologies.map((tech) => (
                        <TechTag technology={tech} key={tech} />
                    ))}
                </TechDiv>
            )}
            <DescriptionDiv>{parse(description)}</DescriptionDiv>
        </RootDiv>
    );
}
