'use client';

import { SectionEventsDescription } from "./SectionEventsDescription";
import { SectionEventsLink } from "./SectionEventsLink";

export const PageEvents = () => {

  return (
    <>
      <SectionEventsDescription paddingTop={20} paddingBottom={20} maxWidth="8xl" />
      <SectionEventsLink paddingTop={20} paddingBottom={20} maxWidth="8xl" />
    </>
  )
}
