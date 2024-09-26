import { Heading, Text } from "@chakra-ui/react";

import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionQuotesProps extends Omit<WrapperProps, "children"> {}

export const SectionQuotes = ({
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
}: SectionQuotesProps) => {
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
        Hear From Attendees
      </Heading>
      <Text fontSize="lg" mb={4}>
        Bilbo Baggins
      </Text>
      {/* TODO - actually add in a quote */}
      <Text fontSize="lg" maxWidth={{ base: "600px" }}>
        “[Placeholder] Attending these developer-focused networking events has
        been a game-changer for me. I’ve connected with like-minded
        professionals, gained insights from experienced engineers, and
        discovered new tools that have elevated my projects. It’s not just about
        networking, it’s about building a community that helps you grow.”
      </Text>
    </Wrapper>
  );
};
