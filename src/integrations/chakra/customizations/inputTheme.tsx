import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  SystemStyleObject,
  PartsStyleObject,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const pill = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "gray.50",
    borderRadius: "full",

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: "gray.600",
      background: "gray.800",
    },
  },
  addon: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "gray.200",
    borderRadius: "full",
    color: "gray.500",

    _dark: {
      borderColor: "gray.600",
      background: "gray.600",
      color: "gray.400",
    },
  },
});

const baseStyleField: SystemStyleObject = {
  border: "1px solid",
  borderColor: "gray.800",
  borderRadius: 0,
};

const baseStyle: PartsStyleObject<typeof inputAnatomy> = {
  field: baseStyleField,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  // variants: {
  //   pill,
  // },
});
