"use client";

import Link from "next/link";
import SkillsGrid from "../skills/SkillsGrid";
import { useTranslations } from "next-intl";

export default function SkillsPreview() {

    const t = useTranslations("skills");

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900"> 
                        {t("title")}
                    </h2>

                    <p className="mt-3 text-gray-600">
                        {t("description")}
                    </p>
                </div>

                {/* Skills preview grid */}
                <SkillsGrid preview />

                {/* View all skills */}
                <div className="mt-10 text-center">
                    <Link 
                    href="/skills"
                    className="inline-flex items-center justify-center rounded-md border border-gray-900 px-6 
                    py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
                    >
                        {t("viewAll")}
                    </Link>
                </div>
            </div>
        </section>
    )
}