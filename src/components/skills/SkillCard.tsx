"use client"

import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type SkillCardProps = {
  titleKey: string;
  icon: LucideIcon;
  items: string[];
  preview?: boolean;
};

export default function SkillCard({
  titleKey,
  icon: Icon,
  items,
  preview = false,
}: SkillCardProps) {
  const visibleItems = preview ? items.slice(0, 3) : items;

  const t = useTranslations("skills.sections");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          {t(titleKey)}
        </h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-2 text-sm text-gray-700">
        {visibleItems.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}