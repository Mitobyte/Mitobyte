import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import NextImage from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";

import resumeworkshop1 from "@/common/assets/images/events/resume-workshop/resume_workshop1.jpeg";
import resumeworkshop2 from "@/common/assets/images/events/resume-workshop/resume_workshop2.jpeg";
import resumeworkshop3 from "@/common/assets/images/events/resume-workshop/resume_workshop3.jpeg";

export interface SectionGalleryProps extends Omit<WrapperProps, "children"> {}

export const SectionGallery = ({
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
}: SectionGalleryProps) => {
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
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
        <GridItem>
          <NextImage
            src={resumeworkshop1}
            alt="Resume Workshop"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={resumeworkshop2}
            alt="Resume Workshop"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={resumeworkshop3}
            alt="Resume Workshop"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
