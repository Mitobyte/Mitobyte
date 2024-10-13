import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../../../../bootstrap/providers";
import { MailingListSignup } from "./MailingListSignup";

const meta = {
  title: "Mitobyte/Forms/MailingListSignup",
  component: MailingListSignup,
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
} satisfies Meta<typeof MailingListSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
