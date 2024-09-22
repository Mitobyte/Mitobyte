"use client";

import { SectionHero } from "./SectionHero";
import { SectionProjects } from "./SectionProjects";

export const PageShowcase = () => {
  return (
    <>
      <SectionHero paddingTop={20} maxWidth="6xl" />
      <SectionProjects paddingTop={20} paddingBottom={20} maxWidth="8xl" />
    </>
  );
};
