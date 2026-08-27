import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Heading, Text } from "@chakra-ui/react";

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
      <Heading size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>Our Team</Heading>
      <Text fontSize="xl" mt={4}>
        Mitobyte is built entirely by volunteers who share a passion for
        technology and community. Our leadership team, along with countless
        dedicated volunteers, makes it all possible.
      </Text>
    </Wrapper>
  );
};
