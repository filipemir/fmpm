import differenceInMonths from 'date-fns/differenceInMonths';

import { Degree, Job, Tenure } from 'models/experience';

export function isJob(experience: Job | Degree): experience is Job {
    return (experience as Job).company !== undefined;
}

function getTenureDates(tenure: Tenure): { startDate: Date; endDate: Date } {
    const { experiences } = tenure;

    let minStartDate = experiences[0].startDate,
        maxEndDate = experiences[0].endDate;

    experiences.forEach(({ startDate, endDate = new Date() }) => {
        if (!minStartDate || startDate < minStartDate) {
            minStartDate = startDate;
        }

        if (!maxEndDate || endDate > maxEndDate) {
            maxEndDate = endDate;
        }
    });

    return { startDate: minStartDate, endDate: maxEndDate || new Date() };
}

export function getTenureDurationString(tenure: Tenure): string {
    const { startDate, endDate } = getTenureDates(tenure),
        months = differenceInMonths(endDate, startDate),
        remainder = months % 12,
        years = (months - remainder) / 12;

    if (remainder > 7) {
        const nextYear = years + 1;
        return `almost ${nextYear} year${nextYear === 1 ? '' : 's'}`;
    }

    if (years < 1) {
        return `${months} month${months === 1 ? '' : 's'}`;
    }

    return `${years} year${years === 1 ? '' : 's'}`;
}
