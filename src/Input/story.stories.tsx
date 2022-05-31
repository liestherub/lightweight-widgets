import React, { useCallback, useState } from "react";
import { Meta, Story } from "@storybook/react";

import { PropertiesTable } from "../PropertiesTable.stories";
import { PROPS } from "../utils.stories";
import { Input } from ".";

export default {
  component: Input,
  title: "Widgets/Input",
} as Meta;

export const Base: Story = ({ onChange, ...args }) => {
  const [value, setValue] = useState<string>();
  const handle = useCallback((value: string) => {
    setValue(value);
    onChange?.(value);
  }, [onChange]);
  return (
    <Input
      className="w-72"
      value={value}
      onChange={handle}
      {...args}
    />
  );
}

export const Properties: Story = (args) =>
  <PropertiesTable
    render={(name, value) =>
      <Input className="w-72" {...{ [name]: value }} {...args} />
    }
    props={[
      { name: "disabled", values: [true] },
      { name: "loading", values: [true] },
      { name: "cleanable", values: [true] },
      { name: "styleType", values: PROPS.styleType },
      { name: "size", values: PROPS.size },
      { name: "rounded", values: PROPS.rounded },
      { name: "profix", values: ["https://"] },
      { name: "suffix", values: [".com"] },
      { name: "placeholder", values: ["请输入"] },
      { name: "theme", values: PROPS.theme },
    ]}
  />