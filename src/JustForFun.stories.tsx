import React, { useState } from "react";
import faker from "faker";
import { PlayIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Just for fun",
} as Meta;

export const Random: Story = () => {
  const [, setKey] = useState(0);
  return (
    <div className="space-y-4">
      <Button className="gap-1" onClick={() => setKey(Date.now())}>
        <PlayIcon width={20} />
        <span>生成</span>
      </Button>
      {Array(100).fill(0).map((_, i) =>
        <div key={i} className="overflow-hidden relative max-w-sm bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
          <img className="absolute -left-6 w-24 h-24 rounded-full shadow-lg" src={faker.image.image()} />
          <div className="flex flex-col py-5 pl-24">
            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">{faker.name.firstName()}</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">{faker.name.title()}</span>
          </div>
        </div>
      )}
    </div>
  )
}