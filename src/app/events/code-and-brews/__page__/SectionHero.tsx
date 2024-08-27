import { Box, Heading, Image } from "@chakra-ui/react";
import NextImage from "next/image";

import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

export interface SectionHeroProps extends Omit<WrapperProps, "children"> {}

export const SectionHero = ({
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
}: SectionHeroProps) => {
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
      <Box
        height={{ base: "300px", md: "400px", lg: "500px" }}
        width="100%"
        position="relative"
        overflow="hidden"
      >
        <Box
          bg="hsl(0,0%,0%, 0.75)"
          position="absolute"
          width="100%"
          height="100%"
          zIndex="1"
        >
          <Heading
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
            color="white"
            textAlign="center"
            fontSize="6xl"
          >
            Code + Brews
          </Heading>
        </Box>
        <Image
          // as={NextImage}
          alt="serious banner"
          src="@/common/assets/images/heroes/backdrop-min.jpeg"
          position="absolute"
          top={{ base: "0", md: "-100px", lg: "-150px" }}
          transform="translateX(50%, -50%)"
          width="100%"
        />
      </Box>
    </Wrapper>
  );
};
