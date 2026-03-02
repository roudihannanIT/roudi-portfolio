"use client"

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

type SkillsGridProps = {
  preview?: boolean;
};

export default function SkillsGrid({ preview = false }: SkillsGridProps) {

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          titleKey={skill.id}
          icon={skill.icon}
          items={skill.items}
          preview={preview}
        />
      ))}
    </div>
  );
}