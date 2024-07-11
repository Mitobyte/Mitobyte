import { useState, useEffect } from "react";
import { Box, Link, Flex, Spacer, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";

export const NavigationMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: true, xl: false });

  const toggleMenu = () => {
    const navbar = document.getElementById("navbar");
    if (!menuOpen && navbar) {
      const navbarTop = navbar.offsetTop;
      if (window.scrollY < navbarTop) {
        window.scrollTo({
          top: navbarTop,
          behavior: "smooth",
        });
      }
    }
    setMenuOpen(!menuOpen);
  };

  // Use effect to lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <Box
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
      {/* Sticky Navigation Section */}
      <Box as="nav" display="flex" alignItems="center">
        {isMobile ? (
          <>
            {/* Small Logo and Hamburger Menu for Mobile and Tablet */}
            <Box>
              <Link href="/">
                <LogoSmallMitobyte />
              </Link>
            </Box>
            <Spacer />
            <Box onClick={toggleMenu} cursor="pointer">
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
                    menuOpen ? "rotate(45deg) translate(0, 5px)" : "none"
                  }
                ></Box>
                <Box
                  width="100%"
                  height="4px"
                  bg="black"
                  transition="transform 0.3s, opacity 0.3s"
                  transform={
                    menuOpen ? "rotate(-45deg) translate(0, -5px)" : "none"
                  }
                ></Box>
              </Box>
            </Box>
            <Box
              display={menuOpen ? "flex" : "none"}
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
                <Link href="/" px={6} py={2} fontWeight="500" fontSize="3xl">
                  Home
                </Link>
                <Link
                  href="/sponsors"
                  px={6}
                  py={2}
                  fontWeight="500"
                  fontSize="3xl"
                >
                  Events
                </Link>
                <Link
                  href="/sponsors"
                  px={6}
                  py={2}
                  fontWeight="500"
                  fontSize="3xl"
                >
                  About
                </Link>
                <Link
                  href="/sponsors"
                  px={6}
                  py={2}
                  fontWeight="500"
                  fontSize="3xl"
                >
                  Contact
                </Link>
                <Link
                  href="/sponsors"
                  px={6}
                  py={2}
                  fontWeight="500"
                  fontSize="3xl"
                >
                  Sponsors
                </Link>
                <Link
                  href="/sponsor"
                  px={6}
                  py={2}
                  color="codeBlue.300"
                  fontWeight="700"
                  fontSize="3xl"
                >
                  Sponsor an event
                  <LocalActivityOutlinedIcon style={{ marginLeft: "8px" }} />
                </Link>
              </Flex>
              <Flex
                direction="column"
                align="start"
                justify="space-between"
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
          </>
        ) : (
          <>
            {/* Full Navigation for Desktop */}
            <Box>
              <Link href="/">
                <LogoSmallMitobyte />
              </Link>
            </Box>
            <Box>
              <Link href="/" px={6} py={2} fontWeight="500" fontSize="xl">
                Home
              </Link>
              <Link href="/events" px={6} py={2} fontWeight="500" fontSize="xl">
                Events
              </Link>
              <Link href="/about" px={6} py={2} fontWeight="500" fontSize="xl">
                About
              </Link>
              <Link
                href="/contact"
                px={6}
                py={2}
                fontWeight="500"
                fontSize="xl"
              >
                Contact
              </Link>
              <Link
                href="/sponsors"
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
                href="/sponsor"
                color="codeBlue.300"
                fontWeight="700"
                fontSize="xl"
              >
                <Flex align="center">
                  Sponsor an event
                  <LocalActivityOutlinedIcon style={{ marginLeft: "8px" }} />
                </Flex>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
