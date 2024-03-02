import { Heading, Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

export interface SectionIntroProps {
  title: string;
  text?: string;
  textAlignment?: TextProps["textAlign"];
  addBottomMargin?: boolean;
  showText?: boolean;
}

export const SectionIntro: FC<SectionIntroProps> = ({
  title,
  text,
  textAlignment = "center",
  showText,
  addBottomMargin = true,
}) => {
  return (
    <>
      <Heading textAlign="center" mb={addBottomMargin || showText ? 5 : 0}>
        {title}
      </Heading>
      {showText && (
        <Text
          textAlign={textAlignment}
          maxW="lg"
          mb={addBottomMargin ? 14 : 0}
          mr="auto"
          ml="auto"
        >
          {text}
        </Text>
      )}
    </>
  );
};
