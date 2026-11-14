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
        'Building product experiences with React, TypeScript, and Next.js, including a full Angular-to-React migration',
        'Developing Python APIs and end-to-end applications with Node.js, Express, Flask, and MongoDB',
        'Shipping on Azure with Azure DevOps, Azure AI Foundry, and Microsoft Entra ID',
        'Using AI-assisted workflows with GitHub Copilot, Cursor, and Claude Code to deliver faster',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javascript', icon: 'logos:javascript' },
        { name: 'typescript', icon: 'logos:typescript-icon' },
        { name: 'angular', icon: 'logos:angular-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'express', icon: { light: 'devicon:express', dark: 'skill-icons:expressjs-light' } },
        { name: 'mongodb', icon: 'devicon:mongodb' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'flask', icon: 'logos:flask' },
        { name: 'C++', icon: 'vscode-icons:file-type-cpp' },
        { name: 'azure devops', icon: 'vscode-icons:file-type-azure' },
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
        'Data visualization and dashboards with Tableau where analytics add value',
        ],
        softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'tableau', icon: 'logos:tableau' },
        { name: 'jira', icon: 'logos:jira' },
        // { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        // { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    ],
};
