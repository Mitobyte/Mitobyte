import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import storybook from "eslint-plugin-storybook";

export default [
  {
    ignores: [
      ".next/**",
      ".open-next/**",
      "node_modules/**",
      "storybook-static/**",
    ],
  },
  ...nextCoreWebVitals,
  ...storybook.configs["flat/recommended"],
  prettierRecommended,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
