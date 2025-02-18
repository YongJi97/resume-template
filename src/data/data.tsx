import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import qingwang from '../images/qingwang.jpg';
import profilepic from '../images/snowboard.jpg';
import heroImage from '../images/snowmountain.png';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yong Ji Chen Resume',
  description: 'Welcome to my resume.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yong Ji Chen.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a NYC based <strong className="text-stone-100">Native C++/Full Stack Software Engineer</strong>, currently
        working at <strong className="text-stone-100">Here</strong> helping build a modern Enterprise Browser.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me honing my <strong className="text-stone-100">snowboarding skills</strong>
        , <strong className="text-stone-100">building keyboards</strong>, or looking for new ways to{' '}
        <strong className="text-stone-100">self host services</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

const age =
  new Date().getFullYear() - 1997 - (new Date().setFullYear(new Date().getFullYear(), 3, 23) > Date.now() ? 1 : 0);

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a software engineer with a passion for building innovative solutions. I have experience in developing applications using C++, React, and Node.js. I am always eager to learn new technologies and improve my skills.`,
  aboutItems: [
    {label: 'Location', text: 'New York, NY', Icon: MapIcon},
    {label: 'Age', text: `${age}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese / American', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboard, Keyboard, Photography, Drone Flying', Icon: SparklesIcon},
    {label: 'Study', text: 'University At Buffalo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Here', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
    ],
  },
  {
    name: 'Native Development',
    skills: [
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'STL',
        level: 7,
      },
      {
        name: 'Google Test',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015',
    location: 'University At Buffalo',
    title: 'Bachelors of Science in Computer Science',
    content: (
      <p>
        <strong>CSE 115LLR</strong> - Introduction to Computer Science I<br />
        <strong>CSE 116LLB</strong> - Introduction to Computer Science II
        <br />
        <strong>CSE 191LR</strong> - Introduction to Discrete Structures
        <br />
        <strong>CSE 199SR</strong> - UB Seminar
        <br />
        <strong>CSE 220LLB</strong> - Systems Programming
        <br />
        <strong>CSE 250LR</strong> - Data Structures
        <br />
        <strong>CSE 305LR</strong> - Introduction to Programming Languages
        <br />
        <strong>CSE 331LR</strong> - Algorithms and Complexity
        <br />
        <strong>CSE 341LR</strong> - Computer Organization
        <br />
        <strong>EAS 360LEC</strong> - STEM Communications
        <br />
        <strong>MTH 141LR</strong> - College Calculus I<br />
        <strong>MTH 142LR</strong> - College Calculus II
        <br />
        <strong>MTH 309LR</strong> - Introductory Linear Algebra
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2023 - Present',
    location: 'Here',
    title: 'Software Engineer',
    content: (
      <p>
        I developed new features for Here Browser, enabling users to integrate custom search providers. I implemented
        APIs and configurations to support MPEG LA codec playback and Entra SSO for Microsoft. Additionally, I improved
        logging bottlenecks by creating a new solution using easylogging++, allowing for larger log sizes and extended
        application runtime.
      </p>
    ),
  },
  {
    date: 'October 2022 - September 2023',
    location: 'Haven Technologies',
    title: 'Fullstack Developer',
    content: (
      <p>
        I developed and enhanced underwriting workflows and rules to assess customer risk, increasing SaaS coverage and
        improving client integration flexibility. I resolved multiple defects, improving the underwriting engine’s
        accuracy and reducing false positives by 5%. Utilizing DBeaver, I queried over 100k+ in-force policies to create
        data visualizations that supported data-driven product decisions. I implemented a feature to fetch and persist
        government identification in newly created database tables, integrating it with AngularJS and RxJS on the
        frontend. Additionally, I built APIs to parse new policy application fields and transform them into Haven’s
        custom specification, increasing ACCORD standardization coverage by 2%.
      </p>
    ),
  },
  {
    date: 'June 2019 - October 2022',
    location: 'OpenFin',
    title: 'Software Engineer',
    content: (
      <p>
        I developed and maintained a multithreaded desktop agent using C++11, currently running on over 45,000 desktops
        at banks and financial institutions. I reduced latency and optimized critical paths in the code by identifying
        and eliminating bottlenecks, improving startup time. I enhanced a self-installing feature used by 85% of
        clients, enabling custom deployments based on client needs. I also managed the deployment of new product
        versions via auto-update, instantly deploying updates across 10,000+ desktops. I created data visualizations in
        Grafana to track installation, feature usage, and health statistics, reducing internal support queries.
        Additionally, I developed a fallback mechanism for unmanaged desktop environments to ensure consistent
        deployment and user experience. I migrated the legacy testing framework to MochaJS and integrated it with GitLab
        CI/CD, improving test coverage and visibility.
      </p>
    ),
  },
  {
    date: 'Janurary 2018 - December 2018',
    location: 'Group Nine Media',
    title: 'QA Engineer Intern',
    content: (
      <p>
        Worked with the test automation team to write end to end integration tests using Robot Framework. Gathered
        necessary test scenarios and steps from manual QA testers and automated them.
      </p>
    ),
  },
  {
    date: 'June 2017 - August 2017',
    location: 'Code Nation',
    title: 'Coding Instructor',
    content: <p>Taught two groups of 20 students each on how to code in HTML, CSS and JavaScript.</p>,
  },
  {
    date: 'June 2016 - August 2016',
    location: 'Hudson Guild',
    title: 'Coding Instructor',
    content: <p>Taught a group of 10 students how to code in HTML, CSS and JavaScript.</p>,
  },
  {
    date: 'June 2015 - August 2015',
    location: 'American Express',
    title: 'Software Developer Intern',
    content: <p>Wrote end to end integration tests using AngularJS.</p>,
  },
  {
    date: 'June 2014 - August 2014',
    location: 'Group Nine Media',
    title: 'Software Developer Intern',
    content: (
      <p>
        Worked with design team to revamp the company's contact page. Utilized technologies such as PHP, HTML and CSS.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Qing Wang',
      text: `I have had the pleasure of working with Yongji on the UWCI team for the past year. Yongji is a quick learner who is always eager to take on new challenges. He is also a proactive team member who is always willing to help others. Yongji has made significant contributions to the team, including:
- Volunteering to lead a project to improve the team's code review process
- Asking thoughtful questions that have helped the team solve complex problems
- Consistently delivering high-quality code that is clean, efficient, and easy to understand.
I am confident that Yongji would be an asset to any team. He is a hard worker, a quick learner, and a team player. I highly recommend him for any software engineering position.',
`,
      image: qingwang,
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please shoot me an email if you have any questions',
  items: [
    {
      type: ContactType.Email,
      text: 'yongjichen97@gmail.com',
      href: 'mailto:yongjichen97@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'yongji97',
      href: 'https://github.com/yongji97',
    },
    {
      type: ContactType.LinkedIn,
      text: 'yongjichen',
      href: 'https://www.linkedin.com/in/yongjichen/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YongJi97'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yongjichen/'},
];
