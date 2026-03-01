import {
  Code,
  Server,
  Database,
  Wrench,
  Languages
} from "lucide-react";

export const skills = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code,
    items: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Authentication & Authorization",
      "API Integration"
    ]
  },
  {
    id: "database",
    title: "Databases",
    icon: Database,
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "Data Modeling",
      "CRUD Operations"
    ]
  },
  {
    id: "tools",
    title: "Tools, Workflow & DevOps",
    icon: Wrench,
    items: [
      "Git & GitHub",
      "Docker",
      "Clean Code Principles",
      "Project Structure & Architecture",
      "Debugging & Problem Solving"
    ]
  },
  {
    id: "languages",
    title: "Languages",
    icon: Languages,
    items: [
      "English - Professional Working Proficiency",
      "German (Deutsch) - A2 (no certificate)"
    ]
  }
];