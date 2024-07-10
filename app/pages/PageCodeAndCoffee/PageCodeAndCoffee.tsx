import { NavigationMain } from "~/components/Navigation/NavigationMain";
import { SectionHero } from "./SectionHero";
import { SectionPremierSponsor } from "./SectionPremeirSponsor";
import { SectionHowItWorks } from "./SectionHowItWorks";
import { SectionGallery } from "./SectionGallery";
import { LogoHeaderMitobyte } from "~/components/Logos/LogoHeaderMitobyte";

export const PageCodeAndCoffee = () => {
  return (
    <>
      <LogoHeaderMitobyte />
      <NavigationMain />
      <SectionHero marginBottom={20} />
      <SectionPremierSponsor
        paddingTop={20}
        paddingBottom={20}
        maxWidth="2xl"
      />
      <SectionHowItWorks maxWidth="xl" marginBottom={20} />
      <SectionGallery paddingTop={20} paddingBottom={20} />
    </>
  );
};
