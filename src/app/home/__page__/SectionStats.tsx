import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export interface SectionStatsProps extends Omit<WrapperProps, "children"> {}

export const SectionStats = ({
  maxWidth,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionStatsProps) => {
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
        templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }}
        gap={0}
        border="1px solid black"
      >
        <GridItem borderRight={{ base: 0, lg: "1px solid black" }} ml={6} p={6}>
          <Heading>750+</Heading>
          <Text>Members across Meetup & Eventbrite</Text>
        </GridItem>
        <GridItem borderRight={{ base: 0, lg: "1px solid black" }} ml={6} p={6}>
          <Heading>5+ years</Heading>
          <Text>In curating engineering focused events</Text>
        </GridItem>
        <GridItem borderRight={{ base: 0, lg: "1px solid black" }} ml={6} p={6}>
          <Heading>100+ events</Heading>
          <Text>Over a hundred events hosted</Text>
        </GridItem>
        <GridItem ml={6} p={6}>
          <Heading>600+</Heading>
          <Text>On our mailing list</Text>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
