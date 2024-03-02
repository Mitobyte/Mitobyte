import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import { placeholderImages } from "./placeholderImages";

export interface GalleryImageProps {
  src: string;
  alt: string;
}

export interface GalleryProps {
  images?: GalleryImageProps[];
}

export const Gallery: FC<GalleryProps> = ({ images = placeholderImages }) => {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {images.map((image, index) => (
          <GridItem key={index}>
            <Image src={image.src} alt={image.alt} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
