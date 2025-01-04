import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../../../../bootstrap/providers";
import { ContactUs } from "./ContactUs";

const meta = {
  title: "Mitobyte/Forms/ContactUs",
  component: ContactUs,
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ContactUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
