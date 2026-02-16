"use client";

import ImgBanner from "@/components/ImgBanner";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Exterior = () => {
  const { t } = useLanguage();

  const gridItems = [
    {
      imgUrl: "/images/c10/exterior/headlights.png",
      title: t("exteriorComponent.ledHeadlights"),
      desc: t("exteriorComponent.ledHeadlightsDesc"),
    },
    {
      imgUrl: "/images/c10/exterior/doors.png",
      title: t("exteriorComponent.flushHandles"),
      desc: t("exteriorComponent.flushHandlesDesc"),
    },
    {
      imgUrl: "/images/c10/exterior/rear.png",
      title: t("exteriorComponent.hiddenWiper"),
      desc: t("exteriorComponent.hiddenWiperDesc"),
    },
    {
      imgUrl: "/images/c10/exterior/wheels.png",
      title: t("exteriorComponent.premiumWheels"),
      desc: t("exteriorComponent.premiumWheelsDesc"),
    },
  ];

  return (
    <section className="">
      <div className="py-8 px-4 flex flex-col items-center">
        <h2 className="section-heading">{t("exteriorComponent.heading")}</h2>
        <p className="section-subheading">
          {t("exteriorComponent.subheading")}
        </p>
      </div>
      <div className="mx-4 md:mx-20 rounded-2xl overflow-hidden shadow-lg">
        <ImgBanner
          imgUrl="/images/c10/exterior/main.png"
          showButton={false}
          showBody={false}
        />
      </div>
      <div className="flex  mx-4 md:mx-10 my-10 md:mt-20 gap-6 flex-wrap md:px-6">
        <img
          src={"/images/c10/exterior/description.png"}
          className="w-full max-w-[500px] rounded-xl object-cover"
        />

        <div className="flex-2  md:px-12 flex flex-col gap-4 justify-center">
          <h3 className="text-xl font-semibold">
            {t("exteriorComponent.eleganceLine")}
          </h3>
          <p className="text-xl text-gray-700">
            {t("exteriorComponent.strongPresence")}
          </p>
          <p className="text-sm tracking-wide leading-5.5">
            {t("exteriorComponent.description1")}
          </p>
          <p className="text-sm tracking-wide leading-5.5">
            {t("exteriorComponent.description2")}
          </p>
          <p className="text-sm tracking-wide leading-5.5">
            {t("exteriorComponent.description3")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-4 md:mx-10 my-10 md:mt-20 md:px-6 gap-4">
        {gridItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgUrl} className="w-full rounded" />
            <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
            <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exterior;
