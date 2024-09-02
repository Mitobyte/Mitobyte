import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionMissionProps extends Omit<WrapperProps, "children"> {}

export const SectionMission: FC<SectionMissionProps> = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
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
      <Heading textAlign="center" mb={4}>
        We run events for software engineers <br /> by software engineers!
      </Heading>
      {/* <Heading textAlign="center" mb={4}>Let's Build Cool Shit Together</Heading>
      <Text textAlign="center" fontSize="xl">
        We run software engineering events for software engineers by software engineers!
      </Text> */}
      {/* <Heading textAlign="center" mb={4}>Our Mission</Heading>
      <Text textAlign="center">To elevate through innovation and community empowerment. We aim to provide events and connections in our communities that help foster technical innovation and provide broad support to those wanting to get into software development or technology related entrepreneurial endeavors.</Text> */}
    </Wrapper>
  );
};
