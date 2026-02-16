"use client";

import React, { useState } from "react";
import { Menu, Globe, Check } from "lucide-react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ] as const;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-20 bg-[#222222] p-6 text-white flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white hover:text-gray-300 transition cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
        <Link href="/">
          <Logo />
        </Link>
        <div className="relative">
          <button
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            className="text-white hover:text-gray-300 transition"
            aria-label="Change language"
          >
            <Globe size={28} />
          </button>

          {/* Language Dropdown */}
          {languageMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setLanguageMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center justify-between transition text-gray-800"
                >
                  <span>
                    {lang.flag} {lang.name}
                  </span>
                  {language === lang.code && (
                    <Check size={18} className="text-green-500" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
