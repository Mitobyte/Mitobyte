'use client';

import { NavigationMain } from "@/common/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionSponsors } from "./SectionSponsors";
import { LogoHeaderMitobyte } from "@/common/components/Logos/LogoHeaderMitobyte";
import { SectionEventsAlt } from "./SectionEventsAlt";
import { SectionAboutUs } from "./SecitionAboutUs";
import { SectionDots } from "./SectionDots";
import { SectionStats } from "./SectionStats";
import { SectionFaq } from "./SectionSponsorFaq";
import { SectionTeam } from "./SectionTeam";
import { Divider } from "@chakra-ui/react";
import { SectionContact } from "./SectionContact";

export const PageHome = () => {
  return (
    <>
      <LogoHeaderMitobyte />
      <NavigationMain />
      <SectionHero />
      <SectionEventsAlt
        maxWidth="8xl"
        paddingTop={40}
        paddingBottom={20}
      />
      <SectionAboutUs
        maxWidth="6xl"
        paddingTop={20}
        paddingBottom={10}
        />
      {/* <SectionDots
        maxWidth="100%"
        paddingTop={{ base: 10, lg: 20}}
        paddingBottom={{ base: 10, lg: 20}}
      /> */}
      <SectionStats
        maxWidth="6xl"
        paddingTop={10}
        paddingBottom={20}
        marginBottom={10}

      />
      <Divider borderColor="syntaxBlack.500" />
      <SectionSponsors
        paddingTop={20}
        paddingBottom={10}
        maxWidth="100%"
      />
      <SectionFaq
        maxWidth="6xl"
        paddingTop={10}
        paddingBottom={20}
      />
      <Divider borderColor="syntaxBlack.500" />
      <SectionTeam
        maxWidth="6xl"
        paddingTop={20}
        paddingBottom={20}
      />
      <SectionContact
        maxWidth="6xl"
        paddingTop={20}
        paddingBottom={20}
      />
    </>
  );
};
