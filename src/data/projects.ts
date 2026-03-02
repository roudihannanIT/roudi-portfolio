export type Project = {
  id: string;
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
    id: "projectID",
    title: "project title",
    shortDescriptionKey: "project shortDescriptionKey",
    descriptionKey: "project descriptionKey",
    image: "project image",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "github link",
    liveUrl: "live link"
  },
  {
    id: "projectID2",
    title: "project2 title",
    shortDescriptionKey: "project2 shortDescriptionKey",
    descriptionKey: "project2 descriptionKey",
    image: "project2 image",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "github link",
    liveUrl: "live link"
  },
  {
    id: "projectID3",
    title: "project3 title",
    shortDescriptionKey: "project3 shortDescriptionKey",
    descriptionKey: "project3 descriptionKey",
    image: "project3 image",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "github link",
    liveUrl: "live link"
  }
];