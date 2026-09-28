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
    title: "pro-booker-backend",
    shortDescriptionKey: "project1.shortDescriptionKey",
    descriptionKey: "project1.descriptionKey",
    image: "/probooker-image.png",
    techStack: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Clean Architecture",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Jest"
    ],
    githubUrl: "https://github.com/roudihannanIT/pro-booker-backend",
    liveUrl: ""
  }
];