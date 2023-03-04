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
    href: 'https://www.bentonlake.dev', 
    github: 'https://github.com/bentonlake/personal-website',
    favicon: '/main_favicon.png',
    toolchain: [ 'Next.JS', 'TypeScript', 'TailwindCSS', 'Git', 'Firebase', 'Cloud Run', 'G Cloud' ],
  },
  {
    name: 'Pickle for the Unknowing',
    description: 'A blog of brief lectures about whatever I happen to find interesting at the time. Content ranges from the science of the refrigeration cycle to discussion on the future of electric cars. A marketplace for my freeflowing ideas, opinions, and ponderings. This blog will eventually be moved off of the main site and onto a subdomain, prompting the second project item.',
    href: 'https://pickle.bentonlake.dev',
    github: 'https://github.com/bentonlake/pickle-for-the-unknowing',
    favicon: '/pickle_favicon.png',
    toolchain: [ 'Next.JS', 'TypeScript', 'TailwindCSS', 'Git', 'Firebase', 'Cloud Run', 'G Cloud' ],
  },
]

export default PROJECTS; 