import { CardEventLink } from "@/components/CardEventLink/CardEventLink";
import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";
import { Grid, GridItem } from "@chakra-ui/react";

export interface SectionEventsAltProps extends Omit<WrapperProps, "children"> {}

export const SectionEventsAlt = ({
  maxWidth,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop
}: SectionEventsAltProps) => {
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
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={14}>
        <GridItem borderRight={{ base: "0", lg: "1px solid black"}}>
          <CardEventLink title="Code & Coffee" time="9:00am to 12:00pm" date="First Saturday of the month" />
        </GridItem>
        <GridItem borderRight={{ base: "0", lg: "1px solid black"}} borderTop={{ base: "1px solid black", lg: "0"  }} pt={{ base: 12, lg: 0 }}>
          <CardEventLink title="Code + Brews" time="5:00pm to 8:00pm" date="Second Wednesday of the month" />
        </GridItem>
        <GridItem borderTop={{ base: "1px solid black", lg: "0"  }} pt={{ base: 12, lg: 0 }}>
          <CardEventLink title="Hackreation" time="9:00am to 4:00pm" date="Twice a year" />
        </GridItem>
      </Grid>
    </Wrapper>
  );
}
