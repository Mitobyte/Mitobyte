import { Grid, GridItem } from "@chakra-ui/react";

import { CardEventLink } from "@/common/components/CardEventLink/CardEventLink";
import { ROUTES } from "@/config/routes";

export const EventsLink = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      borderColor="syntaxBlack.300"
      borderWidth="1px"
    >
      <GridItem
        borderRightColor="syntaxBlack.300"
        borderRightWidth={{ base: 0, lg: "1px" }}
        borderBottomColor="syntaxBlack.300"
        borderBottomWidth={{ base: "1px" }}
      >
        <CardEventLink
          title="Code & Coffee"
          time="9:00am to 12:00pm"
          date="1st Saturday each month"
          href={ROUTES.EVENTS.CODE_AND_COFFEE}
        />
      </GridItem>
      <GridItem
        borderBottomColor="syntaxBlack.300"
        borderBottomWidth={{ base: "1px" }}
      >
        <CardEventLink
          title="Code + Brews"
          time="5:00pm to 8:00pm"
          date="2nd Wednesday each month"
          href={ROUTES.EVENTS.CODE_AND_BREWS}
        />
      </GridItem>
      <GridItem
        borderRightColor="syntaxBlack.300"
        borderRightWidth={{ base: 0, lg: "1px" }}
        borderBottomColor="syntaxBlack.300"
        borderBottomWidth={{ base: "1px", lg: 0 }}
      >
        <CardEventLink
          title="Resume Workshop"
          time="9:00am to 12:00pm"
          date="Once a quarter"
          href={ROUTES.EVENTS.RESUME_WORKSHOP}
        />
      </GridItem>
      <GridItem>
        <CardEventLink
          title="Hackreation"
          time="9:00am to 4:00pm"
          date="Twice a year"
          href={ROUTES.EVENTS.HACKREATION}
        />
      </GridItem>
    </Grid>
  );
};
