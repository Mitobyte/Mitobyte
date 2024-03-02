import { Heading, Text, Box } from "@chakra-ui/react";
import { FC } from "react";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

export interface SectionWhySponsorProps
  extends Omit<WrapperProps, "children"> {}

export const SectionWhySponsor: FC<SectionWhySponsorProps> = ({
  background,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  maxWidth,
}) => {
  return (
    <Wrapper
      background={background}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxWidth={maxWidth}
    >
      <Box mb="5">
        <Heading mb="6" textAlign="center">
          Why Sponsor?
        </Heading>
      </Box>
      <Box mb="5">
        <Heading mb="3">1. Enhanced Visibility in Targeted Communities</Heading>
        <Text>
          Sponsorship offers unparalleled visibility within our vibrant
          community, connecting your brand with a diverse audience of
          professionals. As a sponsor, your company will be prominently featured
          in our event materials, social media campaigns, and on-site signage,
          ensuring your message reaches the heart of the community. This
          heightened exposure is an excellent opportunity to enhance brand
          recognition and demonstrate your commitment to industry growth and
          development.
        </Text>
      </Box>
      <Box mb="5">
        <Heading mb="3">
          2. Access to Passionate Professionals and Emerging Talent
        </Heading>
        <Text>
          Partnering with us opens the door to a pool of passionate engineers,
          including those seeking new opportunities and those ready to embark on
          their careers. Our events are a melting pot of talent, where the drive
          and enthusiasm of participants are matched only by their potential.
          Sponsoring our event means you're not just hiring for skill; you're
          investing in passion. It's an opportunity to meet and recruit
          individuals who are eager to innovate and excel in their next
          professional chapter.
        </Text>
      </Box>
      <Box>
        <Heading mb="3">
          3. Fostering Innovation and Breaking Knowledge Silos
        </Heading>
        <Text>
          Our events are designed to inspire collaboration and knowledge
          exchange beyond the conventional boundaries of team and organization.
          Sponsorship allows your team to engage with new technologies and
          innovative methodologies, encouraging a culture of continuous learning
          and improvement. By participating, your engineers can explore new
          perspectives and ideas, challenging existing knowledge silos within
          your organization. It's an investment in your team's growth and your
          company's future innovation.
        </Text>
      </Box>
    </Wrapper>
  );
};
