import parseISO from 'date-fns/parseISO';

import { Degree, Org } from 'models/experience';

export const scuDegree: Degree = {
    name: 'B.S. Mathematics',
    startDate: parseISO('2003-09'),
    endDate: parseISO('2007-07'),
    school: Org.SCU
};

export const tuftsDegree: Degree = {
    name: 'M.S. Economics',
    startDate: parseISO('2010-09'),
    endDate: parseISO('2011-11'),
    school: Org.TUFTS
};
