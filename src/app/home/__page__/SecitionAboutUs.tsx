import {
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NextImage from "next/image";

import hero from "@/common/assets/images/events/hackathons/Hackathon.jpeg";

export const SectionAboutUs = () => {

  return (
    <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
      <GridItem>
        <NextImage
          height={350}
          width={1658}
          src={hero}
          alt="A group of people collaborating at a large table in a modern office space, with laptops and drinks on the table, and a whiteboard in the background."
        />
      </GridItem>
      <GridItem>
        <Heading
          as="h2"
          size={{ sm: "xl", xl: "2xl", xxl: "4xl" }}
          color="syntaxBlack.300"
          fontWeight="700"
          mx={6}
        >
          20+ Events!
        </Heading>
        <Text
          fontSize={{ md: "lg", lg: "xl" }}
          color="syntaxBlack.300"
          fontWeight="500"
          lineHeight="29.26px"
          m={6}
        >
          Every year Mitobyte connects with over 1,000 Milwaukee developers annually through innovative networking events and hackathons. We foster collaboration, creativity, and growth in the local tech community. Join us to shape the future of technology in Milwaukee.
        </Text>
      </GridItem>
    </Grid>
  )
};
