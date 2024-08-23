import { FC } from "react";
import {
  Gallery,
  GalleryImageProps,
  GalleryProps,
} from "@/components/Gallery/Gallery";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

const images: GalleryImageProps[] = [
  {
    src: "@/common/assets/images/events/codeAndCoffee/IMG_3840.jpeg",
    alt: "Code and Coffee image 1",
  },
  {
    src: "@/common/assets/images/events/codeAndCoffee/IMG_3842.jpeg",
    alt: "Code and Coffee image 2",
  },
  {
    src: "@/common/assets/images/events/codeAndCoffee/IMG_3843.jpeg",
    alt: "Code and Coffee image 3",
  },
  {
    src: "@/common/assets/images/events/codeAndCoffee/IMG_4344.jpeg",
    alt: "Code and Coffee image 4",
  },
  {
    src: "@/common/assets/images/events/codeAndCoffee/IMG_4345.jpeg",
    alt: "Code and Coffee image 5",
  },
  {
    src: "@/common/assets/images/events/codeAndCoffee/IMG_4376.jpeg",
    alt: "Code and Coffee image 6",
  },
];

export interface SectionGalleryProps
  extends Omit<WrapperProps, "children">,
    GalleryProps {}

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
  ...galleryProps
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
      <SectionIntro
        title="Photos From Past Events"
        text="We love getting together and here's the proof!"
        showText
      />
      <Gallery {...galleryProps} images={images} />
    </Wrapper>
  );
};
