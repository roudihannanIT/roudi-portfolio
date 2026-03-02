"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Instagram, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* ID */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Roudi Hannan
            </h3>
            <p className="text-sm text-gray-400">
              {t("title")} <br />
              {t("title2")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">
              {t("links")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white transition">
                  {t("skills")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">
              {t("contact")}
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:roudihannan7@gmail.com"
                  className="hover:text-white transition"
                >
                  roudihannan7@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/roudi-hannan-6243a5366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Github className="h-4 w-4" />
                <a
                  href="https://github.com/roudihannanIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/roudihannan8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Send className="h-4 w-4" />
                <a
                  href="https://t.me/RoudiHannan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Telegram
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/message/N7AIT4AG3XDAK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Roudi Hannan — {t("builtWith")}
        </div>
      </div>
    </footer>
  );
}