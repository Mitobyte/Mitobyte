import {
  Heading,
  Text,
  Button,
  Icon,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

import hero from '@/common/assets/images/events/codeAndCoffee/codeCoffee1.jpg'

export const SectionHero = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={6} maxW={1150} m="0 auto">
      <GridItem>
        <Grid templateColumns="1fr" templateRows="auto auto 1fr" height="100%">
          <GridItem>
            <Heading
              as="h1"
              size={{ sm: "xl", xl: "2xl", xxl: "4xl" }}
              color="syntaxBlack.300"
              fontWeight="700"
              mt={8}
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
              as="a"
              href="/events"
              px="24px"
              py="12px"
              height={{ base: "auto", sm: "48px" }}
              bg="deployOrange.300"
              color="white.300"
              fontSize="lg"
              fontWeight="700"
              lineHeight="28px"
              borderRadius="6px"
              display="inline-flex"
              flexWrap={{ base: "wrap", sm: "nowrap" }}
              alignItems="center"
              whiteSpace={{ base: "normal", sm: "nowrap" }}
              mt={4}
              width={{ base: "100%", sm: "auto" }}
              _hover={{ bg: "deployOrange.400" }}
              _active={{ bg: "deployOrange.700" }}
            >
              View events and register
            <Icon as={FaChevronCircleRight} style={{ marginLeft: "8px" }} />
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
  )
};
