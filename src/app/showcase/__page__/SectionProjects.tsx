import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import {
  Button,
  Grid,
  Heading,
  Text,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import NextImage from "next/image";

import derricksproject from "@/common/assets/images/showcase/ollamaWebview.png";

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
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={6}
        borderColor="syntaxBlack.300"
        borderWidth="1px"
      >
        <GridItem>
          <AspectRatio ratio={16 / 9}>
            <iframe
              style={{ border: 0 }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/W4EBTpEjK-Q?si=7BYGecSDXCt2Mv0z"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </GridItem>
        <GridItem>
          <Heading mt={8} ml={5} size={{ sm: "lg", xl: "xl", xxl: "2xl" }}>
            Nuyulu
          </Heading>
          <Heading mt={2} ml={5} mb={6} size={{ base: "md" }}>
            Creator - Ben Juarez
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
            mb={10}
            ml={6}
            as="a"
            href="https://www.kickstarter.com/projects/ben-juarez/nuyulu-story?ref=discovery&term=nuyulu&total_hits=1&category_id=272"
          >
            Support Ben's Project
          </Button>
        </GridItem>
      </Grid>

      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={6}
        borderColor="syntaxBlack.300"
        borderWidth="1px"
        mt={20}
      >
        <GridItem order={{ base: 1, lg: -1 }}>
          <Heading mt={8} ml={5} size={{ sm: "lg", xl: "xl", xxl: "2xl" }}>
            Ollama Copilot
          </Heading>
          <Heading mt={2} ml={5} mb={6} size={{ base: "md" }}>
            Creator - Derrick Williams
          </Heading>

          <Text fontSize="lg" ml={6} maxWidth="700px" mb={5}>
            This extension integrates AI capabilities into VS Code, providing
            intelligent code suggestions, detecting boilerplate code, and
            offering inline completions. It also includes a Webview interface
            for user interactions with the AI, enhancing coding efficiency and
            productivity.
          </Text>
          <Button
            target="_blank"
            colorScheme="codeBlue"
            ml={6}
            mb={10}
            as="a"
            href="https://github.com/0112Derrick/ollamaCopilot"
          >
            View Derrick's Project
          </Button>
        </GridItem>
        <GridItem order={{ base: -1, lg: 1 }}>
          <AspectRatio ratio={16 / 9}>
            <NextImage
              src={derricksproject}
              height={1406}
              width={1164}
              alt="derrick ollama project"
            />
          </AspectRatio>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
