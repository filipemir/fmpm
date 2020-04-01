import { Tech } from 'models/tech';

export enum Phase {
    ENGINEERING = 'Engineering',
    CONSULTING = 'Consulting',
    OTHER = 'Other'
}

export enum Company {
    ST = 'SmarterTravel',
    CR = 'Cornerstone Research',
    NPR = 'NPR',
    ADVENT = 'Advent School',
    RT = 'Rebuilding Together',
    IRD = 'IRD'
}

export enum School {
    SCU = 'Santa Clara University',
    TUFTS = 'Tufts University',
    LAUNCH = 'Launch'
}

export interface Job {
    title: string;
    company: Company;
    team: string;
    startDate: Date;
    endDate?: Date;
    technologies: Tech[];
    description: string;
    phase: Phase;
}

export interface Degree {
    name: string;
    school: School;
}
