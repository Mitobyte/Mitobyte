import { Box, Heading, Text } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Quote } from "@/components/Quote/Quote";
import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

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
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <Box maxW="350px" margin="0 auto">
            <Quote
              author="Anonymous"
              quote="I don't talk to my mama but I talk to my diary."
            />
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box maxW="350px" margin="0 auto">
            <Quote
              author="Anonymous"
              quote="'Twas I who stole from the cookie jar."
            />
          </Box>
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
};
