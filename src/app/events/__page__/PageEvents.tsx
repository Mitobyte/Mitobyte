"use client";

import { SectionEventsDescription } from "./SectionEventsDescription";
import { SectionEventsLink } from "./SectionEventsLink";
import { SectionHero } from "./SectionHero";

export const PageEvents = () => {
  return (
    <>
      <SectionHero paddingTop={20} paddingBottom={10} maxWidth="8xl" />
      <SectionEventsDescription
        paddingTop={10}
        paddingBottom={20}
        maxWidth="8xl"
      />
      <SectionEventsLink
        marginLeft={5}
        marginRight={5}
        paddingTop={20}
        paddingBottom={20}
        marginBottom={20}
        maxWidth="8xl"
      />
    </>
  );
};
