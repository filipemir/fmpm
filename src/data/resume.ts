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
    scuRA,
    stIntegrationEngineer,
    stSoftwareEngineer,
    tuftsRA,
    tuftsTA
} from 'data/jobs';
import { scuDegree, tuftsDegree } from 'data/degrees';
import adventLogo from 'images/advent.png';
import irdLogo from 'images/ird.png';
import nprLogo from 'images/npr.png';
import rtLogo from 'images/rt.png';
import scuLogo from 'images/scu.png';
import tuftsLogo from 'images/tufts.png';
import stLogo from 'images/st.png';
import launchLogo from 'images/launch.png';
import crLogo from 'images/cr.png';

const ST: Tenure = {
    company: Org.ST,
    jobs: [stSoftwareEngineer, stIntegrationEngineer],
    logo: stLogo
};

const Launch: Tenure = {
    company: Org.LAUNCH,
    jobs: [launchAcademy],
    logo: launchLogo
};

const CR: Tenure = {
    company: Org.CR,
    jobs: [crbResearchAssociate, crbSeniorAnalyst, crbAnalyst],
    logo: crLogo
};

const Tufts: Tenure = {
    company: Org.TUFTS,
    jobs: [tuftsRA, tuftsTA],
    logo: tuftsLogo
};

const NPR: Tenure = {
    company: Org.NPR,
    jobs: [nprIntern],
    logo: nprLogo
};

const Advent: Tenure = {
    company: Org.ADVENT,
    jobs: [adventTeacher],
    logo: adventLogo
};

const RT: Tenure = {
    company: Org.RT,
    jobs: [americorps],
    logo: rtLogo
};

const IRD: Tenure = {
    company: Org.IRD,
    jobs: [irdTeacher],
    logo: irdLogo
};

const SCU: Tenure = {
    company: Org.SCU,
    jobs: [scuRA],
    logo: scuLogo
};

export const RESUME: Resume = {
    [ResumeSection.EXPERIENCE]: [
        { name: CareerPhaseName.ENGINEERING, tenures: [ST, Launch] },
        { name: CareerPhaseName.CONSULTING, tenures: [CR] },
        { name: CareerPhaseName.OTHER, tenures: [Tufts, NPR, Advent, RT, IRD, SCU] }
    ],
    [ResumeSection.EDUCATION]: [tuftsDegree, scuDegree]
};
