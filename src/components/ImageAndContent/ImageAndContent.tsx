import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import NextImage from "next/image";

export interface ImageAndContentProps {
  imageSrc: string;
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
        <Image as={NextImage} src={imageSrc} alt={imageAlt} borderRadius="full" width={150} />
      </Box>
      <Box flex={2} order={swapOrder ? 1 : 2}>
        <Heading mb="2">{title}</Heading>
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
};
