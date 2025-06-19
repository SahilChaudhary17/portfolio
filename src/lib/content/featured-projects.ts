import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'AuthentiCert',
      description: 'A credential verification system for the digital era.',
      tasks:
        'Independently designed and developed the entire platform from concept to deployment, implementing JWT authentication, creating a responsive UI with Tailwind, and building a scalable certificate generation system with secure verification features.',
      url: 'https://authenticert.vercel.app/',
      img: '/authenticert1.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'JWT'],
    },
    // {
    //   id: getId(),
    //   name: 'uProposalGpt',
    //   description: 'The AI-powered platform that simplifies proposal creation.',
    //   tasks:
    //     'Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.',
    //   url: 'https://www.uproposalgpt.com/',
    //   img: 'https://user-images.githubusercontent.com/68834718/279469731-be163482-20cd-4cb3-8bcb-bbb2c1a345b8.png',
    //   tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    // },
  ],
};

export default featuredProjectsSection;
