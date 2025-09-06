"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { i18n } from "../i18n/i18n";

type Lang = "en" | "th";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("th");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "en" || stored === "th") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    const newLang: Lang = lang === "en" ? "th" : "en";
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
      window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
    }
  };

  return (
    <nav className="w-full shadow-md px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center">
            <Image src={logo} alt="logo" width={50} height={50} priority />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:text-blue-500" href="/">{i18n[lang].home}</Link>
          <Link className="hover:text-blue-500" href="/#about">{i18n[lang].about}</Link>
          <Link className="hover:text-blue-500" href="/#work_experience">{i18n[lang].work_experience}</Link>
          <Link className="hover:text-blue-500" href="/#projects">{i18n[lang].projects}</Link>
          <Link className="hover:text-blue-500" href="/#contact">{i18n[lang].contact}</Link>
          <button
            onClick={toggleLang}
            className="ml-2 px-2 py-1 border rounded text-sm"
            aria-label="Toggle language"
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 px-2 pb-3 space-y-1">
          <Link className="block px-2 py-2 rounded hover:bg-gray-100" href="/">{i18n[lang].home}</Link>
          <Link className="block px-2 py-2 rounded hover:bg-gray-100" href="/#about">{i18n[lang].about}</Link>
          <Link className="block px-2 py-2 rounded hover:bg-gray-100" href="/#work_experience">{i18n[lang].work_experience}</Link>
          <Link className="block px-2 py-2 rounded hover:bg-gray-100" href="/#projects">{i18n[lang].projects}</Link>
          <Link className="block px-2 py-2 rounded hover:bg-gray-100" href="/#contact">{i18n[lang].contact}</Link>
          <div className="px-2 py-2">
            <button
              onClick={toggleLang}
              className="px-2 py-1 border rounded text-sm w-full"
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
