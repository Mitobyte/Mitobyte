import { Grid, GridItem } from "@chakra-ui/react";

import { CardEventLink } from "@/common/components/CardEventLink/CardEventLink";

export const EventsLink = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={14}>
      <GridItem
        borderRightWidth={{ base: "0", lg: "1px" }}
        borderRightColor={{ base: "white.600" }}
      >
        <CardEventLink
          title="Code & Coffee"
          time="9:00am to 12:00pm"
          date="1st Saturday each month"
        />
      </GridItem>
      <GridItem
        borderRightWidth={{ base: "0", lg: "1px" }}
        borderRightColor={{ base: "white.600" }}
        borderTopWidth={{ base: "1px", lg: "0" }}
        borderTopColor={{ base: "white.600" }}
        pt={{ base: 12, lg: 0 }}
      >
        <CardEventLink
          title="Code + Brews"
          time="5:00pm to 8:00pm"
          date="2nd Wednesday each month"
        />
      </GridItem>
      <GridItem
        borderTopWidth={{ base: "1px", lg: "0" }}
        borderTopColor={{ base: "white.600" }}
        pt={{ base: 12, lg: 0 }}
      >
        <CardEventLink
          title="Hackreation"
          time="9:00am to 4:00pm"
          date="Twice a year"
        />
      </GridItem>
    </Grid>
  );
};
