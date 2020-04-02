import { Phase } from 'models/experience';
import {
    adventTeacher,
    americorps,
    crbAnalyst,
    crbResearchAssociate,
    crbSeniorAnalyst,
    irdTeacher,
    nprIntern,
    scuRA,
    stIntegrationEngineer,
    stSoftwareEngineer,
    tuftsRA,
    tuftsTA
} from 'data/jobs';
import { launchAcademy, scuDegree, tuftsDegree } from 'data/degrees';

export const RESUME = [
    { phase: Phase.ENGINEERING, experiences: [stSoftwareEngineer, stIntegrationEngineer, launchAcademy] },
    { phase: Phase.CONSULTING, experiences: [crbResearchAssociate, crbSeniorAnalyst, crbAnalyst] },
    {
        phase: Phase.OTHER,
        experiences: [tuftsRA, tuftsTA, tuftsDegree, nprIntern, adventTeacher, americorps, irdTeacher, scuRA, scuDegree]
    }
];
