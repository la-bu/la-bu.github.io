export interface Project {
  name: string;
  description: string;
  github?: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "la-bu.github.io",
    description: "Personal blog and portfolio built with Astro 5, MDX, and plain CSS. Deployed to GitHub Pages.",
    github: "https://github.com/la-bu/la-bu.github.io",
    tags: ["Astro", "TypeScript", "CSS", "MDX"],
  },
  {
    name: "Coin Watcher",
    description: "Project for my Programmer Apprenticeship finals. Displays Crypro prices in real time.",
    github: "https://github.com/la-bu/coin-watcher",
    tags: ["Java", "Typescript", "React", "gRPC"],
  },
];

export const skills: string[][] = [
  ["Java", "TypeScript", "Kotlin"],
  ["Angular", "React", "Spring Boot", "Nest.js"],
  ["CSS", "HTML", "Git"],
];
