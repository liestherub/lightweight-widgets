import React, { useCallback, useState } from "react";
import { Meta, Story } from "@storybook/react";

import { PropertiesTable } from "../PropertiesTable.stories";
import { PROPS } from "../utils.stories";
import { Checkbox } from ".";

export default {
  component: Checkbox,
  title: "Widgets/Checkbox",
} as Meta;

export const Base: Story = ({ onChange, ...args }) => {
  const [checked, setChecked] = useState(true);
  const handle = useCallback(() => {
    setChecked(!checked);
    onChange?.(!checked);
  }, [checked, onChange]);
  return (
    <Checkbox
      value={checked}
      onChange={handle}
      {...args}
    >
      Checkbox
    </Checkbox>
  );
}

export const Properties: Story = ({ onChange, ...args }) => // eslint-disable-line
  <PropertiesTable
    render={(name, value) =>
      <Checkbox
        value
        {...{ [name]: value }}
        {...args}
      >
        Checkbox
      </Checkbox>
    }
    props={[
      { name: "disabled", values: [true] },
      { name: "styleType", values: PROPS.styleType },
      { name: "size", values: PROPS.size },
      { name: "rounded", values: PROPS.rounded },
      { name: "theme", values: PROPS.theme },
    ]}
  />