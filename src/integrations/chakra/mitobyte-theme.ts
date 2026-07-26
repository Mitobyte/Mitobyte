import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Brand palettes use 300 as the "main" shade (v2 legacy), so the semantic
// tokens below point solid/focusRing at 300 rather than the v3-conventional 500.
const brandSemanticTokens = (palette: string) => ({
  solid: { value: `{colors.${palette}.300}` },
  contrast: { value: "white" },
  fg: { value: `{colors.${palette}.700}` },
  muted: { value: `{colors.${palette}.100}` },
  subtle: { value: `{colors.${palette}.50}` },
  emphasized: { value: `{colors.${palette}.400}` },
  focusRing: { value: `{colors.${palette}.300}` },
});

const config = defineConfig({
  globalCss: {
    a: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
  },
  theme: {
    keyframes: {
      slideInFromLeft: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      logoloop: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    breakpoints: {
      sm: "258px",
      md: "576px",
      lg: "768px",
      xl: "992px",
      xxl: "1200px",
      xxxl: "1250px",
    },
    tokens: {
      colors: {
        white: {
          50: { value: "#ffffff" },
          100: { value: "#ffffff" },
          200: { value: "#ffffff" },
          300: { value: "#ffffff" },
          400: { value: "#e6e6e6" },
          500: { value: "#cccccc" },
          600: { value: "#bfbfbf" },
          700: { value: "#999999" },
          800: { value: "#737373" },
          900: { value: "#595959" },
        },
        syntaxBlack: {
          50: { value: "#eaebec" },
          100: { value: "#e0e1e2" },
          200: { value: "#bfc2c3" },
          300: { value: "#303a3c" },
          400: { value: "#2b3436" },
          500: { value: "#2b3436" },
          600: { value: "#242c2d" },
          700: { value: "#1d2324" },
          800: { value: "#161a1b" },
          900: { value: "#111415" },
        },
        codeBlue: {
          50: { value: "#e9f1ff" },
          100: { value: "#deeaff" },
          200: { value: "#bad5ff" },
          300: { value: "#2176ff" },
          400: { value: "#1e6ae6" },
          500: { value: "#1a5ecc" },
          600: { value: "#1959bf" },
          700: { value: "#144799" },
          800: { value: "#0f3573" },
          900: { value: "#0c2959" },
        },
        deployOrange: {
          50: { value: "#fff2e7" },
          100: { value: "#ffecdb" },
          200: { value: "#ffd7b5" },
          300: { value: "#ff7f11" },
          400: { value: "#e6720f" },
          500: { value: "#e6720f" },
          600: { value: "#bf5f0d" },
          700: { value: "#994c0a" },
          800: { value: "#733908" },
          900: { value: "#592c06" },
        },
        buildGreen: {
          50: { value: "#e6fbf6" },
          100: { value: "#daf9f1" },
          200: { value: "#b2f2e2" },
          300: { value: "#06d6a0" },
          400: { value: "#05c190" },
          500: { value: "#05ab80" },
          600: { value: "#05a178" },
          700: { value: "#048060" },
          800: { value: "#036048" },
          900: { value: "#024b38" },
        },
      },
      fonts: {
        body: { value: "'Satoshi', sans-serif" },
        heading: { value: "'Satoshi', sans-serif" },
        mono: { value: "Satoshi, monospace" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.375rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "4rem" },
      },
    },
    semanticTokens: {
      colors: {
        codeBlue: brandSemanticTokens("codeBlue"),
        deployOrange: brandSemanticTokens("deployOrange"),
        buildGreen: brandSemanticTokens("buildGreen"),
        syntaxBlack: brandSemanticTokens("syntaxBlack"),
      },
    },
    recipes: {
      input: {
        base: {
          borderRadius: 0,
          padding: "6",
        },
        variants: {
          variant: {
            box: {
              border: 0,
              borderBottom: "1px solid",
              borderBottomColor: "black",
              borderLeft: "1px solid",
              borderLeftColor: "black",
            },
          },
        },
      },
      inputAddon: {
        variants: {
          variant: {
            box: {
              background: "none",
              borderRadius: 0,
            },
          },
        },
      },
      textarea: {
        variants: {
          variant: {
            box: {
              border: 0,
              borderBottom: "1px solid",
              borderBottomColor: "black",
              borderLeft: "1px solid",
              borderLeftColor: "black",
              borderRadius: 0,
            },
          },
        },
      },
    },
    slotRecipes: {
      accordion: {
        slots: [
          "root",
          "item",
          "itemTrigger",
          "itemContent",
          "itemBody",
          "itemIndicator",
        ],
        base: {
          item: {
            border: 0,
          },
          itemTrigger: {
            pt: 8,
            pb: 4,
            px: 4,
            borderColor: "syntaxBlack.500",
            borderTopWidth: 0,
            borderBottomWidth: "1px",
            fontSize: "xl",
            fontWeight: "bold",
            _focus: {
              boxShadow: "none",
            },
            _hover: {
              bg: "blackAlpha.50",
            },
          },
          itemBody: {
            pt: 4,
            px: 4,
            pb: 5,
            fontSize: "xl",
          },
          itemIndicator: {
            fontSize: "1.25em",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
