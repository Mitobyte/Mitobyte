import { Button, Heading, Text } from "@chakra-ui/react";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "@chakra-ui/next-js";

import { ROUTES } from "@/config/routes";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionHeadingProps extends Omit<WrapperProps, "children"> {}

export const SectionHeading = ({
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
}: SectionHeadingProps) => {
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
      <Heading size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>
        Become a supporter
      </Heading>
      <Text fontSize="xl" mt={6} mb={6} maxW={{ base: "600px" }}>
        Help us provide valuable resources, foster innovation, and create
        opportunities for the next generation of tech talent by becoming a
        sponsor.
      </Text>
      <Button
        as="a"
        size="lg"
        colorScheme="codeBlue"
        leftIcon={<AiOutlineMail size="25px" />}
        href={ROUTES.CONTACT_US}
        mr={3}
      >
        Contact
      </Button>{" "}
      <Text fontSize="2xl" display="inline-block" mr={3}>
        or
      </Text>{" "}
      <Button
        as={Link}
        variant="solid"
        size="lg"
        colorScheme="deployOrange"
        leftIcon={<LiaHandsHelpingSolid size="25px" />}
        href={ROUTES.EXTERNAL.HACK_CLUB}
        target="_blank"
      >
        Contribute
      </Button>
    </Wrapper>
  );
};
