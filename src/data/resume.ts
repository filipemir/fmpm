import {
    CareerPhaseName,
    Org,
    Resume,
    ResumeSection,
    Tenure
} from 'models/experience';
import {
    adventTeacher,
    americorps,
    buoyLeadEngineer,
    buoySoftwareEngineer,
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
import adventLogo from 'images/logos/advent.png';
import irdLogo from 'images/logos/ird.png';
import nprLogo from 'images/logos/npr.png';
import rtLogo from 'images/logos/rt.png';
import scuLogo from 'images/logos/scu.png';
import tuftsLogo from 'images/logos/tufts.png';
import stLogo from 'images/logos/st.png';
import launchLogo from 'images/logos/launch.png';
import crLogo from 'images/logos/cr.png';
import buoyLogo from 'images/logos/buoy.jpeg';

const Buoy: Tenure = {
    company: Org.BUOY,
    jobs: [buoyLeadEngineer, buoySoftwareEngineer],
    logo: buoyLogo,
    url: 'https://www.buoyhealth.com/',
    description: `Buoy is a digital health tool that aims to help people make 
        the best possible decisions about their health.`
};

const ST: Tenure = {
    company: Org.ST,
    jobs: [stSoftwareEngineer, stIntegrationEngineer],
    logo: stLogo,
    url: 'https://www.wearesmartertravel.com/',
    description: `SmarterTravel was a subsidiary of TripAdvisor that owned and 
        operated a large network of travel-content sites as well as the leading
        travel ad network. I was fortunate to work across the stack on both
        sides of the business during my four years there.`
};

const Launch: Tenure = {
    company: Org.LAUNCH,
    jobs: [launchAcademy],
    logo: launchLogo,
    url: 'https://launchacademy.com/'
};

const CR: Tenure = {
    company: Org.CR,
    jobs: [crbResearchAssociate, crbSeniorAnalyst, crbAnalyst],
    logo: crLogo,
    url: 'https://www.cornerstone.com/',
    description: `Cornerstone Research is an economic consulting firm that does research and analysis for expert
        witnesses who testify in commercial and financial legal cases. I wore a lot of different hats during my time
        there: team manager, researcher, analyst, even recruiter.`
};

const Tufts: Tenure = {
    company: Org.TUFTS,
    jobs: [tuftsRA, tuftsTA],
    logo: tuftsLogo,
    url: 'https://www.tufts.edu/'
};

const NPR: Tenure = {
    company: Org.NPR,
    jobs: [nprIntern],
    logo: nprLogo,
    url: 'https://www.npr.org/sections/money/'
};

const Advent: Tenure = {
    company: Org.ADVENT,
    jobs: [adventTeacher],
    logo: adventLogo,
    url: 'https://adventschool.org/'
};

const RT: Tenure = {
    company: Org.RT,
    jobs: [americorps],
    logo: rtLogo,
    url: 'https://rebuildingtogether.org/'
};

const IRD: Tenure = {
    company: Org.IRD,
    jobs: [irdTeacher],
    logo: irdLogo,
    url: 'https://readingprograms.org/'
};

const SCU: Tenure = {
    company: Org.SCU,
    jobs: [scuRA],
    logo: scuLogo,
    url: 'https://www.scu.edu/'
};

export const RESUME: Resume = {
    [ResumeSection.EXPERIENCE]: [
        { name: CareerPhaseName.ENGINEERING, tenures: [Buoy, ST, Launch] },
        { name: CareerPhaseName.CONSULTING, tenures: [CR] },
        {
            name: CareerPhaseName.OTHER,
            tenures: [Tufts, NPR, Advent, RT, IRD, SCU]
        }
    ],
    [ResumeSection.EDUCATION]: [tuftsDegree, scuDegree]
};
