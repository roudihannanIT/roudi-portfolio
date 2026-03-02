"use client"

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");
  
  const Nav_LINKS = [
    { label: t("home"), href: "/" },
    { label: t("skills"), href: "/skills" },
    { label: t("projects"), href: "/projects" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "/contact" },
];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-700"
      >
        ☰
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-gray-200 bg-white">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {Nav_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}