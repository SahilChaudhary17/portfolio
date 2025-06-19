import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Developing end-to-end applications with React, Next.js, and TypeScript for optimal performance',
        'Building scalable backend architectures with Node.js, Express, and MongoDB',
        // 'Deploying and managing cloud infrastructure with AWS',
        'Creating responsive UIs with Tailwind CSS that work across all devices',
        'Implementing efficient RESTful APIs with server-side rendering capabilities',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javascript', icon: 'logos:javascript' },
        { name: 'typescript', icon: 'logos:typescript-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'express', icon: { light: 'devicon:express', dark: 'skill-icons:expressjs-light' } },
        { name: 'mongodb', icon: 'devicon:mongodb' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'C++', icon: 'vscode-icons:file-type-cpp' },
        // { name: 'figma', icon: 'logos:figma' },
        { name: 'AWS', icon: { light: 'logos:aws', dark: 'skill-icons:aws-light' } },
        ],
    },
    {
        id: getId(),
        title: 'UI/UX designing',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in creating user-friendly interfaces with Figma',
        'Developing design systems that ensure consistency across platforms',
        'Applying user-centered design principles to enhance user experience',
        // 'Translating design concepts into developer-friendly specifications',
        ],
        softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        // { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        // { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    ],
};
