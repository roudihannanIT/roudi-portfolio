"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  shortDescriptionKey: string;
  descriptionKey: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  preview?: boolean;
};

export default function ProjectCard({
  title,
  shortDescriptionKey,
  descriptionKey,
  image,
  techStack,
  githubUrl,
  liveUrl,
  preview = false,
}: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm text-gray-600">
          {preview
            ? t(shortDescriptionKey)
            : t(descriptionKey)}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}