import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

type ProjectsGridProps = {
  preview?: boolean;
};

export default function ProjectsGrid({ preview = false }: ProjectsGridProps) {
  const visibleProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          shortDescriptionKey={project.shortDescriptionKey}
          descriptionKey={project.descriptionKey}
          image={project.image}
          techStack={project.techStack}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          preview={preview}
        />
      ))}
    </div>
  );
}