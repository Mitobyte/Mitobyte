import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Button, Heading, Link, Text } from "@chakra-ui/react";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

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
        href="mailto:allan@mitobyte.com"
        target="_blank"
        mr={3}
      >
        Contact us
      </Button>{" "}
      <Text fontSize="2xl" display="inline-block" mr={3}>
        or
      </Text>{" "}
      <Button
        as="a"
        variant="solid"
        size="lg"
        colorScheme="deployOrange"
        leftIcon={<LiaHandsHelpingSolid size="25px" />}
        href="https://hcb.hackclub.com/donations/start/mitobyte"
        target="_blank"
      >
        Contribute today!
      </Button>
    </Wrapper>
  );
};
