import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: "Hi, I'm",
    title: 'sahil chaudhary,',
    tagline: 'I deliver efficient and visually pleasing digital experiences.',
    // description:
    // "I'm a passionate Front-End web developer having an experience of web applications with React.js & Next.js with TypeScript & TailwindCSS and UI/UX designing.",
    specialText: '#Engineering Impact Beyond Code',
    cta: {
        title: 'My resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};