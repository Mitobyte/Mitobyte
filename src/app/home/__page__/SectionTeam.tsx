import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import {
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "@chakra-ui/next-js";

import joe from "@/common/assets/images/people/profile-joe.jpg";
import allan from "@/common/assets/images/people/profile-allan.jpg";
import { ROUTES } from "@/config/routes";

export interface SectionTeamProps extends Omit<WrapperProps, "children"> {}

export const SectionTeam = ({
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
}: SectionTeamProps) => {
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
      <Heading mb={12} size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>
        Meet the Team
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        gap={{ base: 12, lg: 3 }}
      >
        <GridItem>
          <NextImage src={joe} height={450} width={450} alt="joseph murphy" />
          <Heading mt={4} as="h6" size="md">
            Joseph Murphy
          </Heading>
          <Text>Software Engineer @ Little Otter</Text>
        </GridItem>
        <GridItem>
          <NextImage src={allan} height={450} width={450} alt="allan wick" />
          <Heading mt={4} as="h6" size="md">
            Allan Wick
          </Heading>
          <Text>Software Engineer @ Tactacam</Text>
        </GridItem>
        <GridItem>
          <Link as={Link} href={ROUTES.TEAM}>
            <AspectRatio
              maxW={{ base: "700px", lg: "700px" }}
              ratio={{ base: 3, lg: 1 }}
              bg="white"
              borderWidth="1px"
              borderColor="syntaxBlack.300"
              _hover={{
                ".icon": {
                  transform: "rotate(45deg)",
                },
                ".deco": {
                  textDecoration: "underline",
                },
              }}
            >
              <Icon
                height={75}
                width={75}
                as={RiArrowRightUpLine}
                transition="transform 0.15s ease-in-out"
                className="icon"
              />
            </AspectRatio>
            <Heading mt={4} as="h6" size="md">
              Meet more of our team...
            </Heading>
          </Link>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
