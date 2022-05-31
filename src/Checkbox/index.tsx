import { useState } from "react";
import classNames from "classnames"
import { CheckIcon } from "@heroicons/react/solid";

import { BG, BORDER, ROUNDED, Size, STROKE, TEXT } from "../constants";
import { BaseProps } from "../types"

const SIZE: Record<Size, string> = {
  mini: "h-3 w-3",
  small: "h-4 w-4",
  middle: "h-5 w-5",
  large: "h-6 w-6",
}

const ICON_SIZE: Record<Size, string> = {
  mini: "h-2 w-2",
  small: "h-3 w-3",
  middle: "h-3 w-3",
  large: "h-4 w-4",
}

export interface CheckboxProps extends BaseProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  className,
  style,
  disabled,
  theme = "primary",
  size = "middle",
  rounded = "middle",
  styleType = "outline",
  value,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <label
      style={style}
      className={classNames(
        "flex",
        "items-center",
        "cursor-pointer",
        "flex",
        "space-x-1",
        "select-none",
        disabled && ["opacity-70", "pointer-events-none"],
        TEXT.black,
        TEXT[size],
        className,
      )}>
      <div className={classNames(
        "flex",
        "items-center",
        "justify-center",
        "transition-colors",
        styleType === "solid" && [
          value ? BG[theme] : BG.light_gray,
          focus && ["shadow", BORDER[theme]],
          ROUNDED[rounded],
        ],
        styleType === "outline" && [
          "border",
          value ? [BORDER[theme], BG[theme]] : focus ? BORDER[theme] : BORDER.light_gray,
          focus && ["shadow"],
          ROUNDED[rounded],
        ],
        SIZE[size],
      )}>
        <input
          className="absolute w-0 overflow-hidden"
          type="checkbox"
          checked={value}
          onChange={() => onChange?.(!value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <CheckIcon
          className={classNames(
            "stroke-2",
            "transition-transform",
            "delay-100",
            !value && "scale-0",
            styleType === "plain" ? [
              SIZE[size],
              STROKE[theme],
            ] : [
              STROKE.white,
              ICON_SIZE[size]
            ],
          )}
        />
      </div>
      <div>{children}</div>
    </label>
  )
}