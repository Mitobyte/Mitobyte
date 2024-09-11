import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { EventDescription } from "@/common/components/EventDescription/EventDescription";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

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
      <Heading mb={12} size={{ sm: "2xl", xl: "3xl", xxl: "4xl" }}>Who we are</Heading>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 6, lg: 0 }}>
        <GridItem
          borderRightWidth={{ base: 0, lg: "1px"}}
          borderRightColor="white.600"
          borderBottomWidth="1px"
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Empowering Engineers"
            description={["Providing learning opportunities and fostering the growth of software engineers through hands-on experiences and collaborative events.", "Fostering the growth of engineers with practical skills, networking, and job opportunities."]}
            imageSlot={<RiLightbulbFlashFill size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderBottomWidth="1px"
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Building Community"
            description={["Creating a tight-knit, supportive community where developers of all levels can connect, share ideas, and grow together.", "Connecting passionate engineers through inclusive and collaborative events."]}
            imageSlot={<BsPeopleFill size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderRightWidth={{ base: 0, lg: "1px"}}
          borderRightColor="white.600"
          borderBottomWidth={{ base: "1px", lg: 0 }}
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Fostering Innovation"
            description={["Encouraging creativity and the development of real-world solutions through hackathons and collaborative projects.", "Inspiring innovative thinking and problem-solving through competitive hackathons."]}
            imageSlot={<FaChartBar size={iconSize} />}
          />
        </GridItem>
        <GridItem
          borderBottomWidth={{ base: "1px", lg: 0 }}
          borderBottomColor="white.600"
        >
          <EventDescription
            title="Supporting Entrepreneurship"
            description={["Helping aspiring entrepreneurs turn their ideas into reality by providing the right environment and mentorship.", "Supporting tech entrepreneurs with resources, events, and mentorship to bring ideas to life."]}
            imageSlot={<FaHandHoldingHeart size={iconSize} />}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
