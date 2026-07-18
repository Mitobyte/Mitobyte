import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@chromatic-com/storybook"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;
