import { Container, Heading, Text } from "@chakra-ui/react";
import { ImageAndContent } from "@/common/components/ImageAndContent/ImageAndContent";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import person1 from '@/common/assets/images/people/person1.webp'
import person2 from '@/common/assets/images/people/person1.webp'

export interface SectionPeopleProps extends Omit<WrapperProps, "children"> {}

export const SectionPeople = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}: SectionPeopleProps) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxWidth={maxWidth}
    >
      <Container maxW="md" mb={12}>
        <Heading textAlign="center" mb="3">
          About Us
        </Heading>
        <Text textAlign="center">
          We are software engineers in the Milwaukee community, looking to
          connect with you!
        </Text>
      </Container>
      <Container
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      >
        <ImageAndContent
          imageSrc={person1}
          imageAlt="A person"
          title="Person Personhood"
          text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
          swapOrder={false}
        />
      </Container>
      <Container
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        maxWidth="2xl"
      >
        <ImageAndContent
          imageSrc={person2}
          imageAlt="A person"
          title="Person Personhood"
          text="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
          swapOrder={true}
        />
      </Container>
    </Wrapper>
  );
};
