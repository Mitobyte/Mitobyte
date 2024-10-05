"use client";

import { SectionHero } from "./SectionHero";
import { SectionSponsors } from "./SectionSponsors";
import { SectionEventsLink } from "./SectionEventsLink";
import { SectionAboutUs } from "./SectionAboutUs";
import { SectionStats } from "./SectionStats";
import { SectionFaq } from "./SectionSponsorFaq";
import { SectionTeam } from "./SectionTeam";
import { Divider } from "@chakra-ui/react";
import { SectionContact } from "./SectionContact";

export const PageHome = () => {
  return (
    <>
      <SectionHero maxWidth="7xl" />
      <SectionEventsLink maxWidth="7xl" paddingTop={40} paddingBottom={20} />
      <SectionAboutUs maxWidth="7xl" paddingTop={20} paddingBottom={10} />
      <SectionStats
        maxWidth="7xl"
        paddingTop={10}
        paddingBottom={20}
        marginBottom={10}
      />
      <Divider borderColor="syntaxBlack.500" />
      <SectionSponsors paddingTop={20} paddingBottom={10} maxWidth="100%" />
      <SectionFaq maxWidth="7xl" paddingTop={10} paddingBottom={20} />
      <Divider borderColor="syntaxBlack.500" />
      <SectionTeam maxWidth="7xl" paddingTop={20} paddingBottom={20} />
      <SectionContact maxWidth="7xl" paddingTop={20} paddingBottom={20} />
    </>
  );
};
