import React from 'react';
import format from 'date-fns/format';
import getYear from 'date-fns/getYear';
import parse from 'react-html-parser';

import { RootDiv, TopRowDiv, DegreeNameDiv, DatesDiv, TechDiv, DescriptionDiv } from './styles';
import { Degree } from 'models/experience';
import TechTag from 'components/TechTag';

const DATE_FORMAT = 'MMMM yyyy';

export default function DegreeCard({ degree }: { degree: Degree }) {
    const { startDate, endDate, description, technologies, title } = degree,
        sameYear = getYear(startDate) === getYear(endDate),
        dateStr = `${format(startDate, sameYear ? 'MMMM' : DATE_FORMAT)} to ${format(endDate, DATE_FORMAT)}`;
    return (
        <RootDiv>
            <TopRowDiv>
                <DegreeNameDiv>{title}</DegreeNameDiv>
            </TopRowDiv>
            <DatesDiv>{dateStr}</DatesDiv>
            {technologies && technologies.length > 0 && (
                <TechDiv>
                    {technologies.map((tech) => (
                        <TechTag technology={tech} key={tech} />
                    ))}
                </TechDiv>
            )}
            {description && <DescriptionDiv>{parse(description)}</DescriptionDiv>}
        </RootDiv>
    );
}
