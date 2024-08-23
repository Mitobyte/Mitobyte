import { Heading, Text, Box, Flex, Button } from "@chakra-ui/react";
import { ListPoint } from "@/components/ListPoint/ListPoint";
import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

export interface SectionWhySponsorProps
  extends Omit<WrapperProps, "children"> {}

export const SectionWhySponsor = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}: SectionWhySponsorProps) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxWidth={maxWidth}
    >
      <Box mb={14}>
        <Heading mb="6" textAlign="center">
          Why Sponsor?
        </Heading>
      </Box>
      <Box>
        <Flex mb="5" position="relative" alignItems="center">
          <ListPoint text="1" />
          <Text flex="1" mb="3" fontSize="2xl">
            Enhanced Visibility in Targeted Communities
          </Text>
        </Flex>
        <Flex position="relative" mb="5" alignItems="center">
          <ListPoint text="2" />
          <Text mb="3" flex="1" fontSize="2xl">
            Access to Passionate Professionals and Emerging Talent
          </Text>
        </Flex>
        <Flex position="relative" alignItems="center">
          <ListPoint text="3" />
          <Text flex="1" fontSize="2xl">
            Fostering Innovation and Breaking Knowledge Silos
          </Text>
        </Flex>
      </Box>
      <Flex alignItems="center">
        <Button
          as={Link}
          mt="12"
          href={ROUTES.SPONSORS}
          size="lg"
          variant="solid"
          colorScheme="blue"
          flex="1"
        >
          Learn More
        </Button>
      </Flex>
    </Wrapper>
  );
};
