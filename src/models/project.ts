import {Tech} from "models/tech";

export interface Project {
    name: string;
    url?: string;
    githubUrl?: string;
    description: string;
    technologies: Tech[];
    img: string
}