import { Project, ProjectId } from 'models/project';
import { Tech } from 'models/tech';
import bpdImg from 'images/bpd-screen.png';
import sbsImg from 'images/sbs-screen.png';
import tbwImg from 'images/tbw-screen.png';
import musicabularyImg from 'images/musicabulary-screen.png';

export const BPD: Project = {
    id: ProjectId.BPD,
    name: 'BPD Incident Map',
    technologies: [Tech.REACT, Tech.LEAFLET],
    githubUrl: 'https://github.com/filipemir/police-incident-dashboard-react',
    url: 'https://filipemir.github.io/police-incident-dashboard-react/',
    img: bpdImg,
    description: `A live map of incidents reported by the Boston Police Department. This was a project 
        I did with Code for Boston and the MA District Attorney's Office, leveraging data exposed through
        <a href="https://data.boston.gov/" target={'_blank'} rel='noopener noreferrer'>data.boston.gov</a>.`
};

export const SBS: Project = {
    id: ProjectId.SBS,
    name: 'Stonybrook Strings',
    url: 'https://www.stonybrookstrings.com',
    technologies: [Tech.GATSBY, Tech.GOOGLE_FNS],
    img: sbsImg,
    description: `The website for Stonybrook Strings, a violin teaching studio in Jamaica Plain, MA.
        I built it with Gatsby with just a dash of serverless for the contact form.`
};

export const BEST_WORDS: Project = {
    id: ProjectId.TBW,
    name: 'The Best Words',
    githubUrl: 'https://github.com/filipemir/trump',
    url: 'http://the-best-words.now.sh',
    technologies: [Tech.ES6],
    img: tbwImg,
    description: `A small sampling of Donald Trump’s choicest words. I worked on this in the
        Spring of 2016 when it seemed far funnier than it does now.`
};

export const MUSICABULARY: Project = {
    id: ProjectId.MUSICABULARY,
    name: 'Musicabulary',
    githubUrl: 'https://github.com/filipemir/musicabulary',
    technologies: [Tech.RUBY, Tech.RAILS, Tech.D3],
    img: musicabularyImg,
    description: `The capstone for my time at Launch Academy. Its stated purpose
        was to help <a href="https://www.last.fm/" target={'_blank'} rel='noopener noreferrer'>last.fm</a>
        users take a peek at the lyrical diversity of their favorite musicians.
        Its actual purpose was to give me a reason to dip my toes in 
        <a href="https://d3js.org/" target={'_blank'} rel='noopener noreferrer'>d3.js</a>. You can see a slightly
        mortifying video about it 
        <a href="https://www.youtube.com/watch?v=OsIAMMB1Kj0" target={'_blank'} rel='noopener noreferrer'>here</a>.`
};

export const PROJECTS = [BPD, SBS, BEST_WORDS, MUSICABULARY];
