import {
  Gallery,
  GalleryImageProps,
  GalleryProps,
} from "@/components/Gallery/Gallery";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { Wrapper, WrapperProps } from "@/components/Wrapper/Wrapper";

const images: GalleryImageProps[] = [
  {
    src: "@/common/assets/images/events/codeAndBrews/IMG_4371.jpeg",
    alt: "Code and Brews image 1",
  },
  {
    src: "@/common/assets/images/events/codeAndBrews/IMG_4372.jpeg",
    alt: "Code and Brews image 2",
  },
  {
    src: "@/common/assets/images/events/codeAndBrews/IMG_4373.jpeg",
    alt: "Code and Brews image 3",
  },
  {
    src: "@/common/assets/images/events/codeAndBrews/IMG_4374.jpeg",
    alt: "Code and Brews image 4",
  },
  {
    src: "@/common/assets/images/events/codeAndBrews/IMG_4375.jpeg",
    alt: "Code and Brews image 5",
  },
  {
    src: "@/common/assets/images/events/codeAndBrews/IMG_4376.jpeg",
    alt: "Code and Brews image 6",
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
