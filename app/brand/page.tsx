"use client";

import ImgBanner from "@/components/ImgBanner";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const BrandPage = () => {
  const { t } = useLanguage();

  const brandSections = [
    {
      url: "/images/brand/lifestyle.jpg",
      alt: "Leapmotor Innovation",
      title: t("brand.section0Title"),
      desc: t("brand.section0Desc"),
    },
    {
      url: "/images/brand/tech.jpg",
      alt: "Leapmotor Design",
      title: t("brand.section1Title"),
      desc: t("brand.section1Desc"),
    },
    {
      url: "/images/brand/stellantis-leap.jpg",
      alt: "Leapmotor Comfort",
      title: t("brand.section2Title"),
      desc: t("brand.section2Desc"),
    },
  ];
  return (
    <div className="mb-10">
      <div className="relative">
        <video
          src="/videos/brand/banner.mp4"
          autoPlay
          muted
          loop
          className="w-full h-[50lvh] md:h-[70lvh] object-cover"
        />
        <div className="absolute top-0 left-0 -bottom-1 right-0 bg-linear-to-b from-transparent to-black"></div>
        <div className="absolute bottom-8 lg:bottom-14 left-1/2 -translate-x-1/2 w-full text-center">
          <h2 className="text-5xl lg:text-7xl uppercase tracking-wider text-white font-bold">
            {t("brand.bannerHeading")}
          </h2>
          <p className="text-white mt-4 uppercase">
            {t("brand.bannerSubheading")}
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-16 px-10">
        {brandSections.map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-10 md:items-stretch ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
          >
            <img
              src={item.url}
              alt={item.alt}
              className="w-full md:w-1/2 h-80 md:h-[400px] object-cover rounded-xl shadow-lg"
            />
            <div
              className={`md:w-1/2 flex flex-col justify-center lg:px-6 py-8 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
            >
              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
