import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import NextImage from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";

import codeandcoffee1 from "@/common/assets/images/events/code-and-coffee/code_and_coffee1.webp";
import codeandcoffee2 from "@/common/assets/images/events/code-and-coffee/code_and_coffee2.webp";
import codeandcoffee3 from "@/common/assets/images/events/code-and-coffee/code_and_coffee3.webp";
import codeandcoffee4 from "@/common/assets/images/events/code-and-coffee/code_and_coffee4.webp";
import codeandcoffee5 from "@/common/assets/images/events/code-and-coffee/code_and_coffee5.webp";
import codeandcoffee6 from "@/common/assets/images/events/code-and-coffee/code_and_coffee6.webp";

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
            src={codeandcoffee1}
            alt="Code and Coffee"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={codeandcoffee2}
            alt="Code and Coffee"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem>
          <NextImage
            src={codeandcoffee3}
            alt="Code and Coffee"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={codeandcoffee4}
            alt="Code and Coffee"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem>
          <NextImage
            src={codeandcoffee5}
            alt="Code and Coffee"
            height={800}
            width={800}
          />
        </GridItem>
        <GridItem>
          <NextImage
            src={codeandcoffee6}
            alt="Code and Coffee"
            height={800}
            width={800}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
