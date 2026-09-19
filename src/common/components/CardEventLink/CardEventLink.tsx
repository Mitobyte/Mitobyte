import {
  Grid,
  GridItem,
  Heading,
  Stack,
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
  /** One-line summary shown under the title. */
  description?: string;
  /** Event icon rendered to the left of the copy. */
  icon?: React.ReactNode;
}

export const CardEventLink = ({
  date,
  title,
  time,
  href,
  description,
  icon,
}: CardEventLinkProps) => {
  const detailed = Boolean(description || icon);

  return (
    <Grid
      p={6}
      flexWrap="nowrap"
      templateColumns={icon ? "auto 1fr auto" : "1fr auto"}
      gap={{ base: 4, lg: 6 }}
      alignItems="start"
      textDecoration="unset !important"
      transition="background 0.15s ease-in-out"
      _hover={{
        bg: "blackAlpha.50",
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
        {icon && (
          <GridItem pt={1}>
            <Icon boxSize={{ base: 10, lg: 14 }} asChild>
              {icon}
            </Icon>
          </GridItem>
        )}
        <GridItem>
          <Heading className="deco">{title}</Heading>
          {description && (
            <Text mt={1} fontSize="lg" maxWidth="34ch">
              {description}
            </Text>
          )}
          {detailed ? (
            <Stack
              mt={3}
              direction={{ base: "column", md: "row" }}
              gap={{ base: 0, md: 2 }}
              color="fg.muted"
            >
              <Text>{date}</Text>
              <Text aria-hidden display={{ base: "none", md: "inline" }}>
                &middot;
              </Text>
              <Text>{time}</Text>
            </Stack>
          ) : (
            <>
              <Text>{date}</Text>
              <Text>{time}</Text>
            </>
          )}
        </GridItem>
        <GridItem mr={{ base: 0, lg: 8 }}>
          <Icon
            height={{ base: 12, lg: 75 }}
            width={{ base: 12, lg: 75 }}
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
