import { Box, Link, Flex, Spacer, Text, Icon, useDisclosure } from "@chakra-ui/react";
import { FaGrinStars } from "react-icons/fa";

import { ROUTES } from "@/config/routes";

import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";

export const NavigationMobile = () => {
  const { getDisclosureProps, getButtonProps, isOpen } = useDisclosure()

  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()

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
      <Link href={ROUTES.ROOT}>
        <LogoSmallMitobyte />
      </Link>
      <Spacer />
      <Box {...buttonProps}>
        <Box
          width="30px"
          height="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="4px"
          position="relative"
        >
          <Box
            width="100%"
            height="4px"
            bg="black"
            transition="transform 0.3s, opacity 0.3s"
            transform={
              isOpen ? "rotate(45deg) translate(0, 5px)" : "none"
            }
          ></Box>
          <Box
            width="100%"
            height="4px"
            bg="black"
            transition="transform 0.3s, opacity 0.3s"
            transform={
              isOpen ? "rotate(-45deg) translate(0, -5px)" : "none"
            }
          ></Box>
        </Box>
      </Box>
      <Box
        {...disclosureProps}
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
          <Link href={ROUTES.ROOT} px={6} py={2} fontWeight="500" fontSize="3xl">
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
            href="https://us5.list-manage.com/contact-form?u=e1e45fd6e057c2ffc679ea161&form_id=a9b4712bef02361db14007105b78d1b9"
            px={6}
            py={2}
            target="_blank"
            fontWeight="500"
            fontSize="3xl"
          >
            Contact
          </Link>
          <Link
            href={ROUTES.SPONSORS}
            px={6}
            py={2}
            fontWeight="500"
            fontSize="3xl"
          >
            Sponsors
          </Link>
          <Link
            href="https://hcb.hackclub.com/donations/start/mitobyte"
            target="_blank"
            px={6}
            py={2}
            color="codeBlue.300"
            fontWeight="700"
            fontSize="3xl"
          >
            Sponsor an event
            <Icon as={FaGrinStars} style={{ marginLeft: "8px" }} />
          </Link>
        </Flex>
        <Flex
          direction="column"
          align="start"
          justify="space-between"
          mt={6}
          mb={4}
          ml={3}
        >
          <Text as="span" fontSize="xl">
            Founded in Milwaukee, WI
          </Text>
          <Text as="span" fontSize="xl">
            ©2024 Mitobyte LLC
          </Text>
          <Link
            href="https://blazesmith.xyz/"
            target="_blank"
            py={2}
            fontSize="xl"
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
