import { AspectRatio, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";
import NextImage from "next/image";

import joe from "@/common/assets/images/people/joe.jpeg";
import allan from "@/common/assets/images/people/allan.jpeg";
import blaze from "@/common/assets/images/people/blaze.jpeg";
import paul from "@/common/assets/images/people/paul.jpeg";

import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

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
      <Grid templateColumns="1fr">
        <GridItem>
          <Grid templateColumns="2fr 1fr">
            <GridItem>
              <Heading mt={4} as="h6" size="xl">Joseph Murphy</Heading>
              <Text fontSize="xl">Software Engineer @ Little Otter</Text>
            </GridItem>
            <GridItem>
              <NextImage src={joe} height={414} width={414} alt="joseph murphy" />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
        <GridItem>
          <Grid templateColumns="2fr 1fr">
            <GridItem>
              <Heading as="h6" size="xl">Allan Wick</Heading>
              <Text fontSize="xl">Software Engineer @ Tactacam</Text>
            </GridItem>
            <GridItem>
              <NextImage src={allan} height={414} width={414} alt="allan wick" />
            </GridItem>
          </Grid>
        </GridItem>
        </GridItem>
        <GridItem>
          <Grid templateColumns="2fr 1fr" >
            <GridItem>
              <Heading mt={4} as="h6" size="xl">Blaze Smith</Heading>
              <Text fontSize="xl">UX Design Intern @ Associated Bank</Text>
            </GridItem>
            <GridItem>
              <NextImage src={blaze} height={414} width={414} alt="blaze smith" />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid templateColumns="2fr 1fr">
            <GridItem>
              <Heading mt={4} as="h6" size="xl">Blaze Smith</Heading>
              <Text fontSize="xl">Developer Consultant @ Thoughtworks</Text>
            </GridItem>
            <GridItem>
              <NextImage src={paul} height={414} width={414} alt="paul rinaldi" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
