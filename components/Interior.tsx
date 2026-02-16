"use client";

import ImgBanner from "@/components/ImgBanner";
import { cn } from "@/utils/cn";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Interior = () => {
  const { t } = useLanguage();

  const gridItems = [
    {
      imgUrl: "/images/c10/interior/ambient_light.png",
      title: t("interiorComponent.ambientLight"),
      desc: t("interiorComponent.ambientLightDesc"),
    },
    {
      imgUrl: "/images/c10/interior/charger.png",
      title: t("interiorComponent.charger"),
      desc: t("interiorComponent.chargerDesc"),
    },
    {
      imgUrl: "/images/c10/interior/central_console.png",
      title: t("interiorComponent.console"),
      desc: t("interiorComponent.consoleDesc"),
    },
    {
      imgUrl: "/images/c10/interior/central_storage.png",
      title: t("interiorComponent.storage"),
      desc: t("interiorComponent.storageDesc"),
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="pb-16 px-4 flex flex-col items-center">
        <h2 className="section-heading text-white">
          {t("interiorComponent.heading")}
        </h2>
        <p className={cn("section-subheading", "!text-gray-300")}>
          {t("interiorComponent.subheading")}
        </p>
      </div>
      <div className="mx-4 md:mx-20 rounded-2xl overflow-hidden shadow-lg">
        <ImgBanner
          imgUrl="/images/c10/interior/main.png"
          showButton={false}
          showBody={false}
        />
      </div>
      <div className="flex  mx-4 md:mx-10 my-10 md:mt-20 gap-6 flex-wrap md:px-6 max-sm:flex-col-reverse">
        <div className=" flex-2  md:px-12 flex flex-col gap-4 justify-center md:text-right ">
          <h3 className="text-xl font-semibold text-white">
            {t("interiorComponent.eleganceLine")}
          </h3>
          <p className="text-xl text-gray-300">
            {t("interiorComponent.strongPresence")}
          </p>
          <p className="text-sm tracking-wide leading-5.5 text-gray-400">
            {t("interiorComponent.description1")}
          </p>
          <p className="text-sm tracking-wide leading-5.5 text-gray-400">
            {t("interiorComponent.description2")}
          </p>
          <p className="text-sm tracking-wide leading-5.5 text-gray-400">
            {t("interiorComponent.description3")}
          </p>
        </div>
        <img
          src={"/images/c10/interior/description.png"}
          className="w-full max-w-[600px] rounded-xl object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-4 md:mx-10 my-10 md:mt-20 md:px-6 gap-4">
        {gridItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgUrl} className="w-full rounded" />
            <h4 className="text-lg font-semibold mt-4 text-white">
              {item.title}
            </h4>
            <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interior;
