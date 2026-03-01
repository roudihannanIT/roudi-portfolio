import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "My Books", href: "#books" },
  { label: "Contact", href: "#contact" },
];

export default function NavLinks() {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}