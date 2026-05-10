import parseISO from 'date-fns/parseISO';

import { Job, Org } from 'models/experience';
import { Tech } from 'models/tech';

export const chStaffPlatform: Job = {
    company: Org.CH,
    title: 'Staff Platform Engineer',
    technologies: [Tech.FASTAPI, Tech.POSTGRES, Tech.REMIX, Tech.AWS, Tech.TS],
    startDate: parseISO('2026-03'),
    description: `I joined Charlie Health as the first engineer and helped grow the team to 50+,
        recently moving from product engineering to platform. Highlights from my tenure:
        <ul>
            <li>Designed and built the foundational scheduling stack &mdash; appointment booking,
                group scheduling, and staffing &mdash; when these were missing pieces of the
                product. Have led its evolution since, most recently through an overhaul of the
                core appointment data model.</li>
            <li>Diagnosed our ETL-based sync of core client data as the root cause of our most
                costly outage, then designed and led the rollout of an event-driven replacement.
                Executed a dual-write migration with no incident, removing a major single point
                of failure and cutting data latency from 5+ minutes to seconds.</li>
            <li>Designed a service backed by an eagerly-populated cache to isolate our most
                critical workflow (clients joining their group sessions) from core system
                outages, cutting peak load on the main DB by ~50%.</li>
            <li>Set the technical strategy for consolidating our split monolith into a single
                application; authored the migration plan and am leading the execution.</li>
        </ul>
        Top code reviewer and documentation contributor in the org throughout my tenure.`
};

export const chLeadEngineer: Job = {
    company: Org.CH,
    title: 'Lead Software Engineer',
    startDate: parseISO('2023-09'),
    endDate: parseISO('2026-03')
};

export const chSeniorSe: Job = {
    company: Org.CH,
    title: 'Senior Software Engineer',
    startDate: parseISO('2022-02'),
    endDate: parseISO('2023-09')
};

export const buoyLeadEngineer: Job = {
    company: Org.ST,
    title: 'Lead Software Engineer',
    team: 'Care Marketplace Team',
    technologies: [
        Tech.PYTHON,
        Tech.DJANGO,
        Tech.REACT,
        Tech.AWS,
        Tech.STORYBOOK,
        Tech.K8S
    ],
    startDate: parseISO('2021-07'),
    endDate: parseISO('2022-02'),
    description: `I was a lead engineer on the team that directs people to the 
        most appropriate health care providers, working across the stack to 
        develop and release new user-facing features and products. 
        A large part of my role was that of an advocate for better 
        quality-assurance as the engineering organization grew. 
        In practice, that involved work like identifying and removing 
        roadblocks to wider adoption of automated testing and static analysis, 
        as well as educating teams on how to get the most out of these tools.`
};

export const buoySoftwareEngineer: Job = {
    company: Org.ST,
    title: 'Senior Software Engineer',
    team: 'Care Marketplace Team',
    startDate: parseISO('2020-06'),
    endDate: parseISO('2021-07')
};

export const stSoftwareEngineer: Job = {
    company: Org.ST,
    title: 'Software Engineer',
    team: 'Sites Team',
    technologies: [
        Tech.TS,
        Tech.REACT,
        Tech.SPRING_BOOT,
        Tech.AWS,
        Tech.REDIS,
        Tech.STORYBOOK
    ],
    startDate: parseISO('2017-12'),
    endDate: parseISO('2020-05'),
    description: `As a Full Stack Software Engineer at SmarterTravel, I worked
     on the small team that developed and maintained a large network of travel 
     content sites. There I worked on a number of new user-facing features and 
     led the migration of our main frontend application to React, a huge 
     productivity improvement from our ancient FlightJS  implementation.`
};

export const stIntegrationEngineer: Job = {
    company: Org.ST,
    title: 'Integration Engineer',
    team: 'SmarterAds Team',
    technologies: [
        Tech.ES6,
        Tech.REACT,
        Tech.SPRING_BOOT,
        Tech.KAFKA,
        Tech.REDIS
    ],
    startDate: parseISO('2016-05'),
    endDate: parseISO('2017-12'),
    description: `I initially joined SmarterTravel as an Integration Engineer on our ad syndication team. I
            started by writing custom JavaScript for new partners that would make it trivial to 
            integrate their sites with our platform. I quickly moved on to contribute new features and 
            products across the stack, developing on our frontend SDK, our React admin tools, and our 
            backend Spring Boot syndication service.`
};

export const launchAcademy: Job = {
    title: 'Full Stack Web Development Bootcamp',
    startDate: parseISO('2016-02'),
    endDate: parseISO('2016-05'),
    company: Org.LAUNCH,
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

export const crbResearchAssociate: Job = {
    company: Org.CR,
    title: 'Research Associate',
    startDate: parseISO('2014-01'),
    endDate: parseISO('2016-01'),
    description: `As a Research Associate at Cornerstone, I managed a team responsible for reviewing a mutual fund’s
        risk management procedures and remained in regular contact with our experts and clients. I also cleaned,
        maintained, and analyzed a large dataset on industry trading of interest-rate swaps. Finally, I also led the 
        recruitment efforts to hire 18 new analysts which involved training new interviewers, coordinating on-campus 
        events across New England, and personally interviewing over 100 candidates.`
};

export const crbSeniorAnalyst: Job = {
    company: Org.CR,
    title: 'Senior Analyst',
    startDate: parseISO('2013-07'),
    endDate: parseISO('2014-07'),
    description: `In this role, I managed a team of analysts responsible for reviewing hundreds of due diligence
        documents and for replicating results in an opposing expert’s reports. I collaborated closely with one of
        Cornerstone’s top experts to implement a statistical test that would detect improper trading by mutual fund
        managers. I also developed a hour-long interactive case presentation to introduce undergraduate students to
        economic consulting which has since been used firmwide.`
};

export const crbAnalyst: Job = {
    company: Org.CR,
    title: 'Analyst',
    startDate: parseISO('2012-01'),
    endDate: parseISO('2013-07'),
    description: `As an Analyst, I was responsible for completing financial and economic analyses and presenting
        my results to clients and experts. Some of these projects involved analyzing the creation and performance 
        of mortgage-backed securities, estimating the impact of the 2008 financial crisis on the performance of a 
        major family of mutual funds, and measuring the effect of a firm’s allegedly fraudulent marketing on the 
        sales of its primary competitor.`
};

export const samaritans: Job = {
    company: Org.SAMARITANS,
    title: 'Crisis Line Volunteer & Mentor',
    startDate: parseISO('2004-01')
};
