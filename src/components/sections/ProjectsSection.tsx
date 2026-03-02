"use client"

import { useTranslations } from "next-intl";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import Link from "next/link";

export default function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("title")}
          </h2>

          <p className="mt-3 text-gray-600">
            {t("description")}
          </p>
        </div>

        <ProjectsGrid preview />

        {/* View all projects */}
        <div className="mt-10 text-center">
          <Link 
          href="/projects"
          className="inline-flex items-center justify-center rounded-md border border-gray-900 px-6 
          py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            {t("description")}
          </Link>
        </div>
      </div>
    </section>
  );
}