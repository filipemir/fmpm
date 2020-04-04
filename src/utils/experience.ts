import differenceInMonths from 'date-fns/differenceInMonths';

import { CareerPhase, Degree, Job, ResumeItem, ResumeSection, Tenure } from 'models/experience';
import { RESUME } from 'data/resume';

export function isJob(item: ResumeItem): item is Job {
    return (item as Job).company !== undefined;
}

export function isTenure(o: Tenure | Degree): o is Tenure {
    return (o as Tenure).company !== undefined;
}

export function isCareerPhase(o: CareerPhase | Tenure | Degree): o is CareerPhase {
    return (o as CareerPhase).tenures != undefined;
}

function getTenureDates(tenure: Tenure): { startDate: Date; endDate: Date } {
    const { jobs } = tenure;

    let minStartDate = jobs[0].startDate,
        maxEndDate = jobs[0].endDate;

    jobs.forEach(({ startDate, endDate = new Date() }) => {
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

export function getAllJobs(): Job[] {
    const result: Job[] = [];

    RESUME[ResumeSection.EXPERIENCE].forEach(({ tenures }) => {
        tenures.forEach(({ jobs }) => {
            result.push(...jobs);
        });
    });

    return result;
}

export function getAllDegrees(): Degree[] {
    return RESUME[ResumeSection.EDUCATION];
}
