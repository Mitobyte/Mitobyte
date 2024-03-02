import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

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

export const SectionIntroWithButtons: FC<SectionIntroWithButtonsProps> = ({
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
}) => {
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
        <Button
          as="a"
          variant="outline"
          leftIcon={buttonOneSlot}
          mr={3}
          href={buttonOneLink}
        >
          {buttonOneText}
        </Button>
        <Button
          as="a"
          variant="outline"
          leftIcon={buttonTwoSlot}
          href={buttonTwoLink}
        >
          {buttonTwoText}
        </Button>
      </Flex>
    </>
  );
};
