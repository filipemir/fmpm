import { Project } from 'models/project';
import { Tech } from 'models/tech';

export const BPD: Project = {
    name: 'BPD Incident Map',
    technologies: [Tech.REACT, Tech.LEAFLET],
    githubUrl: 'https://github.com/filipemir/police-incident-dashboard-react',
    url: 'https://filipemir.github.io/police-incident-dashboard-react/',
    description: `A live map of incidents reported by the Boston Police Department. This was a project 
        I completed for Code for Boston and the MA District Attorney's Office.`
};

export const BEST_WORDS: Project = {
    name: 'The Best Words',
    githubUrl: 'https://github.com/filipemir/trump',
    url: 'http://www.the-best-words.com',
    technologies: [Tech.ES6, Tech.NETLIFY],
    description: `A small sampling of Donald Trump’s “best” words. I initially made this in the
        Spring of 2016 when it was obvious he would never be president. Seemed a lot funnier back then.`
};

export const SBS: Project = {
    name: 'Stonybrook Strings',
    url: 'https://www.stonybrookstrings.com',
    technologies: [Tech.GATSBY, Tech.GOOGLE_FNS],
    description: `The website for Stonybrook Strings, a violin teaching studio in Boston entirely 
        coincidentally owned and run by my wife.`
};

export const PROJECTS = [BPD, BEST_WORDS, SBS];
