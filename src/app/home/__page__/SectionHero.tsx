import { Heading, Text, Button, Icon, GridItem, Grid } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextImage from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

import hero from "@/common/assets/images/events/code-and-coffee/codeCoffee1.jpg";
import { ROUTES } from "@/config/routes";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionHeroProps extends Omit<WrapperProps, "children"> {}

export const SectionHero = ({
  maxWidth,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionHeroProps) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        gap={{ base: 12, lg: 6 }}
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
                bg="codeBlue.500"
                color="white.300"
                width={{ base: "100%", sm: "auto" }}
                _hover={{ bg: "codeBlue.700", textDecoration: "none" }}
                _active={{ bg: "codeBlue.600" }}
                rightIcon={<FaChevronCircleRight />}
              >
                View events and register
              </Button>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <NextImage
            height={676}
            width={900}
            src={hero}
            alt="A group of people collaborating at a large table in a modern office space, with laptops and drinks on the table, and a whiteboard in the background."
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
