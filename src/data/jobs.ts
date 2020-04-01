import { parse } from 'date-and-time';

import { Company, Job, Phase } from 'models/career';
import { Tech } from 'models/tech';

export const JOBS: Job[] = [
    {
        company: Company.ST,
        title: 'Software Engineer',
        team: 'Sites Team',
        description: `As a Full Stack Software Engineer at SmarterTravel, I work on the small team that 
            develops and maintains a large network of travel content sites. There I most recently led the 
            effort to incrementally modernize 
            <a href="https://www.airfarewatchdog.com" target="_blank" rel="noopener">Airfarewatchdog</a>’s 
            frontend using React, Typescript, and Storybook. I work closely with product to scope and
            implement features across the stack, from our many Java Spring Boot services to our data ETLs
            and pipelines. I have also worked on our CI pipelines and assisted in the move towards Amazon AWS.`,
        technologies: [Tech.TS, Tech.REACT, Tech.SPRING_BOOT, Tech.AWS, Tech.REDIS, Tech.STORYBOOK],
        startDate: parse('12-2017', 'MM-YYYY') as Date,
        phase: Phase.ENGINEERING
    },
    {
        company: Company.ST,
        title: 'Integration Engineer',
        team: 'SmarterAds Team',
        description: `I initially joined SmarterTravel as an Integration Engineer on our ad syndication team. I
            started by writing custom JavaScript for new partners that would make it trivial to 
            integrate their sites’ with our platform. I quickly moved on to contribute new features and 
            products across the stack, developing on our frontend SDK, our React admin tools, and our 
            backend Spring Boot syndication service.`,
        technologies: [Tech.ES6, Tech.REACT, Tech.SPRING_BOOT, Tech.KAFKA, Tech.REDIS],
        startDate: parse('05-2016', 'MM-YYYY') as Date,
        endDate: parse('12-2017', 'MM-YYYY') as Date,
        phase: Phase.ENGINEERING
    }
];
