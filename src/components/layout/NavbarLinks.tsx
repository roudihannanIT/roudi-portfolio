"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavLinks() {
  const t = useTranslations("nav");

  const links = [
    { label: t("home"), href: "/" },
    { label: t("skills"), href: "/skills" },
    { label: t("projects"), href: "/projects" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <ul className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}