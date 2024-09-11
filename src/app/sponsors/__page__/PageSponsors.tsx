'use client';

import { SectionSponsors } from "./SectionSponsors";
import { SectionHeading } from "./SectionHeading";
import { SectionFaq } from "./SectionSponsorFaq";
import { Divider } from "@chakra-ui/react";

export const PageSponsors = () => {
  return (
    <>
      <SectionHeading paddingTop={20} paddingBottom={20} maxWidth="6xl" />
      <Divider borderColor="syntaxBlack.500" />
      <SectionSponsors paddingTop={20} paddingBottom={20} />
      <SectionFaq paddingTop={20} paddingBottom={20} maxWidth="6xl" />
    </>
  );
};
