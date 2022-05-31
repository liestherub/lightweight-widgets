import React from "react";
import { Meta, Story } from "@storybook/react";

import { Tree, TreeProps } from ".";

export default {
  component: Tree,
  title: "Widgets/Tree",
} as Meta;

export const Tree_: Story<TreeProps> = (args) =>
  <div className="w-60 p-4 rounded bg-gray-100">
    <Tree {...args} />
  </div>

Tree_.args = {
  value: [
    {
      id: "Home",
      children: [],
    },
    {
      id: "Collections",
      children: [
        { id: "Spring", children: [] },
        { id: "Summer", children: [] },
        { id: "Fall", children: [] },
        { id: "Winter", children: [] },
      ],
    },
    {
      id: "About Us",
      children: [],
    },
    {
      id: "My Account",
      children: [
        { id: "Addresses", children: [] },
        { id: "Order History", children: [] },
      ],
    },
  ]
}