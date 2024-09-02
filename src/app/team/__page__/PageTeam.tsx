'use client';

import { AspectRatio, Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

import joe from "@/common/assets/images/people/joe.jpeg";
import allan from "@/common/assets/images/people/allan.jpeg";

export interface PageTeamProps {}

export const PageTeam = () => {
  return (
    <>
      <Heading mb={12} size="4xl">Meet the Team</Heading>
      <Grid templateColumns="1fr" gap={3}>
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
    </>
  );
};
