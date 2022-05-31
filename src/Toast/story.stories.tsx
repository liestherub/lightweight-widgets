import React from "react";
import faker from "faker";
import * as icons from "@heroicons/react/outline";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { PropertiesTable } from "../PropertiesTable.stories";
import { PROPS, random } from "../utils.stories";
import { toast, ToastContainer, ToastOption } from ".";

export default {
  title: "Widgets/Toast",
  argTypes: {
    position: {
      options: ["bottom-center", "bottom-left", "bottom-right", "top-center", "top-left", "top-right"],
      control: { type: "select" },
    },
    content: {
      type: "string",
    }
  },
} as Meta;

export const Base: Story<ToastOption & { content: string }> = args => {
  return (
    <Button onClick={() => {
      toast(
        <div className="flex gap-2">
          {React.createElement(random(Object.values(icons)), { className: "w-4 shrink-0" })}
          <pre className="break-words whitespace-normal max-w-xs">
            {args.content || faker.random.words()}
          </pre>
        </div>,
        {
          closeable: true,
          // duration: Infinity,
          styleType: random(PROPS.styleType),
          size: random(PROPS.size),
          rounded: random(PROPS.rounded),
          theme: random(PROPS.theme),
          ...args
        }
      )
    }}>显示Toast</Button>
  )
}

export const Properties: Story = ({ onChange, ...args }) => // eslint-disable-line
  <PropertiesTable
    render={(name, value) =>
      <ToastContainer
        onClose={() => {/*  */ }}
        {...{ [name]: value }}
        {...args}
      >
        Message 一条消息
      </ToastContainer>
    }
    props={[
      { name: "styleType", values: PROPS.styleType },
      { name: "size", values: PROPS.size },
      { name: "rounded", values: PROPS.rounded },
      { name: "theme", values: PROPS.theme },
    ]}
  />