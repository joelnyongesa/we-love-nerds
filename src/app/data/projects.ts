import { Project } from "./project-model";

const projects: Project[] = [
    {
        name: "E-Commerce App",
        industry: "E-Commerce",
        description: "Revolutionized online shopping experience with a visually appealing and user-friendly interface.",
        technologies: ["Angular", "HTML", "CSS"]
    },
    {
        name: 'Finance Navigator',
        industry: 'Finance',
        description:
          'Crafted dynamic dashboards and data visualization tools for real-time financial insights.',
        technologies: ['Angular', 'D3.js', 'Bootstrap'],
      },
      {
        name: 'Healthcare Hub',
        industry: 'Healthcare',
        description:
          'Developed intricate medical software interfaces ensuring compliance and data security.',
        technologies: ['Angular', 'RxJS', 'Material Design'],
      },
      {
        name: 'Entertainment Extravaganza',
        industry: 'Entertainment',
        description:
          'Enhanced user engagement on gaming platforms and streaming services with immersive interfaces.',
        technologies: ['Angular', 'Three.js', 'SASS'],
      },
];

export { projects };