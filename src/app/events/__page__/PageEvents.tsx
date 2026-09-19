"use client";

import { MailingListSignupSection } from "./MailingListSignupSection";
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
      <MailingListSignupSection
        marginLeft={5}
        marginRight={5}
        paddingBottom={20}
        marginBottom={20}
        maxWidth="2xl"
      />
    </>
  );
};
