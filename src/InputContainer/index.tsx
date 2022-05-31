import classNames from "classnames";

import { BG, BORDER, FORM_ITEM_HEIGHT, ROUNDED, TEXT } from "../constants";
import { Loading } from "../Loading";
import { BaseProps } from "../types";

export interface InputContainerProps extends BaseProps {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  focus?: boolean;
  loading?: boolean;
  profix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const InputContainer: React.FC<InputContainerProps> = ({
  children,
  style,
  className,
  focus,
  loading,
  profix,
  suffix,
  disabled,
  theme = "primary",
  styleType = "outline",
  size = "middle",
  rounded = "middle",
}) => {
  return (
    <div
      style={style}
      className={classNames(
        "relative",
        "flex",
        "items-center",
        "overflow-hidden",
        "space-x-2",
        "px-2",
        "transition-all",
        TEXT.gray,
        TEXT[size],
        ROUNDED[rounded],
        FORM_ITEM_HEIGHT[size],
        disabled && ["opacity-70", "pointer-events-none"],
        styleType === "outline" && [
          "border",
          BG.white,
          focus ? [BORDER[theme], "z-10", "shadow"] : BORDER.light_gray
        ],
        styleType === "solid" && [
          BG.light_gray
        ],
        className
      )}>
      {profix && <span className={classNames(focus && TEXT[theme])}>{profix}</span>}
      {children}
      {loading && <Loading />}
      {suffix && <span className={classNames(focus && TEXT[theme])}>{suffix}</span>}
    </div>
  )
}