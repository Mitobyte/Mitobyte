import { Button, Heading, Text, Link } from "@chakra-ui/react";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";

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
      <Button size="lg" colorPalette="codeBlue" mr={3} asChild>
        <a href={ROUTES.CONTACT_US}>
          <AiOutlineMail size="25px" />
          Contact
        </a>
      </Button>{" "}
      <Text fontSize="2xl" display="inline-block" mr={3}>
        or
      </Text>{" "}
      <Button variant="solid" size="lg" colorPalette="deployOrange" asChild>
        <Link href={ROUTES.EXTERNAL.HACK_CLUB} target="_blank">
          <LiaHandsHelpingSolid size="25px" />
          Contribute
        </Link>
      </Button>
    </Wrapper>
  );
};
