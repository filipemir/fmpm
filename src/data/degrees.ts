import parseISO from 'date-fns/parseISO';

import { Degree, Org } from 'models/experience';

export const scuDegree: Degree = {
    name: 'B.S. Mathematics',
    startDate: parseISO('2003-09'),
    endDate: parseISO('2007-07'),
    school: Org.SCU,
    description: `I graduated <i>cum laude</i> from Santa Clara University with a degree in Math and a minor in English.
         I was also the recipient of the 
         <a href="https://www.scu.edu/mathcs/beyond-the-classroom/awards/" target="_blank" rel="noopener">Robert P.
         Balles’ Mathematics Scholars Award</a>, the president of the Math honors society, a member of the English
         Honors society, and in the 2006 and 2007 Dean’s List.`
};

export const tuftsDegree: Degree = {
    name: 'M.S. Economics',
    startDate: parseISO('2010-09'),
    endDate: parseISO('2011-11'),
    school: Org.TUFTS
};
