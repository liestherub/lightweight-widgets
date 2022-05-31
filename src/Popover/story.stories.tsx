import React from "react";
import faker from "faker";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { PopoverPanel } from "./PopoverPanel";
import { Popover, PopoverProps } from ".";

export default {
  component: Popover,
  title: "Widgets/Popover",
} as Meta;

export const Base: Story<PopoverProps> = (args) => {
  return (
    <Popover
      content={
        <PopoverPanel className="w-48 overflow-hidden p-4">
          {faker.address.cityName()}
          {/* eslint-disable */}
          <img
            className="w-full object-cover"
            src={`https://api.ddkjt.com/api/img_1.php?t=${Date.now()}`}
          />
          {/* eslint-enable */}
        </PopoverPanel>
      }
      {...args}
    >
      <Button>Click me!</Button>
    </Popover>
  )
}
