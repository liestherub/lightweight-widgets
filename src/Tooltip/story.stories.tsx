import React from "react";
import faker from "faker";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { Tooltip, TooltipProps } from ".";

export default {
  component: Tooltip,
  title: "Widgets/Tooltip",
} as Meta;

export const Base: Story<TooltipProps> = (args) => {
  return (
    <Tooltip
      {...args}
      content={faker.git.commitMessage()}
    >
      <Button>Hover me!</Button>
    </Tooltip>
  )
}
