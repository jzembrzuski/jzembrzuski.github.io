import {
  DownloadIcon
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '/denver_hike.jpeg';
import {
  Hero,
  HomepageMeta, Social, TimelineItem
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
  imageSrc: heroImage,
  name: `Jake Zembrzuski`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a software engineer currently employed
        as a predominantly Java engineer at <strong className="text-stone-100">Cengage Group</strong> working on the Mindtap School platform. I've had 
        over three years of professional experience in both the private and public education and healthcare industries. 
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
    title: 'NYS Dept of ITS',
    content: (
      <p>
        Dept of ITS.
      </p>
    ),
  }
];

export const education: TimelineItem[] = [
  {
    date: 'July 2018 - January 2019',
    location: 'Albany, NY',
    title: 'St Rose',
    content: (
      <p>
       School
      </p>
    ),
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2021 - Present',
    location: 'Remote',
    title: 'Cengage Group',
    content: (
      <p>
        MTS
      </p>
    ),
  },
  {
    date: 'May 2019 - October 2019',
    location: 'Albany, NY',
    title: 'NYS Dept of Education',
    content: (
      <p>
        Dept of Ed.
      </p>
    ),
  }
];


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jzembrzuski'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jake-zembrzuski-9b424a191/'}
];
