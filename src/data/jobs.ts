import parseISO from 'date-fns/parseISO';

import { Job, Org } from 'models/experience';
import { Tech } from 'models/tech';

export const buoySoftwareEngineer: Job = {
    company: Org.ST,
    title: 'Senior Software Engineer',
    team: 'Care Marketplace Team',
    technologies: [Tech.PYTHON, Tech.DJANGO, Tech.REACT, Tech.AWS, Tech.STORYBOOK, Tech.K8S],
    startDate: parseISO('2020-06'),
    description: `At Buoy, I'm a part of the small team responsible for directing our users
        to whatever healthcare providers best fit their needs. It's a full-stack role revolving
        around a number of Javascript frontends and Django microservices.`
};

export const stSoftwareEngineer: Job = {
    company: Org.ST,
    title: 'Software Engineer',
    team: 'Sites Team',
    technologies: [Tech.TS, Tech.REACT, Tech.SPRING_BOOT, Tech.AWS, Tech.REDIS, Tech.STORYBOOK],
    startDate: parseISO('2017-12'),
    endDate: parseISO('2020-05'),
    description: `As a Full Stack Software Engineer at SmarterTravel, I work on the small team that 
            develops and maintains a large network of travel content sites. There I most recently led the 
            effort to incrementally modernize 
            <a href="https://www.airfarewatchdog.com" target="_blank" rel="noopener">Airfarewatchdog</a>’s 
            frontend using React, Typescript, and Storybook. I work closely with product to scope and
            implement features across the stack, from our many Java Spring Boot services to our data ETLs
            and pipelines. I have also worked on our CI pipelines and assisted in the move towards Amazon AWS.`
};

export const stIntegrationEngineer: Job = {
    company: Org.ST,
    title: 'Integration Engineer',
    team: 'SmarterAds Team',
    technologies: [Tech.ES6, Tech.REACT, Tech.SPRING_BOOT, Tech.KAFKA, Tech.REDIS],
    startDate: parseISO('2016-05'),
    endDate: parseISO('2017-12'),
    description: `I initially joined SmarterTravel as an Integration Engineer on our ad syndication team. I
            started by writing custom JavaScript for new partners that would make it trivial to 
            integrate their sites’ with our platform. I quickly moved on to contribute new features and 
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

export const tuftsRA: Job = {
    company: Org.TUFTS,
    title: 'Research Assistant',
    startDate: parseISO('2011-09'),
    endDate: parseISO('2011-12'),
    description: `I helped Professor Kelsey Jack analyze field experiment data to understand the impact of local 
        leaders’ actions upon the contribution of public goods by community members. I did so by coding the econometric 
        analysis and preparing summaries of results. The results have since been published in the Journal of 
        Public Economics under the title “Leadership and the voluntary provision of public goods: Field 
        evidence from Bolivia.”`
};

export const tuftsTA: Job = {
    company: Org.TUFTS,
    title: 'Teaching Assistant',
    startDate: parseISO('2010-09'),
    endDate: parseISO('2011-12'),
    description: `In this role, I taught weekly sessions of Principles of Economics and tutored undergraduates on
        fundamental concepts of micro and macroeconomics. I also served as the department tutor for all graduate 
        and undergraduate courses.`
};

export const nprIntern: Job = {
    company: Org.NPR,
    title: 'Intern',
    team: 'Planet Money',
    startDate: parseISO('2011-06'),
    endDate: parseISO('2011-09'),
    description: `I spent a summer on NPR’s Planet Money team conducting research for stories, editing interviews for 
        radio, and contributing to their blog.`
};

export const adventTeacher: Job = {
    company: Org.ADVENT,
    title: 'Teacher',
    startDate: parseISO('2009-09'),
    endDate: parseISO('2010-08'),
    description: `I was an after-school teacher for the Advent School. In that role, I wrote and taught a year-long 
        curriculum for the arts and crafts class for students from Early Childhood to Second Grade.`
};

export const americorps: Job = {
    company: Org.RT,
    title: 'Americorps Outreach Coordinator',
    startDate: parseISO('2009-01'),
    endDate: parseISO('2009-09'),
    description: `I was an Americorps member at Rebuilding Together Boston. In that role, I developed and began the
        implementation of a multi-year plan to inform the community of our services. I worked with dozens of community
        partners and conducted presentations for non-profits, elected officials, city agencies, and neighborhood
        associations.`
};

export const irdTeacher: Job = {
    company: Org.IRD,
    title: 'Teacher',
    startDate: parseISO('2008-06'),
    endDate: parseISO('2008-09'),
    description: `I spent a summer teaching reading courses to students ranging from preschoolers to working adults.
        This work involved traveling weekly to teaching sites in California, Oregon, and Washington.`
};

export const scuRA: Job = {
    company: Org.SCU,
    title: 'Research Assistant',
    startDate: parseISO('2006-06'),
    endDate: parseISO('2006-08'),
    description: `I spent a summer working with Professor Glenn Appleby to implement in Matlab an algorithm he 
        developed to calculate specific invariants in matrices.
`
};

export const samaritans: Job = {
    company: Org.SAMARITANS,
    title: 'Crisis Line Volunteer & Mentor',
    startDate: parseISO('2004-01')
};
