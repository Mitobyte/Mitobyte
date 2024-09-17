import { Heading, Text, Button, Icon, GridItem, Grid } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextImage from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

import hero from "@/common/assets/images/events/code-and-coffee/codeCoffee1.jpg";
import { ROUTES } from "@/config/routes";

export const SectionHero = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
      gap={{ base: 12, lg: 6 }}
      maxW={1150}
      m="0 auto"
    >
      <GridItem>
        <Grid
          templateColumns="1fr"
          templateRows="auto auto 1fr"
          height="100%"
          mx={{ base: 6, lg: 3 }}
        >
          <GridItem>
            <Heading
              as="h1"
              size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}
              color="syntaxBlack.300"
              fontWeight="700"
              mt={12}
            >
              Build Together
            </Heading>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{ md: "lg", lg: "xl" }}
              color="syntaxBlack.300"
              fontWeight="500"
              lineHeight="29.26px"
              mt={4}
            >
              Join Our Events, Connect with Innovators, and Drive Growth
            </Text>
          </GridItem>
          <GridItem alignSelf="end">
            <Button
              as={Link}
              href={ROUTES.EVENTS.ROOT}
              size="lg"
              mt={6}
              bg="deployOrange.300"
              color="white.300"
              width={{ base: "100%", sm: "auto" }}
              _hover={{ bg: "deployOrange.400", textDecoration: "none" }}
              _active={{ bg: "deployOrange.700" }}
              rightIcon={<FaChevronCircleRight />}
            >
              View events and register
            </Button>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem>
        <NextImage
          height={422}
          width={2000}
          src={hero}
          alt="A group of people collaborating at a large table in a modern office space, with laptops and drinks on the table, and a whiteboard in the background."
        />
      </GridItem>
    </Grid>
  );
};
