import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import hero from "@/common/assets/images/events/code-and-brews/IMG_4372.jpeg";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionHeroProps extends Omit<WrapperProps, "children"> {}

export const SectionHero = ({
  background,
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionHeroProps) => {
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
      <Grid
        templateColumns={{ base: "1fr", lg: "2fr 2fr" }}
        gap={12}
        m="0 auto"
      >
        <GridItem>
          <NextImage
            height={510}
            width={680}
            src={hero}
            alt="A group of nerds gather for conversation and heated discussion."
          />
        </GridItem>
        <GridItem>
          <Grid
            templateColumns="1fr"
            templateRows="auto auto 1fr"
            height="100%"
          >
            <GridItem>
              <Heading
                as="h1"
                size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}
                color="syntaxBlack.300"
                fontWeight="700"
              >
                Empowering Engineers
              </Heading>
            </GridItem>
            <GridItem>
              <Text
                fontSize={{ md: "lg", lg: "xl" }}
                color="syntaxBlack.300"
                lineHeight="29.26px"
                mt={4}
              >
                Our mission is to foster a vibrant, inclusive community of
                software engineers at all levels, from hobbyists to
                professionals. We aim to inspire innovation, facilitate skill
                development, and create networking opportunities through
                collaborative events and workshops.
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
