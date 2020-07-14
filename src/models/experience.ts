import { Tech } from 'models/tech';

export enum Org {
    BUOY = 'Buoy Health',
    ST = 'SmarterTravel',
    CR = 'Cornerstone Research',
    NPR = 'NPR',
    ADVENT = 'Advent School',
    RT = 'Rebuilding Together',
    IRD = 'IRD',
    SCU = 'Santa Clara University',
    TUFTS = 'Tufts University',
    LAUNCH = 'Launch Academy',
    SAMARITANS = 'Samaritans'
}

export interface Job {
    title: string;
    company: Org;
    startDate: Date;
    endDate?: Date;
    team?: string;
    technologies?: Tech[];
    description?: string;
}

export interface Degree {
    school: Org;
    name: string;
    startDate: Date;
    endDate: Date;
    description?: string;
}

export interface Tenure {
    company: Org;
    jobs: Job[];
    url: string;
    description?: string;
    logo?: string;
}

export type ResumeItem = Job | Degree;

export enum CareerPhaseName {
    ENGINEERING = 'Engineering',
    CONSULTING = 'Consulting',
    OTHER = 'Other'
}

export interface CareerPhase {
    name: CareerPhaseName;
    tenures: Tenure[];
}

export enum ResumeSection {
    EXPERIENCE = 'Experience',
    EDUCATION = 'Education'
}

export interface Resume {
    [ResumeSection.EXPERIENCE]: CareerPhase[];
    [ResumeSection.EDUCATION]: Degree[];
}
