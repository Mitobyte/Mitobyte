import { Box, Heading, Text } from "@chakra-ui/react";
// import { Quote } from "@/common/components/Quote/Quote";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionQuotesProps extends Omit<WrapperProps, "children"> {}

export const SectionQuotes = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
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
      <Box mb={16}>
        <Heading mb="3" textAlign="center">
          Testimonials
        </Heading>
        <Text textAlign="center" maxW="400px" margin="0 auto">
          Don't take our word for it, hear from our community and what they
          think about our events!
        </Text>
      </Box>
    </Wrapper>
  );
};
