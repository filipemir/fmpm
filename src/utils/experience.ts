import { Degree, Job } from 'models/experience';

export function isJob(experience: Job | Degree): experience is Job {
    return (experience as Job).company !== undefined;
}
