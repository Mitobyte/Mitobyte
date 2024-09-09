'use client';

import { SectionSponsors } from "./SectionSponsors";
import { SectionHeading } from "./SectionHeading";
import { SectionFaq } from "./SectionSponsorFaq";

export const PageSponsors = () => {
  return (
    <>
      <SectionHeading paddingTop={20} paddingBottom={20} maxWidth="6xl" />
      <SectionSponsors paddingTop={20} paddingBottom={20} />
      <SectionFaq paddingTop={20} paddingBottom={20} maxWidth="6xl" />
    </>
  );
};
