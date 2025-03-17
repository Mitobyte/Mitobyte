import { Box, Link, Spacer, Button, LinkOverlay } from "@chakra-ui/react";
import { FaGrinStars } from "react-icons/fa";

import { ROUTES } from "@/config/routes";
import { MenuLinks } from "./MenuLinks";
import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";

export const NavigationDesktop = () => {
  return (
    <Box
      display={{ base: "none", xl: "block" }}
      as="header"
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
        <Box>
          <Link
            href={ROUTES.EVENTS.ROOT}
            px={6}
            py={2}
            fontWeight="500"
            fontSize="xl"
          >
            Events
          </Link>
          <Link href={ROUTES.TEAM} px={6} py={2} fontWeight="500" fontSize="xl">
            Team
          </Link>
          <Link
            href={ROUTES.CONTACT_US}
            rel="noreferrer"
            px={6}
            py={2}
            fontWeight="500"
            fontSize="xl"
          >
            Contact
          </Link>
          <Link
            href={ROUTES.SHOWCASE}
            px={6}
            py={2}
            fontWeight="500"
            fontSize="xl"
          >
            Showcase
          </Link>
        </Box>
        <Spacer />
        <Button
          as={Link}
          colorScheme="codeBlue"
          variant="ghost"
          href={ROUTES.SPONSORS}
          fontWeight="700"
          fontSize="xl"
          rightIcon={<FaGrinStars />}
          size="lg"
        >
          Sponsor us!
        </Button>
      </Box>
    </Box>
  );
};
