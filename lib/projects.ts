import { Tool } from "./tool";

export interface Project {
  name: string;
  description: string;
  href: string;
  github: string;
  favicon: string;
  toolchain: Tool[];
}

const PROJECTS: Project[] = [
  { 
    name: 'My Personal Website', 
    description: 'This very website was my first major venture into a larger personal project! It employs severable scalable, production-ready technologies built for the cloud and almost serves as a testing ground for new tools that I\'d like to try out.', 
    href: 'https://bentonlake.dev', 
    github: 'https://github.com/bentonlake/personal-website',
    favicon: '/android-chrome-192x192.png',
    toolchain: [ 'Next.JS', 'TypeScript', 'TailwindCSS', 'Git', 'Firebase', 'Cloud Run', 'G Analytics', 'G Cloud' ],
  },
  {
    name: '🥒 for the unknowing.',
    description: 'A blog of brief lectures about whatever I happen to find interesting at the time. Content ranges from the science of the refrigeration cycle to discussion on the future of electric cars. A marketplace for my freeflowing ideas, opinions, and ponderings. This blog will eventually be moved off of the main site and onto a subdomain, prompting the second project item.',
    href: 'https://google.com',
    github: 'https://github.com/bentonlake/personal-website',
    favicon: '/android-chrome-192x192.png',
    toolchain: [],
  },
]

export default PROJECTS; 