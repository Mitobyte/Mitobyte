import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export interface SectionIntroWithButtonsProps {
  title: string;
  text?: string;
  addBottomMargin?: boolean;
  showText?: boolean;
  buttonOneText: string;
  buttonOneLink: string;
  buttonOneSlot?: JSX.Element;
  buttonTwoText: string;
  buttonTwoLink: string;
  buttonTwoSlot?: JSX.Element;
}

export const SectionIntroWithButtons = ({
  title,
  text,
  showText,
  addBottomMargin = true,
  buttonOneText,
  buttonOneLink,
  buttonOneSlot,
  buttonTwoText,
  buttonTwoLink,
  buttonTwoSlot,
}: SectionIntroWithButtonsProps) => {
  return (
    <>
      <Heading textAlign="center" mb={5}>
        {title}
      </Heading>
      {showText && (
        <Text
          textAlign="center"
          maxW="lg"
          mb={addBottomMargin ? 8 : 0}
          mr="auto"
          ml="auto"
        >
          {text}
        </Text>
      )}
      <Flex margin="0 auto" mb={14} textAlign="center" justifyContent="center">
        <Button variant="outline" mr={3} asChild>
          <a href={buttonOneLink ?? ""}>
            {buttonOneSlot}
            {buttonOneText}
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={buttonTwoLink ?? ""}>
            {buttonTwoSlot}
            {buttonTwoText}
          </a>
        </Button>
      </Flex>
    </>
  );
};
