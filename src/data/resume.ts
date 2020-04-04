import { CareerPhaseName, Org, Resume, ResumeSection, Tenure } from 'models/experience';
import {
    adventTeacher,
    americorps,
    crbAnalyst,
    crbResearchAssociate,
    crbSeniorAnalyst,
    irdTeacher,
    launchAcademy,
    nprIntern,
    samaritans,
    scuRA,
    stIntegrationEngineer,
    stSoftwareEngineer,
    tuftsRA,
    tuftsTA
} from 'data/jobs';
import { scuDegree, tuftsDegree } from 'data/degrees';

const ST: Tenure = {
    company: Org.ST,
    jobs: [stSoftwareEngineer, stIntegrationEngineer]
};

const Launch: Tenure = {
    company: Org.LAUNCH,
    jobs: [launchAcademy]
};

const CR: Tenure = {
    company: Org.CR,
    jobs: [crbResearchAssociate, crbSeniorAnalyst, crbAnalyst]
};

const Tufts: Tenure = {
    company: Org.TUFTS,
    jobs: [tuftsRA, tuftsTA]
};

const NPR: Tenure = {
    company: Org.NPR,
    jobs: [nprIntern]
};

const Advent: Tenure = {
    company: Org.ADVENT,
    jobs: [adventTeacher]
};

const RT: Tenure = {
    company: Org.RT,
    jobs: [americorps]
};

const IRD: Tenure = {
    company: Org.IRD,
    jobs: [irdTeacher]
};

const SCU: Tenure = {
    company: Org.SCU,
    jobs: [scuRA]
};

const Samaritans: Tenure = {
    company: Org.SAMARITANS,
    jobs: [samaritans]
};

export const RESUME: Resume = {
    [ResumeSection.EXPERIENCE]: [
        { name: CareerPhaseName.ENGINEERING, tenures: [ST, Launch] },
        { name: CareerPhaseName.CONSULTING, tenures: [CR] },
        { name: CareerPhaseName.OTHER, tenures: [Tufts, NPR, Advent, RT, IRD, SCU] }
    ],
    [ResumeSection.VOLUNTEERING]: [Samaritans],
    [ResumeSection.EDUCATION]: [tuftsDegree, scuDegree]
};
