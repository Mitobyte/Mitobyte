import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Grid, GridItem, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdOutlineCoffee } from "react-icons/md";
import { RiBeerLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { PiCodeSimpleBold } from "react-icons/pi";

const iconSize = "125px"

export interface SectionDescriptionProps extends Omit<WrapperProps, "children"> {}

export const SectionEventsDescription = ({
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
}: SectionDescriptionProps) => {
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
      <Heading mb={12} size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>Core Events</Heading>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
        <GridItem>
          <Grid templateColumns={{ base: "1fr 1fr" }}>
            <GridItem>
              <Heading mb={3} size="lg">Code & Coffee</Heading>
              <UnorderedList>
                <ListItem>Monthly morning event</ListItem>
                <ListItem>Informal coding and networking</ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem>
              <MdOutlineCoffee size={iconSize} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid templateColumns={{ base: "1fr 1fr" }}>
            <GridItem>
              <Heading mb={3} size="lg">Code + Brews</Heading>
              <UnorderedList>
                <ListItem>Monthly evening event</ListItem>
                <ListItem>Similar to Code & Coffee but in a relaxed night setting</ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem>
              <RiBeerLine size={iconSize} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}>
            <GridItem>
              <Heading mb={3} size="lg">Resume Workshop</Heading>
              <UnorderedList>
                <ListItem>Regular sessions with advice from engineers and recruiters</ListItem>
                <ListItem>Help attendees polish their resumes</ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem>
              <CgFileDocument size={iconSize} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}>
            <GridItem>
              <Heading mb={3} size="lg">Hackreation</Heading>
              <UnorderedList>
                <ListItem>Biannual Event</ListItem>
                <ListItem>Showcase innovative projects</ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem>
              <PiCodeSimpleBold size={iconSize} />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
