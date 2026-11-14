import { ExperienceSectionType } from '@/lib/types/sections'

export const experienceSection: ExperienceSectionType = {
    title: "what experience i've had",
    // title: "where i've worked",
    experiences: [
    {
        company: 'Infosys Limited',
        companyUrl: 'https://www.infosys.com/',
        role: 'Specialist Programmer',
        started: 'August 2025',
        upto: 'present',
        tasks: [
        'Delivered an enterprise RAG cybersecurity assistant used by 6,400+ people, where only 1 in 57 questions needs a human cyber expert.',
        'Deployed the product in the client\'s Azure environment with Azure DevOps CI/CD, Azure AI Foundry, and Microsoft Entra ID.',
        'Established AI-assisted workflows with GitHub Copilot, Cursor, and Claude Code, including a PR reviewer, cutting delivery from 10-14 days to 3-4 days.',
        'Migrated the frontend from Angular to React independently, from the first screen through production.',
        'Recognized with the STG Rise Award for Rookie of the Quarter (Jan-Mar 2026) for automation work and UX improvements on every release.',
        'Awarded the Rise Insta Award for client appreciation (Sep 2026) for the Angular to React migration.',
        ],
    },
    {
        company: 'Vellore Institute of Technology',
        companyUrl: 'https://vitbhopal.ac.in/',
        role: 'B.Tech in Computer Science and Engineering',
        started: 'September 2021',
        upto: 'May 2025',
        tasks: [
        'Graduated with a cumulative GPA of 9.18 / 10.',
        'Won first place at the Ideathon (Feb 2024) among 25 teams for the ResuMate project.',
        'Reached the final stage of Hack Data, a 24-hour hackathon by ACM Delhi, competing against 500 teams.',
        'Led the Student Council and organizing committee for the annual techno-cultural fest (11K+ attendees, 90+ events).',
        'Honoured to receive a Letter of Appreciation from the Vice Chancellor for my contributions.',
        ],
    },
    {
        company: 'Podar International School',
        companyUrl: 'https://podareducation.org/',
        role: 'Higher Secondary Education and below',
        started: 'April 2013',
        upto: 'March 2021',
        tasks: [
        'Passed with 95% marks in Computer Science stream.',
        'Served on the Student Council as president, vice-president, and discipline head across five years.',
        'Participated in co-curricular activities including cricket and karate.',
        ],
    },
    ],
};