"use client";

import Link from "next/link";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

type GridItem = {
  imgUrl: string;
  imgAlt: string;
  heading: string;
  subheading: string;
  link: string;
};

interface GridProps {
  title: string;
  subheading?: string;
  items: GridItem[];
}

const Grid = ({ title, subheading, items }: GridProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center pt-10 pb-6">
      <h2 className="section-heading">{title}</h2>
      {subheading && <p className="section-subheading">{subheading}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 min-w-10"
          >
            <Link href={item.link}>
              <img
                src={item.imgUrl}
                alt={item.imgAlt}
                className="w-full h-auto object-cover"
              />
            </Link>
            <h3 className="text-lg font-semibold mt-4">{item.heading}</h3>
            <p className="text-gray-600 text-xs">{item.subheading}</p>
            <Link href={item.link} className="underline mt-2 font-medium">
              {t("grid.discover")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
