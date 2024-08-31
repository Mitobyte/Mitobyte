import {
  Gallery,
  GalleryImageProps,
  GalleryProps,
} from "@/components/Gallery/Gallery";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

import image1 from "@/common/assets/images/events/code-and-coffee/IMG_3840.jpeg";
import image2 from "@/common/assets/images/events/code-and-coffee/IMG_3842.jpeg";
import image3 from "@/common/assets/images/events/code-and-coffee/IMG_3843.jpeg";
import image4 from "@/common/assets/images/events/code-and-coffee/IMG_3844.jpeg";
import image5 from "@/common/assets/images/events/code-and-coffee/IMG_3845.jpeg";

const images: GalleryImageProps[] = [
  {
    src: image1,
    alt: "Code and Coffee image 1",
  },
  {
    src: image2,
    alt: "Code and Coffee image 2",
  },
  {
    src: image3,
    alt: "Code and Coffee image 3",
  },
  {
    src: image4,
    alt: "Code and Coffee image 4",
  },
  {
    src: image5,
    alt: "Code and Coffee image 5",
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
