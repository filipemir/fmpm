import { CareerPhase, Company, Phase, School, Tenure } from 'models/experience';
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

const ST: Tenure = {
    company: Company.ST,
    experiences: [stSoftwareEngineer, stIntegrationEngineer]
};

const Launch: Tenure = {
    company: School.LAUNCH,
    experiences: [launchAcademy]
};

const CR: Tenure = {
    company: Company.CR,
    experiences: [crbResearchAssociate, crbSeniorAnalyst, crbAnalyst]
};

const Tufts: Tenure = {
    company: School.TUFTS,
    experiences: [tuftsRA, tuftsTA, tuftsDegree]
};

const NPR: Tenure = {
    company: Company.NPR,
    experiences: [nprIntern]
};

const Advent: Tenure = {
    company: Company.ADVENT,
    experiences: [adventTeacher]
};

const RT: Tenure = {
    company: Company.RT,
    experiences: [americorps]
};

const IRD: Tenure = {
    company: Company.IRD,
    experiences: [irdTeacher]
};

const SCU: Tenure = {
    company: School.SCU,
    experiences: [scuRA, scuDegree]
};

export const CAREER: CareerPhase[] = [
    { name: Phase.ENGINEERING, tenures: [ST, Launch] },
    { name: Phase.CONSULTING, tenures: [CR] },
    { name: Phase.OTHER, tenures: [Tufts, NPR, Advent, RT, IRD, SCU] }
];
