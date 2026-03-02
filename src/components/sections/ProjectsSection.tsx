"use client"

import { useTranslations } from "next-intl";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import Link from "next/link";

export default function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("title")}
          </h2>

          <Link
            href="/projects"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            {t("description")}
          </Link>
        </div>

        <ProjectsGrid preview />
      </div>
    </section>
  );
}