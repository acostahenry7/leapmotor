"use client";

import ImgBanner from "@/components/ImgBanner";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const bannerMeta = [
    {
      id: 0,
      imgUrl: "/images/c10.png",
      imgAlt: t("home.c10"),
      heading: t("home.c10"),
      subheading: t("home.bannerSubheading"),
      position: "left" as const,
    },
    {
      id: 1,
      imgUrl: "/images/c10.jpg",
      imgAlt: t("home.b03x"),
      heading: t("home.b03x"),
      subheading: t("home.bannerSubheadingB03X"),
      position: "left" as const,
    },
    {
      id: 2,
      imgUrl: "/images/c10_3.jpg",
      imgAlt: t("home.b10"),
      heading: t("home.b10"),
      subheading: t("home.bannerSubheadingB10"),
      position: "left" as const,
    },
    {
      id: 3,
      imgUrl: "/images/c10_4.jpg",
      imgAlt: t("home.newB03X"),
      heading: t("home.newB03X"),
      subheading: t("home.bannerSubheadingNewB03X"),
      position: "right" as const,
    },
    {
      id: 4,
      imgUrl: "/images/c10_5.jpg",
      imgAlt: t("home.t03"),
      heading: t("home.t03"),
      subheading: t("home.bannerSubheadingT03"),
      position: "right" as const,
    },
  ];

  return (
    <div className="">
      {bannerMeta
        .filter((_, i) => i <= 1)
        .map((meta) => (
          <ImgBanner
            key={meta.id}
            imgUrl={meta.imgUrl}
            imgAlt={meta.imgAlt}
            heading={meta.heading}
            subheading={meta.subheading}
            variant={meta.position as "left" | "right"}
          />
        ))}
      <video
        src="/videos/home_1.m4v"
        autoPlay
        muted
        loop
        className="w-full h-[50lvh] md:h-[70lvh] object-cover"
      />
      {bannerMeta
        .filter((_, i) => i > 1 && i <= 3)
        .map((meta) => (
          <ImgBanner
            key={meta.id}
            imgUrl={meta.imgUrl}
            imgAlt={meta.imgAlt}
            heading={meta.heading}
            subheading={meta.subheading}
            variant={meta.position as "left" | "right"}
          />
        ))}
      {/* <video
        src="/videos/home_2.mp4"
        autoPlay
        muted
        loop
        className="w-full h-[50lvh] md:h-auto object-cover"
      /> */}
      {bannerMeta
        .filter((_, i) => i > 3)
        .map((meta) => (
          <ImgBanner
            key={meta.id}
            imgUrl={meta.imgUrl}
            imgAlt={meta.imgAlt}
            heading={meta.heading}
            subheading={meta.subheading}
            variant={meta.position as "left" | "right"}
          />
        ))}
    </div>
  );
}
