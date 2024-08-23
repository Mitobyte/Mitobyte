import type { Meta, StoryObj } from "@storybook/react";

import { CardSimpleWide } from "./CardSimpleWide";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecules/CardSimpleWide",
  component: CardSimpleWide,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageUrl: { control: "text" },
    imageAlt: { control: "text" },
    linkUrl: { control: "text" },
    linkText: { control: "text" },
    badge: { control: "text" },
    showLink: { control: "boolean" },
    showBadge: { control: "boolean" },
    showDescription: { control: "boolean" },
  },
} satisfies Meta<typeof CardSimpleWide>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Title",
    description: "I am a description",
    imageUrl: "https://via.placeholder.com/150",
    imageAlt: "image alt",
    linkUrl: "www.google.com",
    linkText: "Click Me",
    badge: "Nice!",
    showBadge: true,
    showLink: true,
    showDescription: true,
  },
};
