import { Grid, GridItem, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";

export interface CardEventLinkProps {
  date: string;
  title: string;
  time: string;
}

export const CardEventLink = ({ date, title, time }: CardEventLinkProps) => {
  return (
    <Grid
      as={Link}
      href="#"
      flexWrap="nowrap"
      templateColumns="1fr auto"
      gap={4}
      textDecoration="unset !important"
      _hover={{
        ".icon": {
          transform: "rotate(45deg)",
        },
        ".deco": {
          textDecoration: "underline",
        },
      }}
    >
      <GridItem>
        <Heading className="deco">{title}</Heading>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </GridItem>
      <GridItem mr={8}>
        <Icon
          height={75}
          width={75}
          as={LuArrowUpRight}
          transition="transform 0.3s ease-in-out"
          className="icon"
        />
      </GridItem>
    </Grid>
  );
};
