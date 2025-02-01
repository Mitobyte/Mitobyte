import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import logo from "@/common/assets/logos-mitobyte/mb-bw-small.svg";
import NextImage from "next/image";
import { ROUTES } from "@/config/routes";
import { FooterLink } from "./FooterLink";
import { ImageAndContent } from "../ImageAndContent/ImageAndContent";

export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="syntaxBlack.300"
      color="white"
      pt={10}
      px={5}
      pb={20}
      textAlign="center"
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "2fr 1fr 1fr 2fr" }}
        maxWidth="1150"
        margin="0 auto"
        gap={6}
      >
        <GridItem>
          <NextImage src={logo} height={44} width={66} alt="mitobyte" />
          <Text fontSize="lg" textAlign="left">
            Founded in Milwaukee, WI
          </Text>
          <Text fontSize="lg" textAlign="left">
            {" "}
            &copy; 2024 Mitobyte. All rights reserved.
          </Text>
        </GridItem>
        <GridItem>
          <FooterLink href={ROUTES.ROOT}>Home</FooterLink>
          <FooterLink href={ROUTES.EVENTS.ROOT} mt={4}>
            Events
          </FooterLink>
          <FooterLink href={ROUTES.ABOUT} mt={4}>
            About
          </FooterLink>
          <FooterLink href={ROUTES.CONTACT_US} mt={4} rel="noreferrer">
            Contact
          </FooterLink>
        </GridItem>
        <GridItem>
          <FooterLink href={ROUTES.SPONSORS}>Sponsors</FooterLink>
          <FooterLink href={ROUTES.PRIVACY} mt={4}>
            Privacy
          </FooterLink>
          <FooterLink href={ROUTES.CODE_OF_CONDUCT} mt={4}>
            Code of Conduct
          </FooterLink>
          <FooterLink href={ROUTES.ROOT} mt={4}>
            Cookies
          </FooterLink>
        </GridItem>
        <GridItem>
          <Text fontSize="lg" textAlign={{ base: "left", lg: "right" }}>
            Designed by{" "}
            <FooterLink
              display="inline-block"
              href="https://www.shovel.studio/"
              rel="noreferrer"
              target="_blank"
            >
              Shovel Studio
            </FooterLink>
          </Text>
          <Text fontSize="lg" textAlign={{ base: "left", lg: "right" }} mt={4}>
            Developed by{" "}
            <FooterLink display="inline-block" href={ROUTES.ABOUT}>
              Mitobyte
            </FooterLink>
          </Text>
          <Text fontSize="lg" textAlign={{ base: "left", lg: "right" }} mt={4}>
            Powered by{" "}
            <FooterLink
              display="inline-block"
              href="https://www.artisanhosting.net/"
              rel="noreferrer"
              target="_blank"
            >
              Artisan Hosting
            </FooterLink>
          </Text>
          <Text fontSize="lg" textAlign={{ base: "left", lg: "right" }} mt={4}>
            Mitobyte{" "}
            <FooterLink
              display="inline-block"
              href="https://discord.gg/bRDpmysPQA"
              rel="noreferrer"
              target="_blank"
            >
              Discord Server
            </FooterLink>
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
