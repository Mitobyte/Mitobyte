import { Box, Grid, GridItem } from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";

export interface GalleryImageProps {
  src: StaticImageData;
  alt: string;
}

export interface GalleryProps {
  images?: GalleryImageProps[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {images?.map((image, index) => (
          <GridItem key={index}>
            <NextImage
              src={image.src}
              alt={image.alt}
              width={750}
              height={750}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
