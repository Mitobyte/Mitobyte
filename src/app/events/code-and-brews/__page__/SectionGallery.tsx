import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import NextImage from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";

import candb1 from "@/common/assets/images/events/code-and-brews/candb1.jpeg";
import candb2 from "@/common/assets/images/events/code-and-brews/candb3.jpeg";
import candb3 from "@/common/assets/images/events/code-and-brews/candb5.jpeg";
import candb4 from "@/common/assets/images/events/code-and-brews/candb9.jpeg";
import candb5 from "@/common/assets/images/events/code-and-brews/candb10.jpeg";
import candb6 from "@/common/assets/images/events/code-and-brews/candb13.jpeg";

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
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem>
          <NextImage
            src={candb1}
            alt="Code and Brews"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={candb2}
            alt="Code and Brews"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem>
          <NextImage
            src={candb3}
            alt="Code and Brews"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={candb4}
            alt="Code and Brews"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem>
          <NextImage
            src={candb5}
            alt="Code and Brews"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={candb6}
            alt="Code and Brews"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
