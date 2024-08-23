import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import NextImage from "next/image";

import { placeholderImages } from "./placeholderImages";

export interface GalleryImageProps {
  src: string;
  alt: string;
}

export interface GalleryProps {
  images?: GalleryImageProps[];
}

export const Gallery = ({ images = placeholderImages }: GalleryProps) => {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {images.map((image, index) => (
          <GridItem key={index}>
            <Image as={NextImage} src={image.src} alt={image.alt} width={150} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
