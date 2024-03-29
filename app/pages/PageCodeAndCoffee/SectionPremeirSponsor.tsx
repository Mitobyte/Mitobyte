import { Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ImageAndContent } from "~/components/ImageAndContent/ImageAndContent";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

export interface SectionPremierSponsorProps
  extends Omit<WrapperProps, "children"> {}

export const SectionPremierSponsor: FC<SectionPremierSponsorProps> = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxWidth={maxWidth}
    >
      <Container maxW="md" mb={12}>
        <Heading textAlign="center" mb="3">
          PKWARE
        </Heading>
        <Text textAlign="center">Code + Brews Premier Sponsor</Text>
      </Container>
      <Container
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      >
        <ImageAndContent
          imageSrc="/assets/images/people/person1.webp"
          imageAlt="A person"
          title="MKE TECH <3 PKWARE"
          text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
          swapOrder={false}
        />
      </Container>
    </Wrapper>
  );
};
