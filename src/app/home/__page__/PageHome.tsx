"use client";

import { SectionHero } from "./SectionHero";
import { SectionSponsors } from "./SectionSponsors";
import { SectionEventsLink } from "./SectionEventsLink";
import { SectionAboutUs } from "./SecitionAboutUs";
import { SectionStats } from "./SectionStats";
import { SectionFaq } from "./SectionSponsorFaq";
import { SectionTeam } from "./SectionTeam";
import { Divider } from "@chakra-ui/react";
import { SectionContact } from "./SectionContact";

export const PageHome = () => {
  return (
    <>
      <SectionHero />
      <SectionEventsLink maxWidth="8xl" paddingTop={40} paddingBottom={20} />
      <SectionAboutUs maxWidth="6xl" paddingTop={20} paddingBottom={10} />
      <SectionStats
        maxWidth="6xl"
        paddingTop={10}
        paddingBottom={20}
        marginBottom={10}
      />
      <Divider borderColor="syntaxBlack.500" />
      <SectionSponsors paddingTop={20} paddingBottom={10} maxWidth="100%" />
      <SectionFaq maxWidth="6xl" paddingTop={10} paddingBottom={20} />
      <Divider borderColor="syntaxBlack.500" />
      <SectionTeam maxWidth="6xl" paddingTop={20} paddingBottom={20} />
      <SectionContact maxWidth="6xl" paddingTop={20} paddingBottom={20} />
    </>
  );
};
