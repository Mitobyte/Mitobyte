import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { MdOutlineCoffee } from "react-icons/md";
import { RiBeerLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { PiCodeSimpleBold } from "react-icons/pi";
import { EventDescription } from "@/common/components/EventDescription/EventDescription";

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
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={0}>
        <GridItem
          borderRightWidth="1px"
          borderRightColor="white.600"
          borderBottomWidth="1px"
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Code & Coffee"
            description={["Monthly morning event", "Informal coding and networking"]}
            imageSlot={<MdOutlineCoffee size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderBottomWidth="1px"
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Code + Brews"
            description={["Monthly evening event", "Similar to Code & Coffee but in a relaxed night setting"]}
            imageSlot={<RiBeerLine size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderRightWidth="1px"
          borderRightColor="white.600"
        >
          <EventDescription
            title="Resume Workshop"
            description={["Regular sessions with advice from engineers and recruiters", "Help attendees polish their resumes"]}
            imageSlot={<CgFileDocument size={iconSize} />}
          />
        </GridItem>
        <GridItem>
          <EventDescription
            title="Hackreation"
            description={["Biannual Event", "Showcase innovative projects"]}
            imageSlot={<PiCodeSimpleBold size={iconSize} />}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
