import React from "react";
import { Meta,Story } from "@storybook/react";

import { Loading } from ".";

export default {
  component: Loading,
  title: "Widgets/Loading",
} as Meta;

const Template: Story = (args) => <Loading {...args} />

export const Loading_ = Template.bind({});