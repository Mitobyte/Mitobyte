import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  Link,
  LinkProps,
} from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";

export interface CardEventLinkProps {
  date: string;
  title: string;
  time: string;
  href: LinkProps["href"];
}

export const CardEventLink = ({
  date,
  title,
  time,
  href,
}: CardEventLinkProps) => {
  return (
    <Grid
      p={6}
      flexWrap="nowrap"
      templateColumns="1fr auto"
      gap={4}
      textDecoration="unset !important"
      _hover={{
        "& .icon": {
          transform: "rotate(45deg)",
        },
        "& .deco": {
          textDecoration: "underline",
        },
      }}
      asChild
    >
      <Link href={href}>
        <GridItem>
          <Heading className="deco">{title}</Heading>
          <Text>{date}</Text>
          <Text>{time}</Text>
        </GridItem>
        <GridItem mr={8}>
          <Icon
            height={75}
            width={75}
            transition="transform 0.15s ease-in-out"
            className="icon"
            asChild
          >
            <RiArrowRightUpLine />
          </Icon>
        </GridItem>
      </Link>
    </Grid>
  );
};
