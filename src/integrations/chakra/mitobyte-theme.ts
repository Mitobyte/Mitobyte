import { extendTheme, Textarea } from "@chakra-ui/react";
import { accordionTheme } from "./customizations/accordionTheme";
import { inputTheme } from "./customizations/inputTheme";
import { textareaTheme } from "./customizations/textareaTheme";

export const mitobyteTheme = extendTheme({
  colors: {
    white: {
      50: "#ffffff",
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#e6e6e6",
      500: "#cccccc",
      600: "#bfbfbf",
      700: "#999999",
      800: "#737373",
      900: "#595959",
    },
    syntaxBlack: {
      50: "#eaebec",
      100: "#e0e1e2",
      200: "#bfc2c3",
      300: "#303a3c",
      400: "#2b3436",
      500: "#2b3436",
      600: "#242c2d",
      700: "#1d2324",
      800: "#161a1b",
      900: "#111415",
    },
    codeBlue: {
      50: "#e9f1ff",
      100: "#deeaff",
      200: "#bad5ff",
      300: "#2176ff",
      400: "#1e6ae6",
      500: "#1a5ecc",
      600: "#1959bf",
      700: "#144799",
      800: "#0f3573",
      900: "#0c2959",
    },
    deployOrange: {
      50: "#fff2e7",
      100: "#ffecdb",
      200: "#ffd7b5",
      300: "#ff7f11",
      400: "#e6720f",
      500: "#e6720f",
      600: "#bf5f0d",
      700: "#994c0a",
      800: "#733908",
      900: "#592c06",
    },
    buildGreen: {
      50: "#e6fbf6",
      100: "#daf9f1",
      200: "#b2f2e2",
      300: "#06d6a0",
      400: "#05c190",
      500: "#05ab80",
      600: "#05a178",
      700: "#048060",
      800: "#036048",
      900: "#024b38",
    },
  },
  fonts: {
    body: "'Satoshi', sans-serif",
    heading: "'Satoshi', sans-serif",
    mono: "Satoshi, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  breakpoints: {
    base: "0",
    sm: "258px",
    md: "576px",
    lg: "768px",
    xl: "992px",
    xxl: "1200px",
    xxxl: "1250px",
  },
  components: {
    Accordion: accordionTheme,
    Input: inputTheme,
    Textarea: textareaTheme,
  },
  styles: {
    global: {
      a: {
        textDecoration: "unset",
        _hover: {
          textDecoration: "unset",
        },
      },
    },
  },
});
