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
      imgUrl: "/images/b05.png",
      imgAlt: t("home.b03x"),
      heading: t("home.b03x"),
      subheading: t("home.bannerSubheading"),
      position: "left" as const,
    },
    {
      id: 2,
      imgUrl: "/images/b10.png",
      imgAlt: t("home.b10"),
      heading: t("home.b10"),
      subheading: t("home.bannerSubheading"),
      position: "right" as const,
    },
    {
      id: 3,
      imgUrl: "/images/b03x.png",
      imgAlt: t("home.newB03X"),
      heading: t("home.newB03X"),
      subheading: t("home.bannerSubheading"),
      position: "right" as const,
    },
    {
      id: 4,
      imgUrl: "/images/t03.png",
      imgAlt: t("home.t03"),
      heading: t("home.t03"),
      subheading: t("home.bannerSubheading"),
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
        src="/videos/home_1.mp4"
        autoPlay
        muted
        loop
        className="w-full h-[50lvh] md:h-auto object-cover"
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
      <video
        src="/videos/home_2.mp4"
        autoPlay
        muted
        loop
        className="w-full h-[50lvh] md:h-auto object-cover"
      />
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
