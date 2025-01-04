"use client";

import { SectionEventsDescription } from "./SectionEventsDescription";

export const PageNotFound = () => {
  const location = window.location.href;

  return (
    <>
      <span>{location}</span>
      <SectionEventsDescription marginTop={20} marginBottom={20} />
    </>
  );
};
