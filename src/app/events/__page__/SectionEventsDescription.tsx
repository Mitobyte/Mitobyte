import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import { MdOutlineCoffee } from "react-icons/md";
import { RiBeerLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { PiCodeSimpleBold } from "react-icons/pi";
import { EventDescription } from "@/common/components/EventDescription/EventDescription";
import { LogoMeetup } from "@/common/components/Logos/LogoMeetup.tsx";
import { LogoEventbrite } from "@/common/components/Logos/LogoEventbrite";

const iconSize = "125px";

export interface SectionDescriptionProps
  extends Omit<WrapperProps, "children"> {}

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
      <Heading
        mb={4}
        ml={5}
        display="inline-block"
        size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}
      >
        Core Events
      </Heading>
      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}
        mb={12}
        maxWidth="400px"
      >
        <Button
          as="a"
          target="_blank"
          href="https://www.meetup.com/milwaukee-code-and-coffee/?eventOrigin=event_home_page"
          variant="outline"
          verticalAlign="baseline"
          mx={6}
          size="lg"
          leftIcon={<LogoMeetup />}
        >
          Meetup
        </Button>
        <Button
          as="a"
          target="_blank"
          href="https://www.eventbrite.com/o/code-brews-collective-49824193943"
          variant="outline"
          verticalAlign="baseline"
          size="lg"
          leftIcon={<LogoEventbrite />}
        >
          Eventbrite
        </Button>
      </Grid>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 6, lg: 0 }}
      >
        <GridItem
          borderRightWidth={{ base: 0, lg: "1px" }}
          borderRightColor="white.600"
          borderBottomWidth="1px"
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Code & Coffee"
            description={[
              "Monthly morning event",
              "Informal coding and networking",
            ]}
            imageSlot={<MdOutlineCoffee size={iconSize} />}
          />
        </GridItem>
        <GridItem borderBottomWidth="1px" borderBottomColor="white.600">
          <EventDescription
            title="Code + Brews"
            description={[
              "Monthly evening event",
              "Similar to Code & Coffee but in a relaxed night setting",
            ]}
            imageSlot={<RiBeerLine size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderRightWidth={{ base: 0, lg: "1px" }}
          borderRightColor="white.600"
          borderBottomWidth={{ base: "1px", lg: 0 }}
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Resume Workshop"
            description={[
              "Regular sessions with advice from engineers and recruiters",
              "Help attendees polish their resumes",
            ]}
            imageSlot={<CgFileDocument size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderBottomWidth={{ base: "1px", lg: 0 }}
          borderBottomColor="white.600"
        >
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
