import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const box = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderBottomColor: "black",

  borderLeft: "1px solid",
  borderLeftColor: "black",

  borderRadius: 0,
});

export const textareaTheme = defineStyleConfig({
  variants: { box },
});
