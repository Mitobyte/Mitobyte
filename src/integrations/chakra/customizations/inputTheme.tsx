import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const box = definePartsStyle({
  field: {
    border: 0,
    borderBottom: "1px solid",
    borderBottomColor: "black",

    borderLeft: "1px solid",
    borderLeftColor: "black",
  },
  addOn: {
    background: "none",
    borderRadius: 0,
  },
});

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    borderRadius: 0,
    padding: "6",
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    box,
  },
});
