"use client";

import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface ImgBannerProps {
  imgUrl?: string;
  imgAlt?: string;
  heading?: string;
  subheading?: string;
  variant?: "left" | "right" | "center";
  showBody?: boolean;
  showButton?: boolean;
}

const ImgBanner = ({
  imgUrl = "/images/b03x.png",
  imgAlt = "B03X",
  heading,
  subheading,
  variant,
  showBody = true,
  showButton = true,
}: ImgBannerProps) => {
  const { t } = useLanguage();
  return (
    <div className="relative">
      <picture>
        <source
          media="(max-width: 1024px)"
          srcSet={imgUrl.replace(".png", "_m.png")}
        />
        <img src={imgUrl} alt="B03X" className="w-full object-fit" />
      </picture>
      {showBody && (
        <div
          className={cn(
            "w-full bg-black md:absolute md:bg-transparent z-10 md:-translate-y-70 md:px-16 px-6 pt-4 pb-8",
            variant === "right" && "right-0 text-right",
            variant === "center" && "left-1/2 md:-translate-x-1/2 text-center",
          )}
        >
          <h2 className="text-2xl md:text-8xl font-bold text-white uppercase">
            {heading}
          </h2>
          <p className="text-lg md:text-4xl text-white uppercase mt-2">
            {subheading}
          </p>

          {showButton && (
            <button className="mt-4 rounded-full bg-[#114f0e] px-6 py-3 text-white hover:bg-green-700 uppercase font-semibold tracking-wide">
              <Link href={`/models/${heading?.toLocaleLowerCase()}`}>
                {t("imgBanner.discover")}
              </Link>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImgBanner;
