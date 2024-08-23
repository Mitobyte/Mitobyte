import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import NextImage from "next/image";

import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

const sponsors = [
  "@/common/assets/logos-sponsors/logo-caredirect.png",
  "@/common/assets/logos-sponsors/logo-codeworks.jpg",
  "@/common/assets/logos-sponsors/logo-expansive.png",
  "@/common/assets/logos-sponsors/logo-indeed.png",
  "@/common/assets/logos-sponsors/logo-explorium.png",
  "@/common/assets/logos-sponsors/logo-new-resources.png",
  "@/common/assets/logos-sponsors/logo-skygen.jpg",
  "@/common/assets/logos-sponsors/logo-vba.jpg",
  "@/common/assets/logos-sponsors/logo-wickid-cool.png",
  "@/common/assets/logos-sponsors/logo-form-labs.jpg",
  "@/common/assets/logos-sponsors/logo-roof-marketplace.png",
  "@/common/assets/logos-sponsors/logo-pkware.png",
  "@/common/assets/logos-sponsors/logo-mistura.png",
  "@/common/assets/logos-sponsors/logo-nvisia.png",
  "@/common/assets/logos-sponsors/logo-northern-ground.png",
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
          <Image
            width={150}
            as={NextImage}
            key={sponsor}
            maxWidth="150px"
            borderRadius="0"
            src={sponsor}
            alignSelf="center"
          />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
};
