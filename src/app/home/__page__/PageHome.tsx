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

export const PageHome = () => {
  return (
    <>
      <LogoHeaderMitobyte />
      <NavigationMain />
      <SectionHero />
      <SectionMission
        maxWidth="4xl"
        paddingTop={20}
        paddingBottom={20}
        background="gray.50"
      />
      <SectionEvents maxWidth="4xl" paddingTop={20} paddingBottom={20} />
      <SectionPeople
        maxWidth="4xl"
        paddingTop={20}
        paddingBottom={20}
        background="gray.50"
        marginTop={20}
        marginBottom={20}
      />
      <SectionQuotes paddingTop={20} paddingBottom={20} maxWidth="2xl" />
      <SectionWhySponsor
        paddingTop={20}
        paddingBottom={20}
        maxWidth="lg"
        background="gray.50"
        marginTop={20}
        marginBottom={20}
      />
      <SectionSponsors paddingTop={20} paddingBottom={20} maxWidth="2xl" />
    </>
  );
};
