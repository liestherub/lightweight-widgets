import React from "react";
import classNames from "classnames";
import { LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";

import { PropertiesTable } from "../PropertiesTable.stories";
import { PROPS } from "../utils.stories";
import { Tabs } from ".";

export default {
  component: Tabs,
  title: "Widgets/Tabs",
} as Meta;

export type ArrayTypes<T> = T extends Array<infer U> ? U : never;


const TABS = [
  { id: "1", label: "Tab" },
  { id: "2", label: "标签" }
];

const ICON_MAP: Record<keyof ArrayTypes<typeof Tabs>, React.ReactNode> = {
  "1": <LockClosedIcon className="h-6" />,
  "2": <ShieldCheckIcon className="h-6" />
};

export const Base: Story = ({ onChange, ...args }) => <Tabs
  value="1"
  tabs={[{ id: "1", label: "Tab" }, { id: "2", label: "标签" }]}
  {...args}
/>

export const Properties: Story = ({ onChange, ...args }) => // eslint-disable-line
  <PropertiesTable
    render={(name, value) =>
      <Tabs
        value="1"
        tabs={TABS}
        {...{ [name]: value }}
        {...args}
      >
        Checkbox
      </Tabs>
    }
    props={[
      // { name: "disabled", values: [true] },
      // { name: "styleType", values: ["solid", "outline", "plain"] },
      { name: "size", values: PROPS.size },
      // { name: "rounded", values: ["small", "middle", "large", "full"] },
      { name: "theme", values: PROPS.theme },
    ]}
  />

export const WithTabRender: Story = ({ onChange, ...args }) =>
  <Tabs
    value="1"
    tabs={TABS}
    tabRender={(tab) =>
      <div className={classNames(
        "flex",
        "flex-col",
        "items-center",
        "gap-1",
        "w-10"
      )}>
        {ICON_MAP[tab.id]}
        {tab.label}
      </div>
    }
    {...args}
  />