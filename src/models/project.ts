import { Tech } from 'models/tech';

export enum ProjectId {
    SBS,
    MUSICABULARY,
    BPD,
    TBW
}

export interface Project {
    id: ProjectId;
    name: string;
    url?: string;
    githubUrl?: string;
    description: string;
    technologies: Tech[];
    img: StaticImageData;
}
