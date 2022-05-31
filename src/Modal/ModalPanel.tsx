import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { XIcon } from "@heroicons/react/outline";

import { Button } from "../Button";
import { TEXT } from "../constants";

export interface ModalPanelProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  showCloseButton?: boolean;
  footer?: ReactNode;
  onClose?: () => void;
}

export const ModalPanel: React.FC<ModalPanelProps> = ({
  className,
  children,
  title,
  showCloseButton,
  footer,
  onClose,
  ...props
}) =>
  <div
    className={classNames(
      "relative",
      "flex",
      "flex-col",
      "gap-5",
      "p-5",
      "rounded-lg",
      "shadow-xl",
      "ring-1",
      "ring-opacity-5",
      "ring-black",
      "bg-white",
      "dark:bg-zinc-800",
      TEXT.black,
      className
    )}
    {...props}
  >
    {title && <h3 className="text-base font-medium">{title}</h3>}
    <div className="flex-1">
      {children}
    </div>
    {footer &&
      <div className="flex justify-end gap-2">
        {footer}
      </div>
    }
    {showCloseButton &&
      <div className="absolute top-3 right-3">
        <Button square styleType="air" size="small" theme="zinc" onClick={onClose}>
          <XIcon className="w-6" />
        </Button>
      </div>
    }
  </div>