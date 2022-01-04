import getTime from 'date-fns/getTime';

import { BOOKS_2022 } from './2022';
import { BOOKS_2021 } from './2021';
import { BOOKS_2020 } from './2020';
import { BOOKS_2019 } from './2019';
import { BOOKS_2018 } from './2018';
import { BOOKS_2017 } from './2017';
import { BOOKS_2016 } from './2016';
import { BOOKS_2015 } from './2015';
import { BOOKS_2014 } from './2014';
import { BOOKS_2013 } from './2013';
import { BOOKS_2012 } from './2012';
import { BOOKS_2011 } from './2011';
import { BOOKS_2010 } from './2010';

export const BOOKS_SORTED = [
    ...BOOKS_2022,
    ...BOOKS_2021,
    ...BOOKS_2020,
    ...BOOKS_2019,
    ...BOOKS_2018,
    ...BOOKS_2017,
    ...BOOKS_2016,
    ...BOOKS_2015,
    ...BOOKS_2014,
    ...BOOKS_2013,
    ...BOOKS_2012,
    ...BOOKS_2011,
    ...BOOKS_2010
].sort((a, b) => getTime(b.endDate) - getTime(a.endDate));
