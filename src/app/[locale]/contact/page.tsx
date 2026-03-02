"use client";

import { useTranslations } from "next-intl";
import { Mail, Linkedin, Github, Instagram, Send, MessageCircle } from "lucide-react";
import React from "react";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  const contacts = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t("email"),
      value: "roudihannan8@gmail.com",
      href: "mailto:roudihannan8@gmail.com",
      description: t("emailDescription"),
      color: "text-gray-900"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: t("linkedin"),
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/roudi-hannan-6243a5366/",
      description: t("linkedinDescription"),
      color: "text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: t("github"),
      value: "GitHub",
      href: "https://github.com/roudihannanIT",
      description: t("githubDescription"),
      color: "text-gray-900"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: t("instagram"),
      value: "Instagram",
      href: "https://www.instagram.com/roudihannan8",
      description: t("instagramDescription"),
      color: "text-pink-500"
    },
    {
      icon: <Send className="h-5 w-5" />,
      label: t("telegram"),
      value: "Telegram",
      href: "https://t.me/RoudiHannan",
      description: t("telegramDescription"),
      color: "text-blue-400"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: t("whatsapp"),
      value: "WhatsApp",
      href: "https://wa.me/message/N7AIT4AG3XDAK1",
      description: t("whatsappDescription"),
      color: "text-green-500"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-gray-600">{t("description")}</p>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
                {React.cloneElement(contact.icon, { className: `${contact.color} h-5 w-5` })}
                <span className="font-medium text-gray-900">{contact.value}</span>
            </div>
            <p className="text-xs text-gray-500">{contact.description}</p>
          </a>
        ))}
      </div>

      {/* Availability / Optional */}
      <p className="mt-12 text-center text-gray-500 text-sm">{t("availability")}</p>
    </section>
  );
}