"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SitemapLink {
  label: string;
  href: string;
}

interface FooterProps {
  sitemapLinks?: SitemapLink[];
}

const defaultSitemapLinks: SitemapLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Models", href: "/models" },
  { label: "About Us", href: "/brand" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
];

const Footer = ({ sitemapLinks = defaultSitemapLinks }: FooterProps) => {
  const { t } = useLanguage();

  const translatedSitemapLinks = [
    { label: t("footer.home"), href: "/" },
    { label: t("footer.ourModels"), href: "/models/c10" },
    { label: t("footer.aboutUs"), href: "/brand" },
    { label: t("footer.contact"), href: "/contact" },
    { label: t("footer.ota"), href: "/ota" },
  ];

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Sitemap Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-3">
              {t("footer.sitemap")}
            </h3>
            <ul className="space-y-3">
              {translatedSitemapLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Distribuidor Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-3">
              {t("footer.distribuidor")}
            </h3>
            <div className="flex items-center px-4 gap-3 w-full h-20 bg-white/5 rounded-lg">
              <img src="/images/logo-ga.png" alt="" className="size-14" />
              <span className="text-lg font-medium">Grupo Avant</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              {t("footer.distribuitorOfficial")}
            </p>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-3">
              {t("footer.contactInfo")}
            </h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-gray-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    {t("footer.ubicacion")}
                  </p>
                  <p className="text-sm text-gray-400">
                    Av. Charles Sumner #8, Urbanización Fernández, Santo
                    Domingo, República Dominicana.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    {t("footer.telefono")}
                  </p>
                  <a
                    href="tel:+18096839933"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    +1 (809) 683-9933
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    {t("footer.correo")}
                  </p>
                  <a
                    href="mailto:contacto@groupavant.com.do"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    contacto@groupavant.com.do
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-3">
              {t("footer.siguenos")}
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/leapmotor_rd/"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
              <a
                href="https://www.linkedin.com/company/leapmotorglobal/"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* WhatsApp Widget Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-3">
              {t("footer.soporte")}
            </h3>
            <a
              href="https://wa.me/18498675788"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition duration-300 font-semibold"
            >
              <MessageCircle size={20} />
              {t("footer.chatWithUs")}
            </a>
            <p className="text-xs text-gray-400 mt-3 text-center">
              {t("footer.available")}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              {t("footer.politicaPrivacidad")}
            </a>
            <a href="#" className="hover:text-white transition">
              {t("footer.terminosCondiciones")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
