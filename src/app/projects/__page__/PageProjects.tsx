"use client";

import { SectionHero } from "./SectionHero";
import { SectionProjects } from "./SectionProjects";

export const PageProjects = () => {
  return (
    <>
      <SectionHero paddingTop={20} maxWidth="6xl" />
      <SectionProjects paddingTop={20} paddingBottom={20} maxWidth="8xl" />
    </>
  );
};
