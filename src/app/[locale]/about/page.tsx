"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  // Sample Education
  const education = [
    {
      degree: "degree name",
      university: "university name",
      year: "year of graduation"
    }
  ];

  // Certificates
  const certificates = [
    {
      name: "certificate name",
      issuer: "certificate issuer",
      year: "year of issue"
    }
  ];

  // Books
  const books = [
    {
      title: "Book Title",
      type: "Technical"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      {/* Title + Intro */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-gray-600">{t("intro")}</p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t("educationTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.university}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t("certificateTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-medium text-gray-900">{cert.name}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Books */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t("booksTitle")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-medium text-gray-900">{book.title}</h3>
              <p className="text-gray-600">{book.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional availability */}
      <p className="text-center text-gray-500 text-sm">{t("availability")}</p>
    </section>
  );
}