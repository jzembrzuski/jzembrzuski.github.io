import {
  DownloadIcon
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {
  Hero,
  HomepageMeta, Skills, Social, TimelineItem
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jake Zembrzuski Resume'
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  Resume: 'resume',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: '/denver_hike.jpeg',
  name: `Jake Zembrzuski`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a software engineer currently employed
        as a Java engineer at <strong className="text-stone-100">Cengage Group</strong> working on the Mindtap School platform. I've had
        over five years of professional experience in both the private and public education and healthcare industries.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    }
  ],
};


export const partTime: TimelineItem[] = [
  {
    date: 'July 2018 - January 2019',
    location: 'Albany, NY',
    title: 'NYS Dept of Information Technology Services',
    content: (
      <><p>
        • Converted lead exposure Perl application to Java
      </p><p>
          • Responded to and resolved user reported issues
        </p></>
    ),
  }
];

export const skills: Skills[] = [
  {
    
    languages: 'Java 17, TypeScript/HTML/CSS, SQL/CQL, Bash, Haskell',
    frameworks:'Spring Boot 2.7 .4,Apache CXF, Open Source Gateway Initiative (OSGI),Apache Karaf, React, Redux, Express.js, Node.js, NoSQL',
    other:'Cassandra, Git, Splunk, Dynatrace, CI/CD, Maven, Jira'
  }
];

export const education: TimelineItem[] = [
  {
    date: 'August 2016 - December 2018',
    location: 'Albany, NY',
    title: 'The College of Saint Rose',
    content: (
      <p>
B.S. Computer Science, Mathematics Minor      </p>
    ),
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - Present',
    location: 'Remote',
    title: 'Cengage Group',
    content: (
      <><p>
        • Design and develop the National Geographic Learning MindTap School platform used in
        schools throughout the world
      </p><br></br><p>
          • Cross-functionally collaborate with Project Managers, Product Owners, QA, Customers,
          and Dev-Ops for prioritization, development, and testing using Agile practices
        </p><br></br><p>
          • Help lead external assessment taking API Learnosity integration designing and
          implementing scoring solution as code owner of Spring Boot repository
        </p><br></br><p>
          • Design and implement job messaging system utilizing Apache Camel and Activemq to
          asynchronously deliver messages to mailbox system in UI via web socket
        </p><br></br><p>
          • Assist in conversion of application to Spring Boot from OSGI and move to a Jenkins CI/
          CD pipeline with Open Cloud Foundry resulting in $200k in annual savings
        </p><br></br><p>
          • Lead elastic search integration collaborating with UI tech lead
        </p><br></br><p>
          • Implement Redis cache for least performant REST APIs improving app load times more than 10x
        </p><br></br><p>
          • Mentor Junior Engineers
        </p></>
    ),
  },
  {
    date: 'May 2019 - October 2019',
    location: 'Albany, NY',
    title: 'NYS Dept of Education',
    content: (
      <><p>
        • Developed and maintained the State Aid Management System which is responsible for
        allocating and distributing funds for all public K-12 schools in New York
      </p><br></br><p>
          • Led development of state-wide school bus tracking system working on everything from
          back-end development and SQL data management to front-end design and
          implementation
        </p><br></br><p>
          • Provided input to Java architecture discussions and shared Java knowledge with staff
        </p><br></br></>
    ),
  }
];


/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/jzembrzuski' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jake-zembrzuski-9b424a191/' }
];
