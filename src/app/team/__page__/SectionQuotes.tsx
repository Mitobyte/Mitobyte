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
        Passionate drives us.
      </Heading>
      <Text fontSize="xl" mb={4}>
        Joseph Murphy
      </Text>
      <Text fontSize="xl" maxWidth={{ base: "600px" }}>
        "At Mitobyte, we are a team fueled by our love for technology and our
        desire to push boundaries. Our passion is the cornerstone of everything
        we do—from hosting community-driven events to fostering innovation and
        collaboration among engineers. We believe that when people are
        passionate about their work, incredible things happen. It’s this energy
        that drives us to continuously learn, grow, and support the tech
        community around us. As a team, we are committed to creating an
        inclusive, vibrant space where creativity thrives and where every idea,
        no matter how bold, has the potential to change the future."
      </Text>
    </Wrapper>
  );
};
