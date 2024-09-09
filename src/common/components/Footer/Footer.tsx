import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import logo from '@/common/assets/logos-mitobyte/mb-bw-small.svg';
import NextImage from 'next/image';
import { ROUTES } from "@/config/routes";
import { FooterLink } from "./FooterLink";

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
      <Grid templateColumns={{ base: '2fr 1fr 1fr 2fr'}} maxWidth="1150" margin="0 auto">
        <GridItem>
          <NextImage src={logo} height={44} width={66} alt="mitobyte" />
          <Text fontSize="lg" textAlign="left">Founded in Milwaukee, WI</Text>
          <Text fontSize="lg" textAlign="left"> &copy; 2021 Mitobyte. All rights reserved.</Text>
        </GridItem>
        <GridItem>
          <FooterLink href={ROUTES.ROOT}>Home</FooterLink>
          <FooterLink href={ROUTES.EVENTS.ROOT} mt={4}>Events</FooterLink>
          <FooterLink href={ROUTES.ROOT} mt={4}>About</FooterLink>
          <FooterLink href="https://us5.list-manage.com/contact-form?u=e1e45fd6e057c2ffc679ea161&form_id=a9b4712bef02361db14007105b78d1b9" mt={4}>Contact</FooterLink>
          <FooterLink href={ROUTES.SPONSORS} mt={4}>Sponsors</FooterLink>
        </GridItem>
        <GridItem>
          <FooterLink href={ROUTES.ROOT}>Privacy</FooterLink>
          <FooterLink href={ROUTES.ROOT} mt={4}>Terms</FooterLink>
          <FooterLink href={ROUTES.ROOT} mt={4}>Accessibility</FooterLink>
          <FooterLink href={ROUTES.ROOT} mt={4}>Cookies</FooterLink>
          <FooterLink href={ROUTES.ROOT} mt={4}>GDPR</FooterLink>
        </GridItem>
        <GridItem>
          <Text fontSize="lg" textAlign="right">Designed by Shovel</Text>
          <Text fontSize="lg" textAlign="right">Developed by Mitobyte</Text>
          <Text fontSize="lg" textAlign="right">Powered by Artisan Hosting</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
