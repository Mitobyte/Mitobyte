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
      <Heading size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>Become a supporter</Heading>
      <Text fontSize="xl">Help us provide valuable resources, foster innovation, and create opportunities for the next generation of tech talent by becoming a sponsor.</Text>
    </Wrapper>
  );
};
