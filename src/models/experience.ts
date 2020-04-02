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
    LAUNCH = 'Launch Academy'
}

export interface Experience {
    title: string;
    startDate: Date;
    endDate?: Date;
    technologies?: Tech[];
    description?: string;
}

export interface Job extends Experience {
    company: Company | School;
    team?: string;
}

export interface Degree extends Experience {
    school: School;
    endDate: Date;
}
