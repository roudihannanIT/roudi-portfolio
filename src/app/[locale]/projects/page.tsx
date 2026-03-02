"use client"

import { useTranslations } from "next-intl";
import ProjectsGrid from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("title")}
          </h1>
          <p className="mt-4 text-gray-600">
            {t("description")}
          </p>
        </div>

        {/* All Projects */}
        <ProjectsGrid />
      </section>
    </main>
  );
}