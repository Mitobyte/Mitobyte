import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";

import yash from "@/common/assets/images/team/yash.jpeg";
import clare from "@/common/assets/images/team/clare.jpeg";
import jim from "@/common/assets/images/team/jim.jpeg";
import joseph from "@/common/assets/images/team/joseph.jpeg";

import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

export interface SectionTeamProps extends Omit<WrapperProps, "children"> {}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
}

const TEAM: TeamMember[] = [
  {
    name: "Yash Zode",
    role: "President",
    bio: "Yash leads Mitobyte's events, partnerships, and sponsorships. He's an AI software engineer, a Startup Mentor at gener8tor, and MKE Tech Navigator for MKE Tech Hub Coalition. He's usually the first person to say hi when you walk in.",
    image: yash,
  },
  {
    name: "Clare Fitzgerald",
    role: "Vice President",
    bio: "Clare keeps Mitobyte organized and welcoming: event planning, communications, and our newsletter. She's a controls engineer who bridges software and manufacturing.",
    image: clare,
  },
  {
    name: "Jim Vitrano",
    role: "Treasury & Operations",
    bio: "Jim keeps our books honest and our operations steady. He's an engineer and attorney who has spent his career making complicated things trustworthy.",
    image: jim,
  },
  {
    name: "Joseph Murphy",
    role: "Founder",
    bio: "Joseph is a software engineer with a habit of starting things. He founded Mitobyte in 2019 with one Saturday morning meetup. A hundred-plus events later, he advises the team and dreams up whatever comes next.",
    image: joseph,
  },
];

export const SectionTeam = ({
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
}: SectionTeamProps) => {
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
      <Box maxWidth="4xl" marginX="auto">
        {TEAM.map((member, index) => (
          <Flex
            key={member.name}
            direction={{
              base: "column",
              xl: index % 2 === 1 ? "row-reverse" : "row",
            }}
            alignItems="center"
            gap={{ base: 5, xl: 12 }}
            paddingY={{ base: 10, xl: 12 }}
            borderBottomWidth={index === TEAM.length - 1 ? "0" : "1px"}
            borderColor="syntaxBlack.100"
          >
            <Box
              boxSize={{ base: "144px", md: "176px", xl: "240px" }}
              flexShrink={0}
              borderRadius="full"
              overflow="hidden"
            >
              <NextImage
                src={member.image}
                alt={member.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box flex="1" textAlign={{ base: "center", xl: "left" }}>
              <Heading as="h3" size="2xl">
                {member.name}
              </Heading>
              <Text fontSize="md" fontWeight="bold" color="fg.muted" mt={1}>
                {member.role}
              </Text>
              <Text
                fontSize={{ base: "md", xl: "lg" }}
                mt={3}
                maxWidth={{ base: "560px", xl: "none" }}
                marginX={{ base: "auto", xl: "0" }}
              >
                {member.bio}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Wrapper>
  );
};
