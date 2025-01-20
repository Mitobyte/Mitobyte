import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const box = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderBottomColor: "black",

  borderRight: "1px solid",
  borderRightColor: "black",
});

export const textareaTheme = defineStyleConfig({
  variants: { box },
});
