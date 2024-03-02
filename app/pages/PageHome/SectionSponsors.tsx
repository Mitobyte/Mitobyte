import { Heading, Image, Box, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

const sponsors = [
  "/assets/logos-sponsors/logo-caredirect.png",
  "/assets/logos-sponsors/logo-codeworks.jpg",
  "/assets/logos-sponsors/logo-expansive.png",
  "/assets/logos-sponsors/logo-indeed.png",
  "/assets/logos-sponsors/logo-new-resources.png",
  "/assets/logos-sponsors/logo-skygen.jpg",
  "/assets/logos-sponsors/logo-vba.jpg",
  "/assets/logos-sponsors/logo-wickid-cool.png",
  "/assets/logos-sponsors/logo-form-labs.jpg",
  "/assets/logos-sponsors/logo-roof-marketplace.png",
  "/assets/logos-sponsors/logo-pkware.png",
];

export interface SectionSponsorsProps extends Omit<WrapperProps, "children"> {}

export const SectionSponsors: FC<SectionSponsorsProps> = ({
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
}) => {
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
