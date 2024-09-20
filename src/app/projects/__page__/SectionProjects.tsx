import { LogoEventbrite } from "@/common/components/Logos/LogoEventbrite";
import { LogoMeetup } from "@/common/components/Logos/LogoMeetup.tsx";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { ROUTES } from "@/config/routes";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Grid,
  Heading,
  Text,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";

export interface SectionProjectsProps extends Omit<WrapperProps, "children"> {}

export const SectionProjects = ({
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
}: SectionProjectsProps) => {
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
      <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.kickstarter.com/d21c4e2c-c3f0-48ad-8cb9-634963a687ef"
              allowFullScreen
              title="Nuyulu"
            />
          </AspectRatio>
        </GridItem>
        <GridItem>
          <Heading
            mb={4}
            ml={5}
            display="inline-block"
            size={{ sm: "lg", xl: "xl", xxl: "2xl" }}
          >
            Nuyulu
          </Heading>

          <Text fontSize="lg" ml={6} maxWidth="700px" mb={5}>
            In this interactive story, you follow Nuyulu Tatukani, a powerful
            yet kind dark priestess, as she discovers a mysterious man washed
            ashore in the ancient land of Anáhuac. Tap through the dialogue to
            uncover their journey, encountering spirits, Mayan royals, and a
            looming military threat. Together, they must navigate these
            challenges to return the man home and prevent the kingdoms of
            Anáhuac from falling into chaos.
          </Text>
          <Button
            target="_blank"
            colorScheme="codeBlue"
            ml={6}
            as="a"
            href="https://www.kickstarter.com/projects/ben-juarez/nuyulu-story?ref=discovery&term=nuyulu&total_hits=1&category_id=272"
          >
            Support Ben's Project
          </Button>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
