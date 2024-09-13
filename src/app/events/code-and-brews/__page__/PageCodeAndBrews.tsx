"use client";

import { NavigationMain } from "@/common/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionGallery } from "./SectionGallery";
import { SectionHowItWorks } from "./SectionHowItWorks";
import { SectionPremierSponsor } from "./SectionPremeirSponsor";

export const PageCodeAndBrews = () => {
  return (
    <>
      <NavigationMain />
      <SectionHero marginBottom={20} />
      <SectionPremierSponsor
        paddingTop={20}
        paddingBottom={20}
        maxWidth="2xl"
      />
      <SectionHowItWorks maxWidth="xl" marginBottom={20} />
      <SectionGallery paddingTop={20} paddingBottom={20} />
    </>
  );
};
