import { ReactNode } from "react";
import ReactDOM from "react-dom";
import hotToast, { Toast, Toaster, ToastPosition } from "react-hot-toast";
import classNames from "classnames";
import { XIcon } from "@heroicons/react/outline";

import { ANIMATION_IN_TRANSLATE, BG, BORDER, Position, ROUNDED, TEXT } from "../constants";
import { BaseProps } from "../types";

export interface ToastProps extends BaseProps {
  onClose?: () => void;
}

export const ToastContainer: React.FC<ToastProps> = ({
  children,
  className,
  size = "middle",
  rounded = "middle",
  theme = "primary",
  styleType = "solid",
  onClose,
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "inline-flex",
        "gap-2",
        "items-center",
        "justify-center",
        "py-2",
        "px-4",
        TEXT[size],
        ROUNDED[rounded],
        styleType === "plain" && [
          TEXT.black,
        ],
        styleType === "solid" && [
          "shadow-md",
          TEXT.white,
          BG[theme],
        ],
        styleType === "outline" && [
          "shadow-md",
          "border",
          BG.white,
          TEXT[theme],
          BORDER[theme],
        ],
        className
      )}
    >
      {children}
      {onClose &&
        <XIcon
          className={classNames("w-4", "-mr-1", "cursor-pointer", "shrink-0")}
          onClick={onClose}
        />
      }
    </div>
  )
};

let container: HTMLDivElement | null = null;

const positionMap: Record<ToastPosition, Position> = {
  "bottom-center": "bottom",
  "bottom-left": "left",
  "bottom-right": "right",
  "top-center": "top",
  "top-left": "left",
  "top-right": "right",
}

export interface ToastOption extends Partial<Pick<Toast, "id" | "duration" | "position">>, BaseProps {
  delay?: number;
  closeable?: boolean;
}

export const toast = (message: ReactNode | ((toast: Toast, instance: typeof hotToast) => ReactNode), options?: ToastOption) => {
  if (typeof window === "undefined") return;
  if (!container) {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Toaster />, container);
  }
  const { delay = 0, className, duration, id, position = "top-center", closeable, ...props } = options || {};
  setTimeout(() => hotToast.custom((t) => typeof message === "function" ? message(t, hotToast) : (
    <ToastContainer
      className={classNames(
        t.visible ? [
          "animate-in",
          "duration-200",
          ANIMATION_IN_TRANSLATE[positionMap[position]],
        ] : [
          "animate-out",
          "fade-out",
          "duration-150",
          "fill-mode-forwards",
        ],
        className,
      )}
      onClose={closeable ? () => hotToast.dismiss(t.id) : undefined}
      {...props}
    >
      {message}
    </ToastContainer>
  ), { duration, id, position }), delay);
};