"use client"

import SkillsGrid from "@/components/skills/SkillsGrid";
import { useTranslations } from "next-intl";

export default function SkillPage () {

    const t = useTranslations("skills");
    

    return (
        <main className="min-h-screen bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        {t("title")}
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                {/* Skills Grid */}
                <SkillsGrid />
            </div>
        </main>
    )
}