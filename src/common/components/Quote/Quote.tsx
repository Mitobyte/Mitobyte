import { Heading, Text } from "@chakra-ui/react";

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
