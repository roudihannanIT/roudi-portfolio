"use client"

import { useState } from "react";
import Link from "next/link";

const Nav_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "My Books", href: "#books" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}