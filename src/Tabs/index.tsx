import classNames from "classnames";

import { BORDER, TEXT } from "../constants";
import { BaseProps } from "../types";

interface Tab {
  id: string;
  label: string;
}

export interface TabsProps extends BaseProps {
  tabs: Tab[]
  tabRender?: (tab: Tab) => JSX.Element;
  value?: string;
  onChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  style,
  className,
  theme = "primary",
  size = "middle",
  tabs,
  tabRender,
  value: activeId,
  onChange: setActiveId,
}) => {
  return (
    <div className={classNames("flex", "gap-4", className)} style={style}>
      {tabs.map(tab =>
        <div key={tab.id}
          className={classNames(
            "cursor-pointer",
            TEXT[size],
            tab.id !== activeId ? [
              "text-gray-500",
            ] : [
              "pb-1",
              "border-b-2",
              BORDER[theme],
              TEXT[theme],
            ]
          )}
          onClick={() => setActiveId?.(tab.id)}
        >
          {tabRender ? tabRender(tab) : tab.label}
        </div>
      )}
    </div>
  )
}