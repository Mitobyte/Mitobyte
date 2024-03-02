import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Gallery, GalleryProps } from "~/components/Gallery/Gallery";
import { SectionIntro } from "~/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

export interface SectionGalleryProps
  extends Omit<WrapperProps, "children">,
    GalleryProps {}

export const SectionGallery: FC<SectionGalleryProps> = ({
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
  ...galleryProps
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
      <SectionIntro
        title="Photos From Past Events"
        text="We love getting together and here's the proof!"
        showText
      />
      <Gallery {...galleryProps} />
    </Wrapper>
  );
};
