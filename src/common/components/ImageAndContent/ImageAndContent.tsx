import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";

export interface ImageAndContentProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  text: string;
  swapOrder?: boolean;
}

export const ImageAndContent = ({
  imageSrc,
  imageAlt,
  title,
  text,
  swapOrder = false,
}: ImageAndContentProps) => {
  return (
    <Flex columnGap={10}>
      <Box flex={1} order={swapOrder ? 2 : 1}>
        <NextImage src={imageSrc} alt={imageAlt} width={150} height={150} />
      </Box>
      <Box flex={2} order={swapOrder ? 1 : 2}>
        <Heading mb="2">{title}</Heading>
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
};
