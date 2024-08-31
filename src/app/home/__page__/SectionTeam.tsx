import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";
import { AspectRatio, Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

import joe from "@/common/assets/images/people/joe.jpeg";
import allan from "@/common/assets/images/people/allan.jpeg";

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
      <Heading mb={12} size="3xl">Meet the Team</Heading>
      <Grid templateColumns="1fr 1fr 1fr" gap={14}>
        <GridItem>
          <NextImage src={joe} height={414} width={414} alt="joseph murphy" />
          <Heading mt={4} as="h6" size="md">Joseph Murphy</Heading>
          <Text>Software Engineer @ Little Otter</Text>
        </GridItem>
        <GridItem>
          <NextImage src={allan} height={414} width={414} alt="allan wick" />
          <Heading mt={4} as="h6" size="md">Allan Wick</Heading>
          <Text>Software Engineer @ Tactacam</Text>
        </GridItem>
        <GridItem>
          <AspectRatio maxW='414px' ratio={1} bg="white" border="1px solid black">
            <Icon
              height={75}
              width={75}
              as={LuArrowUpRight}
              transition="transform 0.3s ease-in-out"
              className="icon"
            />
          </AspectRatio>
          <Heading mt={4} as="h6" size="md">Meet more of our team...</Heading>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
