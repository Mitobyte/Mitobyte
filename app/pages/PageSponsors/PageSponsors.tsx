import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionSponsors } from "./SectionSponsors";
import { SectionWhySponsor } from "./SectionWhySponsor";
import { SectionQuotes } from "./SectionQuotes";

export const PageSponsors = () => {
  return (
    <>
      <NavigationMain />
      <SectionHero marginBottom={20} />
      <SectionWhySponsor paddingTop={20} paddingBottom={20} maxWidth="2xl" />
      <SectionQuotes paddingTop={20} paddingBottom={20} maxWidth="2xl" />
      <SectionSponsors paddingTop={20} paddingBottom={20} maxWidth="2xl" />
    </>
  );
};
