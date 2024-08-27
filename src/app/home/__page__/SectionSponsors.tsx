import { Heading, SimpleGrid } from "@chakra-ui/react";
import NextImage from 'next/image';

import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

import logoCaredirect from "@/common/assets/logos-sponsors/logo-caredirect.png";
import logoCodeworks from "@/common/assets/logos-sponsors/logo-codeworks.jpg";
import logoExpansive from "@/common/assets/logos-sponsors/logo-expansive.png";
import logoIndeed from "@/common/assets/logos-sponsors/logo-indeed.png";
import logoExplorium from "@/common/assets/logos-sponsors/logo-explorium.png";
import logoNewResources from "@/common/assets/logos-sponsors/logo-new-resources.png";
import logoSkygen from "@/common/assets/logos-sponsors/logo-skygen.jpg";
import logoVba from "@/common/assets/logos-sponsors/logo-vba.jpg";
import logoWickidCool from "@/common/assets/logos-sponsors/logo-wickid-cool.png";
import logoFormLabs from "@/common/assets/logos-sponsors/logo-form-labs.jpg";
import logoRoofMarketplace from "@/common/assets/logos-sponsors/logo-roof-marketplace.png";
import logoPkware from "@/common/assets/logos-sponsors/logo-pkware.png";
import logoMistura from "@/common/assets/logos-sponsors/logo-mistura.png";
import logoNvisia from "@/common/assets/logos-sponsors/logo-nvisia.png";
import logoNorthernGround from "@/common/assets/logos-sponsors/logo-northern-ground.png";

const sponsors = [
  logoCaredirect,
  logoCodeworks,
  logoExpansive,
  logoIndeed,
  logoExplorium,
  logoNewResources,
  logoSkygen,
  logoVba,
  logoWickidCool,
  logoFormLabs,
  logoRoofMarketplace,
  logoPkware,
  logoMistura,
  logoNvisia,
  logoNorthernGround,
];

export interface SectionSponsorsProps extends Omit<WrapperProps, "children"> {}

export const SectionSponsors = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionSponsorsProps) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Heading textAlign="center" mb={14}>
        Sponsors
      </Heading>
      <SimpleGrid columns={[2, null, 3]} spacingX={9} spacingY={9}>
        {sponsors.map((sponsor) => (
          <NextImage
            width={150}
            height={150}
            alt="sponsor"
            key={sponsor.toString()}
            src={sponsor}
          />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
};
