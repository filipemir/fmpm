import React from 'react';
import format from 'date-fns/format';
import getYear from 'date-fns/getYear';
import parse from 'react-html-parser';

import { RootDiv, TopRowDiv, DegreeNameDiv, DatesDiv, DescriptionDiv, SchoolSpan } from './styles';
import { Degree } from 'models/experience';

const DATE_FORMAT = 'MMMM yyyy';

export default function DegreeCard({ degree }: { degree: Degree }) {
    const { startDate, endDate, description, school, name } = degree,
        sameYear = getYear(startDate) === getYear(endDate),
        dateStr = `${format(startDate, sameYear ? 'MMMM' : DATE_FORMAT)} to ${format(endDate, DATE_FORMAT)}`;
    return (
        <RootDiv>
            <TopRowDiv>
                <DegreeNameDiv>
                    {name}
                    <SchoolSpan>{school}</SchoolSpan>
                </DegreeNameDiv>
            </TopRowDiv>
            <DatesDiv>{dateStr}</DatesDiv>
            {description && <DescriptionDiv>{parse(description)}</DescriptionDiv>}
        </RootDiv>
    );
}
