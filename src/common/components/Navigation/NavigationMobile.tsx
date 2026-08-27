"use client";

import {
  Box,
  Link,
  Flex,
  Spacer,
  Text,
  Icon,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaGrinStars } from "react-icons/fa";

import { ROUTES } from "@/config/routes";

import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";
import { MenuLinks } from "./MenuLinks";

export const NavigationMobile = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      display={{ base: "block", xl: "none" }}
      position="sticky"
      top="0"
      left="0"
      zIndex="2"
      bg="white"
      px={4}
      py={3}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="syntaxBlack.300"
      id="navbar"
    >
      <Box as="nav" display="flex" alignItems="center">
        <Box>
          <Link href={ROUTES.ROOT} mb={1}>
            <LogoSmallMitobyte />
          </Link>
        </Box>
        <Spacer />
        <Button
          border={0}
          variant="outline"
          onClick={onToggle}
          aria-expanded={open}
        >
          <Box
            as="span"
            width="30px"
            height="20px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="4px"
            position="relative"
            cursor="pointer"
          >
            <Box
              as="span"
              width="100%"
              height="4px"
              bg="black"
              transition="transform 0.3s, opacity 0.3s"
              transform={open ? "rotate(45deg) translate(0, 5px)" : "none"}
            />
            <Box
              as="span"
              width="100%"
              height="4px"
              bg="black"
              transition="transform 0.3s, opacity 0.3s"
              transform={open ? "rotate(-45deg) translate(0, -5px)" : "none"}
            />
          </Box>
        </Button>
        <Box
          display={open ? "flex" : "none"}
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
          bg="white"
          position="absolute"
          top="64px"
          left="0"
          width="100%"
          height="calc(100vh - 66px)"
          borderTop="1px solid"
          borderColor="syntaxBlack.300"
        >
          <Flex direction="column" align="start">
            <Link
              href={ROUTES.ROOT}
              px={6}
              py={2}
              fontWeight="500"
              fontSize="3xl"
            >
              Home
            </Link>
            <Link
              href={ROUTES.EVENTS.ROOT}
              px={6}
              py={2}
              fontWeight="500"
              fontSize="3xl"
            >
              Events
            </Link>
            <Link
              href={ROUTES.TEAM}
              px={6}
              py={2}
              fontWeight="500"
              fontSize="3xl"
            >
              Team
            </Link>
            <Link
              href={ROUTES.CONTACT_US}
              px={6}
              py={2}
              fontWeight="500"
              fontSize="3xl"
            >
              Contact
            </Link>
            <Link
              href={ROUTES.SHOWCASE}
              px={6}
              py={2}
              fontWeight="500"
              fontSize="3xl"
            >
              Showcase
            </Link>
            <Link
              href={ROUTES.SPONSORS}
              px={6}
              py={2}
              color="codeBlue.300"
              fontWeight="700"
              fontSize="3xl"
            >
              Sponsor an event
              <Icon style={{ marginLeft: "8px" }} asChild>
                <FaGrinStars />
              </Icon>
            </Link>
          </Flex>
          <Flex
            direction="column"
            align="start"
            justify="space-between"
            mt={7}
            mb={4}
            ml={5}
          >
            <Text as="span" fontSize="xl">
              Founded in Milwaukee, WI
            </Text>
            <Text as="span" fontSize="xl">
              ©{new Date().getFullYear()} Mitobyte. All rights reserved.
            </Text>
            <Link
              href="https://blazesmith.xyz/"
              target="_blank"
              py={2}
              fontSize="xl"
              rel="noreferrer"
              textDecoration="underline"
            >
              Website by Blaze Smith @ Shovel Studio
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
