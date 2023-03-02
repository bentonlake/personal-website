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
    name: 'Cillum esse proident veniam elit', 
    description: 'Lorem esse in in excepteur in consequat et. Proident esse proident tempor sit laborum amet nostrud non irure. Reprehenderit proident ex nisi eu consequat veniam excepteur pariatur et esse deserunt. Minim mollit consequat sunt amet ullamco in. Do veniam laboris magna dolor commodo consectetur deserunt. Irure consectetur enim laborum non cupidatat duis sint adipisicing. Consequat do duis dolore et et cupidatat reprehenderit.', 
    href: '#', 
    github: 'https://github.com/',
    favicon: '/icons/github.svg',
    toolchain: [ 'JavaScript', 'TypeScript' ],
  },
  { 
    name: 'Ad sunt cupidatat', 
    description: 'Dolore esse laboris do sit. Cillum ut nulla anim ipsum ad veniam do excepteur. Id enim consequat laboris occaecat mollit aute. Minim enim et ut labore est anim fugiat. Non do eiusmod eiusmod labore do. Aute non Lorem minim et amet labore id.', 
    href: '#', 
    github: 'https://github.com/',
    favicon: '/icons/github.svg',
    toolchain: [ 'Next.JS', 'JavaScript' ],
  },
  { 
    name: 'Tempor aliqua aute magna', 
    description: 'Deserunt aliqua qui eiusmod velit. Dolore laboris ut officia officia fugiat ipsum non pariatur esse. Veniam nisi ex commodo duis Lorem voluptate id dolore mollit ipsum laborum non excepteur veniam. Amet dolor laboris amet laborum dolore voluptate. Mollit sint qui irure sunt esse culpa laborum anim esse id consequat sint. Qui ex in nisi velit pariatur occaecat.', 
    href: '#', 
    github: 'https://github.com/',
    favicon: '/icons/github.svg',
    toolchain: [ 'TypeScript', 'Next.JS' ],
  },
  { 
    name: 'Dolor amet', 
    description: 'Consequat aliqua nisi aliquip do. Incididunt minim fugiat dolor commodo Lorem ullamco consectetur aliquip irure consectetur proident dolor anim ad. Minim pariatur pariatur eu ipsum et fugiat eiusmod proident ipsum occaecat. Anim culpa dolore ipsum exercitation ex velit cupidatat veniam dolore eiusmod ad quis mollit irure. Ipsum culpa et excepteur laborum fugiat aliqua. Minim labore do et officia dolor aliquip commodo mollit velit aliquip tempor officia elit. Ipsum aliquip ullamco elit adipisicing id.',
    href: '#', 
    github: 'https://github.com/',
    favicon: '/icons/github.svg',
    toolchain: [ 'TypeScript', 'Next.JS', 'JavaScript' ],
  },
]

export default PROJECTS; 