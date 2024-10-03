import { Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import NextImage from "next/image";

import hero from "@/common/assets/images/events/code-and-brews/candb.jpeg";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionAboutUsProps extends Omit<WrapperProps, "children"> {}

export const SectionAboutUs = ({
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
}: SectionAboutUsProps) => {
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
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        gap={6}
        maxW={1150}
        m="0 auto"
      >
        <GridItem>
          <NextImage
            height={547}
            width={730}
            src={hero}
            alt="People collaborating. Generally having a really good time."
          />
        </GridItem>
        <GridItem>
          <Heading
            as="h2"
            size={{ sm: "xl", xl: "2xl", xxl: "4xl" }}
            color="syntaxBlack.300"
            fontWeight="700"
            mx={6}
          >
            20+ Events!
          </Heading>
          <Text
            fontSize={{ md: "lg", lg: "xl" }}
            color="syntaxBlack.300"
            fontWeight="500"
            lineHeight="29.26px"
            m={6}
          >
            Every year Mitobyte connects with over 1,000 Milwaukee developers
            annually through innovative networking events and hackathons. We
            foster collaboration, creativity, and growth in the local tech
            community. Join us to shape the future of technology in Milwaukee.
          </Text>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
