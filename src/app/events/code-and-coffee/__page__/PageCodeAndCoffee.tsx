"use client";

import { SectionHero } from "./SectionHero";
import { SectionGallery } from "./SectionGallery";
import { SectionStats } from "./SectionStats";

export const PageCodeAndCoffee = () => {
  return (
    <>
      <SectionHero paddingTop={20} maxWidth="6xl" />
      <SectionStats paddingTop={20} paddingBottom={20} maxWidth="6xl" />
      <SectionGallery paddingTop={20} paddingBottom={20} maxWidth="6xl" />
    </>
  );
};
