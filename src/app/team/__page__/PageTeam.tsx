'use client';

import { SectionTeam } from "./SectionTeam";
import { SectionHeading } from "./SectionHeading";
import { SectionHero } from "./SectionHero";

export interface PageTeamProps {}

export const PageTeam = () => {
  return (
    <>
      <SectionHero maxWidth="100%" paddingBottom={20} paddingTop={20} marginLeft={10} marginRight={10} />
      <SectionHeading maxWidth="6xl" paddingTop={20} paddingBottom={20} />
      <SectionTeam maxWidth="6xl" paddingTop={20} paddingBottom={20} />
    </>
  );
};
