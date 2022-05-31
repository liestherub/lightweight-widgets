import classNames from "classnames";

import { Popover, PopoverProps } from "../Popover";

export interface TooltipProps extends Omit<PopoverProps, "content"> {
  content: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, ...props }) => {
  return (
    <Popover
      trigger="hover"
      content={
        <div className={classNames(
          "py-1",
          "px-2",
          "rounded",
          "text-sm",
          "bg-black/90",
          "text-white",
        )}>
          {content}
        </div>
      }
      {...props}
    />
  )
}