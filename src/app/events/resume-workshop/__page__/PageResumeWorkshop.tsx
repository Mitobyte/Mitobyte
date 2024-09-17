"use client";

import { SectionGallery } from "./SectionGallery";
import { SectionHero } from "./SectionHero";
import { SectionStats } from "./SectionStats";

interface ResumeWorkshopProps {
  children: React.ReactNode;
}

export const PageResumeWorkshop = ({ children }: ResumeWorkshopProps) => {
  return (
    <>
      <SectionHero paddingTop={20} />
      <SectionStats paddingTop={20} paddingBottom={20} maxWidth="6xl" />
      <SectionGallery paddingTop={20} paddingBottom={20} />
    </>
  );
};
