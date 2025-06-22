import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    projects: [
    {
        id: getId(),
        name: "AD Early Prediction",
        url: 'https://github.com/SahilChaudhary17/G28-AlzheimersResViT',
        repo: 'https://github.com/SahilChaudhary17/G28-AlzheimersResViT',
        img: 'https://raw.githubusercontent.com/SahilChaudhary17/portfolio/main/public/ADArchitecture.png',
        year: 2025,
        tags: ['Python', 'TensorFlow', 'ViT'],
    },
    {
        id: getId(),
        name: 'Complaint Desk',
        url: 'https://swdportal.vercel.app/',
        repo: 'https://github.com/SahilChaudhary17',
        img: 'https://raw.githubusercontent.com/SahilChaudhary17/portfolio/main/public/swdpDashboard.png',
        year: 2024,
        tags: ['NextJs', 'MongoDB', 'JWT'],
    },
    {
        id: getId(),
        name: 'ResuMate',
        url: 'https://resu-mate.vercel.app/',
        repo: 'https://github.com/SahilChaudhary17',
        img: 'https://raw.githubusercontent.com/SahilChaudhary17/portfolio/main/public/ResuMateHomePage.png',
        year: 2024,
        tags: ['html', 'CSS', 'JS'],
    },
    ],
};