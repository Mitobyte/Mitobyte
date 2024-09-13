"use client";

import { SectionTeam } from "./SectionTeam";
import { SectionHeading } from "./SectionHeading";
import { SectionHero } from "./SectionHero";
import { SectionQuotes } from "./SectionQuotes";

export interface PageTeamProps {}

export const PageTeam = () => {
  return (
    <>
      <SectionHero
        maxWidth="8xl"
        paddingBottom={{ base: 10, lg: 20 }}
        paddingTop={{ base: 10, lg: 20 }}
      />
      <SectionQuotes
        maxWidth="6xl"
        paddingTop={{ base: 10, lg: 20 }}
        paddingBottom={{ base: 10, lg: 20 }}
      />
      <SectionHeading
        maxWidth="6xl"
        paddingTop={{ base: 10, lg: 20 }}
        paddingBottom={{ base: 10, lg: 20 }}
      />
      <SectionTeam
        maxWidth="6xl"
        paddingTop={{ base: 10, lg: 20 }}
        paddingBottom={{ base: 10, lg: 20 }}
      />
    </>
  );
};
