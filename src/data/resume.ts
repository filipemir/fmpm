import {
    CareerPhaseName,
    Org,
    Resume,
    ResumeSection,
    Tenure
} from 'models/experience';
import {
    buoyLeadEngineer,
    buoySoftwareEngineer,
    chSeniorSe,
    crbAnalyst,
    crbResearchAssociate,
    crbSeniorAnalyst,
    launchAcademy,
    stIntegrationEngineer,
    stSoftwareEngineer
} from 'data/jobs';
import { scuDegree, tuftsDegree } from 'data/degrees';
import stLogo from 'images/logos/st.png';
import launchLogo from 'images/logos/launch.png';
import crLogo from 'images/logos/cr.png';
import buoyLogo from 'images/logos/buoy.jpeg';
import chLogo from 'images/logos/ch.jpeg';

const CH: Tenure = {
    company: Org.CH,
    jobs: [chSeniorSe],
    url: 'https://www.charliehealth.com',
    logo: chLogo,
    description: `Charlie Health provides mental health treatment for teens, young 
        adults & families in crisis.`
};

const Buoy: Tenure = {
    company: Org.BUOY,
    jobs: [buoyLeadEngineer, buoySoftwareEngineer],
    logo: buoyLogo,
    url: 'https://www.buoyhealth.com/',
    description: `Buoy is a self-diagnosis tool and health care marketplace 
        that helps people understand might be wrong and where they 
        can go for care.`
};

const ST: Tenure = {
    company: Org.ST,
    jobs: [stSoftwareEngineer, stIntegrationEngineer],
    logo: stLogo,
    url: 'https://www.wearesmartertravel.com/',
    description: `SmarterTravel was a subsidiary of TripAdvisor that owned and 
        operated a large network of travel-content sites as well as a leading
        travel ad network. I worked across the stack on both sides of the business
        during my four years there.`
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

export const RESUME: Resume = {
    [ResumeSection.EXPERIENCE]: [
        { name: CareerPhaseName.ENGINEERING, tenures: [CH, Buoy, ST, Launch] },
        { name: CareerPhaseName.OTHER, tenures: [CR] }
    ],
    [ResumeSection.EDUCATION]: [tuftsDegree, scuDegree]
};
