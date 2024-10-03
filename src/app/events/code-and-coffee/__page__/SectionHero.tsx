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
        Code & Coffee
      </Heading>

      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        <Link
          color="blue.600"
          href="https://codeandcoffee.org/"
          rel="noreferrer"
        >
          Code & Coffee
        </Link>{" "}
        is part of a national network of software engineering and community lead
        events. It is a meetup for developers to make friends and grow. All of
        our events abide by the following code of conduct found{" "}
        <Link color="blue.600" href={ROUTES.CODE_OF_CONDUCT}>
          here.
        </Link>
      </Text>

      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        You can register for our Code & Coffee events by either looking through
        our calendar on Eventbrite or Meetup.
      </Text>

      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}
        maxWidth="400px"
      >
        <Button
          as="a"
          target="_blank"
          href={ROUTES.EXTERNAL.MEETUP}
          rel="noreferrer"
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
          href={ROUTES.EXTERNAL.EVENTBRITE}
          rel="noreferrer"
          variant="outline"
          verticalAlign="baseline"
          size="lg"
          leftIcon={<LogoEventbrite />}
        >
          Eventbrite
        </Button>
      </Grid>
    </Wrapper>
  );
};
