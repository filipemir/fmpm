import { parse } from 'date-and-time';

import { Degree, School } from 'models/experience';
import { Tech } from 'models/tech';

export const scuDegree: Degree = {
    title: 'B.S. Mathematics',
    startDate: parse('09-2003', 'MM-YYYY') as Date,
    endDate: parse('06-2007', 'MM-YYYY') as Date,
    school: School.SCU,
    description: `I graduated <i>cum laude</i> from Santa Clara University with a degree in Math and a minor in English.
         I was also the recipient of the 
         <a href="https://www.scu.edu/mathcs/beyond-the-classroom/awards/" target="_blank" rel="noopener">Robert P.
         Balles’ Mathematics Scholars Award</a>, the president of the Math honors society, a member of the English
         Honors society, and in the 2006 and 2007 Dean’s List.`
};

export const tuftsDegree: Degree = {
    title: 'M.S. Economics',
    startDate: parse('09-2010', 'MM-YYYY') as Date,
    endDate: parse('12-2011', 'MM-YYYY') as Date,
    school: School.TUFTS
};

export const launchAcademy: Degree = {
    title: 'Full Stack Web Development Bootcamp',
    startDate: parse('02-2016', 'MM-YYYY') as Date,
    endDate: parse('05-2016', 'MM-YYYY') as Date,
    school: School.LAUNCH,
    technologies: [Tech.D3, Tech.RUBY, Tech.RAILS],
    description: `This was my first official step into software engineering. After months of learning on my own, I joined
        Launch Academy to learn the basics of web development. I spent 10 weeks there learning how to build sites
        with Ruby, Rails and (as a member of the last pre-React cohort) plain vanilla JS and HTML. My capstone was
        a project exploring the lyrical diversity of my favorite musicians with
        <a href="https://d3js.org/" target="_blank" rel="noopener">d3.js</a>. I was required to give it a name so I
        reluctantly called it 
        <a href="https://github.com/filipemir/Musicabulary/" target="_blank" rel="noopener">Musicabulary</a>, which
        Launch Academy subsequently featured on a
        <a href="https://github.com/filipemir/Musicabulary/" target="_blank" rel="noopener">promotional video</a>`
};
