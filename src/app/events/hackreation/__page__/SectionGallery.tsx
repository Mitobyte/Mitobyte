import {
  Gallery,
  GalleryImageProps,
  GalleryProps,
} from "@/common/components/Gallery/Gallery";
import { SectionIntro } from "@/common/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";

import image1 from "@/common/assets/images/events/hackathons/IMG_3910.jpeg";
import image2 from "@/common/assets/images/events/hackathons/IMG_3916.jpeg";
import image3 from "@/common/assets/images/events/hackathons/IMG_3919.jpeg";
import image4 from "@/common/assets/images/events/hackathons/IMG_3922.jpeg";
import image5 from "@/common/assets/images/events/hackathons/IMG_3925.jpeg";
import image6 from "@/common/assets/images/events/hackathons/IMG_3930.jpeg";

const images: GalleryImageProps[] = [
  {
    src: image1,
    alt: "Hackreaction photo 1",
  },
  {
    src:image2,
    alt: "Hackreaction photo 2",
  },
  {
    src: image3,
    alt: "Hackreaction photo 3",
  },
  {
    src: image4,
    alt: "Hackreaction photo 4",
  },
  {
    src: image5,
    alt: "Hackreaction photo 5",
  },
  {
    src: image6,
    alt: "Hackreaction photo 6",
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
