import React from "react";
import faker from "faker";
import { Meta, Story } from "@storybook/react";

import { PropertiesTable } from "../PropertiesTable.stories";
import { PROPS } from "../utils.stories";
import { Avatar } from ".";

export default {
  component: Avatar,
  title: "Widgets/Avatar",
} as Meta;

export const Base: Story = (args) =>
  <div className="flex gap-2">
    <Avatar
      url="https://api.ddkjt.com/api/img_1.php"
      {...args}
    />
    <Avatar
      name={faker.name.lastName()}
      {...args}
    />
  </div>

export const Properties: Story = (args) =>
  <PropertiesTable
    render={(name, value) =>
      <div className="flex gap-2">
        <Avatar
          url={`https://api.ddkjt.com/api/img_1.php?t=${name}${value}`}
          {...{ [name]: value }}
          {...args}
        />
        <Avatar
          name={faker.name.findName()}
          {...{ [name]: value }}
          {...args}
        />
      </div>
    }
    props={[
      { name: "size", values: PROPS.size },
      { name: "rounded", values: PROPS.rounded },
      { name: "name", values: Array(5).fill("").map(() => faker.name.lastName() + faker.name.firstName()) },
      { name: "name", values: Array(5).fill("").map(() => faker.name.findName()) },
    ]}
  />

export const Groups: Story = (args) =>
  <>
    <div className="flex -space-x-3">
      {Array(5).fill("").map((_, i) =>
        <Avatar
          key={i}
          className="border-2 border-white"
          name={faker.name.lastName()}
          size="small"
          {...args}
        />
      )}
    </div>
    <div className="flex -space-x-3">
      {Array(5).fill("").map((_, i) =>
        <Avatar
          key={i}
          className="border-2 border-white"
          url={`https://api.ddkjt.com/api/img_1.php?t=${i}`}
          size="small"
          {...args}
        />
      )}
    </div>
  </>