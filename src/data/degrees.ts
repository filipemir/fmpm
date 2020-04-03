import parseISO from 'date-fns/parseISO';

import { Degree, School } from 'models/experience';
import { Tech } from 'models/tech';

export const scuDegree: Degree = {
    title: 'B.S. Mathematics',
    startDate: parseISO('2003-09'),
    endDate: parseISO('2007-07'),
    school: School.SCU,
    description: `I graduated <i>cum laude</i> from Santa Clara University with a degree in Math and a minor in English.
         I was also the recipient of the 
         <a href="https://www.scu.edu/mathcs/beyond-the-classroom/awards/" target="_blank" rel="noopener">Robert P.
         Balles’ Mathematics Scholars Award</a>, the president of the Math honors society, a member of the English
         Honors society, and in the 2006 and 2007 Dean’s List.`
};

export const tuftsDegree: Degree = {
    title: 'M.S. Economics',
    startDate: parseISO('2010-09'),
    endDate: parseISO('2011-11'),
    school: School.TUFTS
};

export const launchAcademy: Degree = {
    title: 'Full Stack Web Development Bootcamp',
    startDate: parseISO('2016-02'),
    endDate: parseISO('2016-05'),
    school: School.LAUNCH,
    technologies: [Tech.RUBY, Tech.RAILS, Tech.D3],
    description: `This was my first official step into software engineering. After months of learning on my own, I joined
        Launch Academy to learn the basics of web development. I spent 10 weeks there learning how the web works.
        My capstone was a project exploring the lyrical diversity of my favorite musicians using
        <a href="https://d3js.org/" target="_blank" rel="noopener">d3.js</a> and the
        <a href="https://last.fm" target="_blank" rel="noopener">last.fm API</a>. You can see it 
        <a href="https://github.com/filipemir/Musicabulary/" target="_blank" rel="noopener">here</a>
        or in in this
        <a href="https://www.youtube.com/watch?v=OsIAMMB1Kj0" target="_blank" rel="noopener">promotional video</a>
        Launch made.`
};
