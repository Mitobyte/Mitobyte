import { Box, Link, Flex, Spacer, Icon } from "@chakra-ui/react";
import { FaGrinStars } from "react-icons/fa";

import { ROUTES } from "@/config/routes";

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
        <Link href={ROUTES.ROOT} mb={1}>
          <LogoSmallMitobyte />
        </Link>
        <Box>
          <Link href={ROUTES.EVENTS.ROOT} px={6} py={2} fontWeight="500" fontSize="xl">
            Events
          </Link>
          <Link href={ROUTES.TEAM} px={6} py={2} fontWeight="500" fontSize="xl">
            Team
          </Link>
          <Link
            href="https://us5.list-manage.com/contact-form?u=e1e45fd6e057c2ffc679ea161&form_id=a9b4712bef02361db14007105b78d1b9"
            px={6}
            py={2}
            target="_blank"
            fontWeight="500"
            fontSize="xl"
          >
            Contact
          </Link>
          <Link
            href={ROUTES.SPONSORS}
            px={6}
            py={2}
            fontWeight="500"
            fontSize="xl"
          >
            Sponsors
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link
            href="https://hcb.hackclub.com/donations/start/mitobyte"
            color="codeBlue.300"
            fontWeight="700"
            fontSize="xl"
          >
            <Flex align="center">
              Sponsor us!
              <Icon as={FaGrinStars} style={{ marginLeft: "8px" }} />
            </Flex>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
