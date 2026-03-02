export type Project = {
  id: number | string;
  title: string;
  shortDescriptionKey: string;
  descriptionKey: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    shortDescriptionKey: "project1.shortDescriptionKey",
    descriptionKey: "project1.descriptionKey",
    image: "/projects/project1.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    id: 2,
    title: "Project Two",
    shortDescriptionKey: "project2.shortDescriptionKey",
    descriptionKey: "project2.descriptionKey",
    image: "/projects/project2.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
];