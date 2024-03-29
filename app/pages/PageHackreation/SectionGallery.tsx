import { FC } from "react";
import {
  Gallery,
  GalleryImageProps,
  GalleryProps,
} from "~/components/Gallery/Gallery";
import { SectionIntro } from "~/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

const images: GalleryImageProps[] = [
  {
    src: "/assets/images/events/hackathons/IMG_3910.jpeg",
    alt: "Hackreaction photo 1",
  },
  {
    src: "/assets/images/events/hackathons/IMG_3916.jpeg",
    alt: "Hackreaction photo 2",
  },
  {
    src: "/assets/images/events/hackathons/IMG_3919.jpeg",
    alt: "Hackreaction photo 3",
  },
  {
    src: "/assets/images/events/hackathons/IMG_3922.jpeg",
    alt: "Hackreaction photo 4",
  },
  {
    src: "/assets/images/events/hackathons/IMG_3925.jpeg",
    alt: "Hackreaction photo 5",
  },
  {
    src: "/assets/images/events/hackathons/IMG_3930.jpeg",
    alt: "Hackreaction photo 6",
  },
];

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
      <Gallery {...galleryProps} images={images} />
    </Wrapper>
  );
};
