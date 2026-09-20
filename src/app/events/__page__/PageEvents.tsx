"use client";

import { SectionMailingList } from "./SectionMailingList";
import { SectionEventsLink } from "./SectionEventsLink";
import { SectionHero } from "./SectionHero";

export const PageEvents = () => {
  return (
    <>
      <SectionHero paddingTop={20} paddingBottom={10} maxWidth="8xl" />
      <SectionEventsLink
        marginLeft={5}
        marginRight={5}
        paddingTop={6}
        paddingBottom={20}
        marginBottom={5}
        maxWidth="8xl"
      />
      <SectionMailingList maxWidth="8xl" marginBottom={20} />
    </>
  );
};
