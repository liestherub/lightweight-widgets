import React, { useState } from "react";
import faker from "faker";
import { ArrowRightIcon, CursorClickIcon } from "@heroicons/react/outline";
import * as icons from "@heroicons/react/outline";
import { Meta, Story } from "@storybook/react";

import { PropertiesTable } from "../PropertiesTable.stories";
import { PROPS, random } from "../utils.stories";
import { Button } from ".";

export default {
  component: Button,
  title: "Widgets/Button",
} as Meta;

export const Base: Story = (args) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      onClick={() => setLoading(!loading)}
      loading={loading}
      {...args}
    >
      按钮
    </Button>
  )
}

export const Properties: Story = (args) =>
  <PropertiesTable
    render={(name, value) =>
      <div className="flex gap-2">
        <Button className="gap-1 w-28" {...{ [name]: value }} {...args}>
          <span>按钮</span>
          <CursorClickIcon className="h-4" />
        </Button>
        <Button square {...{ [name]: value }} {...args}>
          <ArrowRightIcon className="h-4" />
        </Button>
      </div>
    }
    props={[
      { name: "disabled", values: [true] },
      { name: "loading", values: [true] },
      { name: "styleType", values: [...PROPS.styleType, "air"] },
      { name: "size", values: PROPS.size },
      { name: "rounded", values: PROPS.rounded },
      { name: "theme", values: PROPS.theme },
    ]}
  />

export const Examples: Story = args => {
  const [array, setArray] = useState(() => Array(30).fill(0));
  const refresh = () => setArray(Array(30).fill(0));
  return (
    <>
      <Button className="mb-2" onClick={refresh}>换一批</Button>
      <div className="grid grid-cols-3 gap-4 w-96 items-center">
        {array.map((_, i) => {
          const square = random([true, false]);
          return (
            <Button
              key={i}
              className="gap-1"
              square={square}
              styleType={random([...PROPS.styleType, "air"])}
              size={random(PROPS.size)}
              rounded={random(PROPS.rounded)}
              theme={random(PROPS.theme)}
              onClick={refresh}
              {...args}
            >
              {React.createElement(random(Object.values(icons)), { className: "w-4" })}
              {square ? "" : faker.hacker.verb()}
            </Button>
          )
        })}
      </div>
    </>
  )
}