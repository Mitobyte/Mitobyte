import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleContainer: SystemStyleObject = {
  border: 0,
  // this was a dumb way to do this but ill try and refactor later
  ".chakra-accordion__button": {
    pt: 8,
    borderColor: "syntaxBlack.500",
    borderTopWidth: 0,
    borderBottomWidth: "1px",
  },
};

const baseStyleButton: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "xl",
  fontWeight: "bold",
  _focus: {
    boxShadow: "none",
  },
  _hover: {
    bg: "blackAlpha.50",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  px: 4,
  py: 4,
};

const baseStylePanel: SystemStyleObject = {
  pt: 4,
  px: 4,
  pb: 5,
  fontSize: "xl",
};

const baseStyleIcon: SystemStyleObject = {
  fontSize: "1.25em",
};

const baseStyle: PartsStyleObject<typeof parts> = {
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon,
};

export const accordionTheme = {
  parts: parts.keys,
  baseStyle,
};
