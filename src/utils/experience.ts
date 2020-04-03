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
    return `4 years`;
}
