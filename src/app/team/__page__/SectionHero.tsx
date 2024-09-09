import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Grid, GridItem, Heading, Button, Icon, Text } from "@chakra-ui/react";
import { FaChevronCircleRight } from "react-icons/fa";
import NextImage from 'next/image';

import hero from '@/common/assets/images/events/code-and-brews/IMG_4372.jpeg';

export interface SectionHeroProps extends Omit<WrapperProps, "children"> {}

export const SectionHero = ({
  background,
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
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
      <Grid templateColumns={{ base: "1fr", lg: "2fr 2fr" }} gap={12} m="0 auto">
        <GridItem>
          <NextImage
            height={422}
            width={2000}
            src={hero}
            alt="A group of people collaborating at a large table in a modern office space, with laptops and drinks on the table, and a whiteboard in the background."
          />
        </GridItem>
        <GridItem>
          <Grid templateColumns="1fr" templateRows="auto auto 1fr" height="100%">
            <GridItem>
              <Heading
                as="h1"
                size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}
                color="syntaxBlack.300"
                fontWeight="700"
              >
                Empowering Engineers
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
                Our mission is to foster a vibrant, inclusive community of software engineers at all levels, from hobbyists to professionals. We aim to inspire innovation, facilitate skill development, and create networking opportunities through collaborative events and workshops.
              </Text>
            </GridItem>
            {/* <GridItem alignSelf="end">
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
                Become a sponsor
              <Icon as={FaChevronCircleRight} style={{ marginLeft: "8px" }} />
            </Button>
            </GridItem> */}
          </Grid>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
