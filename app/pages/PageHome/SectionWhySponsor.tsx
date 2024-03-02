import { Heading, Text, Box, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { FC } from "react";
import { ListPoint } from "~/components/ListPoint/ListPoint";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

const numberStyles = {
  border: "2px solid black",
  fontWeight: "bold",
  borderRadius: "100%",
  height: "25px",
  width: "25px",
  marginRight: "35px",
  display: "inline-block",
  // position: 'relative',
  _before: {
    content: '""',
    position: "absolute",
    top: "12px",
    left: "25px",
    transform: "translateY(-50%)",
    width: "25px",
    height: "2px",
    background: "black",
  },
};

export interface SectionWhySponsorProps
  extends Omit<WrapperProps, "children"> {}

export const SectionWhySponsor: FC<SectionWhySponsorProps> = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}) => {
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
          to="/sponsors"
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
