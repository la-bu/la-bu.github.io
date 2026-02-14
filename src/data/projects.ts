export interface Project {
  name: string;
  description: string;
  github?: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'la-bu.github.io',
    description: 'Personal blog and portfolio built with Astro 5, MDX, and plain CSS. Deployed to GitHub Pages.',
    github: 'https://github.com/la-bu/la-bu.github.io',
    tags: ['Astro', 'TypeScript', 'CSS', 'MDX'],
  },
  {
    name: 'Placeholder Project',
    description: 'A placeholder for a future project. Update this with your real work.',
    tags: ['TypeScript', 'Node.js'],
  },
];

export const skills: string[][] = [
  ['TypeScript', 'JavaScript', 'Python'],
  ['Astro', 'React', 'Node.js'],
  ['CSS', 'HTML', 'Git'],
];
