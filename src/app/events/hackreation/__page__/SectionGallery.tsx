import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import NextImage from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";

import hackreationOct24One from "@/common/assets/images/events/hackreation/hackreation_10_24_1.webp";
import hackreationOct24Two from "@/common/assets/images/events/hackreation/hackreation_10_24_2.webp";
import hackreationOct24Three from "@/common/assets/images/events/hackreation/hackreation_10_24_3.webp";
import hackreationOct24Four from "@/common/assets/images/events/hackreation/hackreation_10_24_4.webp";
import hackreationOct24Five from "@/common/assets/images/events/hackreation/hackreation_10_24_5.webp";
import hackreationOct24Six from "@/common/assets/images/events/hackreation/hackreation_10_24_6.webp";
import hackreationOct24Seven from "@/common/assets/images/events/hackreation/hackreation_10_24_7.webp";
import hackreationOct24Eight from "@/common/assets/images/events/hackreation/hackreation_10_24_8.webp";
import hackreationOct24Nine from "@/common/assets/images/events/hackreation/hackreation_10_24_9.webp";
import hackreationOct24Ten from "@/common/assets/images/events/hackreation/hackreation_10_24_10.webp";
import hackreationOct24Eleven from "@/common/assets/images/events/hackreation/hackreation_10_24_11.webp";
import hackreationOct24Twelve from "@/common/assets/images/events/hackreation/hackreation_10_24_12.webp";

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
            src={hackreationOct24One}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Two}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Three}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Four}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Five}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Six}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Seven}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Eight}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Nine}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Ten}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Eleven}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={hackreationOct24Twelve}
            alt="October 2024 Hackreation"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
