import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export interface QuoteProps {
  quote: string;
  author: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
  return (
    <>
      <Heading>"{quote}"</Heading>
      <Text>~ {author}</Text>
    </>
  );
};
