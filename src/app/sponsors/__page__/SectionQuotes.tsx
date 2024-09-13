"use client";

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
          See what our sponsors have to say!
        </Text>
      </Box>
      {/* <Splide aria-label="My Favorite Images">
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
      </Splide> */}
    </Wrapper>
  );
};
