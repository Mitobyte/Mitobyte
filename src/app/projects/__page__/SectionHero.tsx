import { LogoEventbrite } from "@/common/components/Logos/LogoEventbrite";
import { LogoMeetup } from "@/common/components/Logos/LogoMeetup.tsx";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { ROUTES } from "@/config/routes";
import { Link } from "@chakra-ui/next-js";
import { Button, Grid, Heading, Text } from "@chakra-ui/react";

export interface SectionHeroProps extends Omit<WrapperProps, "children"> {}

export const SectionHero = ({
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
}: SectionHeroProps) => {
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
        Community Projects
      </Heading>

      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        Our Community Projects page showcases the innovative work happening
        within the Mitobyte community. Whether it's a personal project, startup
        idea, or open-source contribution, we want to highlight the best ideas.
        To get featured, simply present or demo your project at one of our
        events. This helps us ensure each project reflects our mission of
        fostering creativity and collaboration.
      </Text>
    </Wrapper>
  );
};
