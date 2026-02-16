"use client";

import Exterior from "@/components/Exterior";
import Grid from "@/components/Grid";
import ImgBanner from "@/components/ImgBanner";
import Interior from "@/components/Interior";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const PageC10 = () => {
  const { t } = useLanguage();

  const gridItems = [
    {
      imgUrl: "/images/c10/grid_1.png",
      imgAlt: t("c10.electric_rwd"),
      heading: t("c10.electric_rwd"),
      subheading: t("c10.electric_rwd_range"),
      link: "/models/c10/interior",
    },
    {
      imgUrl: "/images/c10/grid_2.png",
      imgAlt: t("c10.hybrid_ev"),
      heading: t("c10.hybrid_ev"),
      subheading: t("c10.hybrid_ev_range"),
      link: "/models/c10/interior",
    },
    {
      imgUrl: "/images/c10/grid_3.png",
      imgAlt: t("c10.electric_awd"),
      heading: t("c10.electric_awd"),
      subheading: t("c10.electric_awd_desc"),
      link: "/models/c10/interior",
    },
  ];

  return (
    <div>
      <ImgBanner
        imgUrl="/images/c10.png"
        heading={t("c10.heading")}
        subheading={t("c10.subheading")}
        showButton={false}
        variant="center"
      />
      <Grid
        title={t("c10.discoverTitle")}
        subheading={t("c10.discoverSubheading")}
        items={gridItems}
      />
      <Exterior />
      <Interior />
    </div>
  );
};

export default PageC10;
