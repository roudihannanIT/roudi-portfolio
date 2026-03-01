"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTelegram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left - Roudi's Image */}
        <div className="flex-shrink-0">
          <Image
            src="/roudiPic.webp"
            alt="Roudi Hannan"
            width={270}
            height={270}
            className="rounded-full shadow-lg"
            priority
          />
        </div>

        {/* Right: Texts + CTA + Social */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            {/* Texts */}
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I’m Roudi Hannan
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200">
            Software Engineer - Full-Stack Web Development
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
            // add cv in future
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-teal-500 text-white rounded-md font-medium text-sm hover:bg-teal-600 transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-white text-white rounded-md font-medium text-sm hover:bg-white hover:text-gray-800 transition"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/roudihannanIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-teal-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/roudi-hannan-6243a5366/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-teal-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:roudihannan7@gmail.com"
              className="text-white text-2xl hover:text-teal-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/roudihannan8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-teal-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/RoudiHannan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-teal-400 transition"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}