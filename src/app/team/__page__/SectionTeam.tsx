import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import joe from "@/common/assets/images/people/profile-joe.jpg";
import allan from "@/common/assets/images/people/profile-allan.jpg";
import blaze from "@/common/assets/images/people/profile-blaze.jpg";
import paul from "@/common/assets/images/people/profile-paul.jpg";

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
      <Grid templateColumns="1fr" rowGap={{ base: 6, md: 0 }}>
        <GridItem>
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }}>
            <GridItem order={{ base: 1, md: 0 }}>
              <Heading mt={4} as="h6" size="xl">
                Joseph Murphy
              </Heading>
              <Text fontSize="xl">Software Engineer @ Little Otter</Text>
            </GridItem>
            <GridItem order={{ base: 0, md: 1 }}>
              <NextImage
                src={joe}
                height={700}
                width={700}
                alt="joseph murphy"
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }}>
              <GridItem order={{ base: 1, md: 0 }}>
                <Heading as="h6" size="xl">
                  Allan Wick
                </Heading>
                <Text fontSize="xl">Software Engineer @ Tactacam</Text>
              </GridItem>
              <GridItem order={{ base: 0, md: 1 }}>
                <NextImage
                  src={allan}
                  height={400}
                  width={400}
                  alt="allan wick"
                />
              </GridItem>
            </Grid>
          </GridItem>
        </GridItem>
        <GridItem>
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }}>
            <GridItem order={{ base: 1, md: 0 }}>
              <Heading mt={4} as="h6" size="xl">
                Blaze Smith
              </Heading>
              <Text fontSize="xl">Founder @ Shovel Studio</Text>
            </GridItem>
            <GridItem order={{ base: 0, md: 1 }}>
              <NextImage
                src={blaze}
                height={400}
                width={400}
                alt="blaze smith"
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }}>
            <GridItem order={{ base: 1, md: 0 }}>
              <Heading mt={4} as="h6" size="xl">
                Paul Rinaldi
              </Heading>
              <Text fontSize="xl">Developer Consultant @ Thoughtworks</Text>
            </GridItem>
            <GridItem order={{ base: 0, md: 1 }}>
              <NextImage
                src={paul}
                height={400}
                width={400}
                alt="paul rinaldi"
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
