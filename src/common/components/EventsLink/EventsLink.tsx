import { Grid, GridItem } from "@chakra-ui/react";

import { CardEventLink } from "@/common/components/CardEventLink/CardEventLink";
import { EVENTS } from "@/config/events";

export interface EventsLinkProps {
  /** Show the event icon and one-line description in each card. */
  detailed?: boolean;
}

export const EventsLink = ({ detailed = false }: EventsLinkProps) => {
  const lastRowStart = EVENTS.length - 2;

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      borderColor="syntaxBlack.300"
      borderWidth="1px"
      overflow="hidden"
    >
      {EVENTS.map((event, index) => {
        const isLeftColumn = index % 2 === 0;
        const isLastRow = index >= lastRowStart;
        const isLast = index === EVENTS.length - 1;

        return (
          <GridItem
            key={event.href}
            borderRightColor="syntaxBlack.300"
            borderRightWidth={{ base: 0, lg: isLeftColumn ? "1px" : 0 }}
            borderBottomColor="syntaxBlack.300"
            borderBottomWidth={{
              base: isLast ? 0 : "1px",
              lg: isLastRow ? 0 : "1px",
            }}
          >
            <CardEventLink
              title={event.title}
              date={event.cadence}
              time={event.time}
              href={event.href}
              description={detailed ? event.description : undefined}
              icon={detailed ? <event.icon /> : undefined}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};
