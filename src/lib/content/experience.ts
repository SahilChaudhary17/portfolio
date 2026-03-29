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
        'Developed a scalable frontend using Angular and TypeScript, with modular architecture, reusable components, and responsive UI.',
        'Designed and built an admin dashboard for a client to automate manual workflows, reducing operational effort through intuitive, UI-driven controls.',
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