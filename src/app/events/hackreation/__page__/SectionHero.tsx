import NextLink from "next/link";
import { LogoEventbrite } from "@/common/components/Logos/LogoEventbrite";
import { LogoMeetup } from "@/common/components/Logos/LogoMeetup.tsx";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { ROUTES } from "@/config/routes";
import { Button, Grid, Heading, Text, Link } from "@chakra-ui/react";

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
        Hackreation
      </Heading>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        Are you a hobbyist with a passion for tech? An entrepreneur building
        something new? Or just curious about software development and
        engineering? No matter your background, we’ve got the perfect space for
        you to create, connect, and showcase your skills!
      </Text>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5} fontWeight="bold">
        At our hackathon, you can:
      </Text>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        Work on your own project: Already have something you’re building? Bring
        it, and let’s see what you’ve got! Take on a fun challenge: If you’re
        looking for inspiration, we’ll provide a creative project with
        real-world applications for you to solve. This is your chance to engage
        with like-minded builders, learn from others, and stretch your
        engineering skills. Whether you're building from scratch or leveling up
        an existing idea, this event is for YOU.
      </Text>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5} fontWeight="bold">
        💡 Requirements:
      </Text>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        The project must focus on software. You’ll need to demonstrate
        engineering effort and showcase your solution by the end of the event.
        Come for the challenge, stay for the community. Let’s build something
        awesome together!
      </Text>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        Like all our other events, our Resume Workshop abides by the following
        code of conduct found{" "}
        <Link color="blue.600" asChild>
          <NextLink href={ROUTES.CODE_OF_CONDUCT}>here.</NextLink>
        </Link>
      </Text>
      <Text fontSize="xl" ml={6} maxWidth="700px" mb={5}>
        You can register for our Resume Workshop events by either looking
        through our calendar on Eventbrite or Meetup.
      </Text>
      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}
        maxWidth="400px"
      >
        <Button
          variant="outline"
          verticalAlign="baseline"
          mx={6}
          size="lg"
          asChild
        >
          <a target="_blank" href={ROUTES.EXTERNAL.MEETUP} rel="noreferrer">
            <LogoMeetup />
            Meetup
          </a>
        </Button>
        <Button variant="outline" verticalAlign="baseline" size="lg" asChild>
          <a target="_blank" href={ROUTES.EXTERNAL.EVENTBRITE} rel="noreferrer">
            <LogoEventbrite />
            Eventbrite
          </a>
        </Button>
      </Grid>
    </Wrapper>
  );
};
