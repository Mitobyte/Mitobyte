import { Text, Box, Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { ListPoint } from "@/common/components/ListPoint/ListPoint";
import { SectionIntro } from "@/common/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import { ROUTES } from "@/config/routes";

export interface SectionHowItWorks extends Omit<WrapperProps, "children"> {}

export const SectionHowItWorks = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}: SectionHowItWorks) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxWidth={maxWidth}
    >
      <SectionIntro
        title="How It Works"
        showText
        textAlignment="left"
        text="Bring your laptop, or headphones if you're just looking for a place to work.
              You can use our event for hacking away at a personal project, or to network
              and collaborate with others in the community. Every event is kicked off
              about 30 minutes in with a standup with the whole meetup that goes like this:"
      />
      <Box>
        <Flex mb="5" position="relative" alignItems="center">
          <ListPoint text="1" />
          <Text flex="1" mb="3" fontSize="2xl">
            Say your name
          </Text>
        </Flex>
        <Flex position="relative" mb="5" alignItems="center">
          <ListPoint text="2" />
          <Text mb="3" flex="1" fontSize="2xl">
            What are you working on?
          </Text>
        </Flex>
        <Flex position="relative" mb="5" alignItems="center">
          <ListPoint text="3" />
          <Text mb="3" flex="1" fontSize="2xl">
            What technologies can you help with?
          </Text>
        </Flex>
        <Flex position="relative" alignItems="center">
          <ListPoint text="4" />
          <Text flex="1" fontSize="2xl">
            What technologies do you need help with?
          </Text>
        </Flex>
      </Box>
      <Flex alignItems="center">
        <Button
          as={NextLink}
          mt="12"
          href={ROUTES.SPONSORS ?? '/'}
          size="lg"
          variant="solid"
          colorScheme="blue"
          flex="1"
        >
          Learn More
        </Button>
      </Flex>
    </Wrapper>
  );
};
