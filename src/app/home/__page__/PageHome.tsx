'use client';

import { NavigationMain } from "@/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionMission } from "./SectionMission";
import { SectionSponsors } from "./SectionSponsors";
import { SectionEvents } from "./SectionEvents";
import { SectionPeople } from "./SectionPeople";
import { SectionQuotes } from "./SectionQuotes";
import { SectionWhySponsor } from "./SectionWhySponsor";
import { LogoHeaderMitobyte } from "@/components/Logos/LogoHeaderMitobyte";
import { SectionEventsAlt } from "./SectionEventsAlt";
import { SectionAboutUs } from "./SecitionAboutUs";
import { SectionDots } from "./SectionDots";
import { SectionStats } from "./SectionStats";
import { SectionFaq } from "./SectionSponsorFaq";
import { SectionTeam } from "./SectionTeam";
import { Divider } from "@chakra-ui/react";

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
        paddingTop={20}
        paddingBottom={0}
        />
      <SectionDots
        maxWidth="100%"
        paddingTop={{ base: 10, lg: 20}}
        paddingBottom={{ base: 10, lg: 20}}
      />
      <SectionStats
        maxWidth="6xl"
        paddingTop={20}
        paddingBottom={10}
      />
      <SectionSponsors
        paddingTop={10}
        paddingBottom={20}
        maxWidth="8xl"
      />
      <SectionFaq
        maxWidth="6xl"
        paddingTop={20}
        paddingBottom={20}
      />
      <Divider borderColor="black" />
      <SectionTeam
        maxWidth="6xl"
        paddingTop={20}
        paddingBottom={20}
      />

{/*
      <SectionEvents
        maxWidth="4xl"
        paddingTop={20}
        paddingBottom={20}
      />
      <SectionPeople
        maxWidth="4xl"
        paddingTop={20}
        paddingBottom={20}
        background="gray.50"
        marginTop={20}
        marginBottom={20}
      />
      <SectionQuotes
        paddingTop={20}
        paddingBottom={20}
        maxWidth="2xl"
      />
      <SectionWhySponsor
        paddingTop={20}
        paddingBottom={20}
        maxWidth="lg"
        background="gray.50"
        marginTop={20}
        marginBottom={20}
      /> */}

    </>
  );
};
