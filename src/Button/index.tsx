import classNames from "classnames";

import { BG, BORDER, DARK_COLOR, FORM_ITEM_HEIGHT, HOVER_BG, HOVER_BORDER, HOVER_TEXT, LIGHT_COLOR, ROUNDED, StyleType, TEXT } from "../constants";
import { Loading } from "../Loading";
import { BaseProps } from "../types";

export interface ButtonProps extends Omit<BaseProps, "styleType">, React.HTMLAttributes<HTMLButtonElement> {
  square?: boolean;
  loading?: boolean;
  styleType?: StyleType | "air";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  className,
  size = "middle",
  styleType = "solid",
  theme = "primary",
  rounded = "middle",
  disabled,
  square,
  loading,
  ...domAttributes
}) => {
  return (
    <button
      style={style}
      disabled={disabled}
      className={classNames(
        "appearance-none",
        "relative",
        "flex",
        "items-center",
        "justify-center",
        "transition-all",
        "whitespace-nowrap",
        "select-none",
        TEXT[size],
        rounded && ROUNDED[rounded],
        square || styleType === "plain" ? "px-0" : "px-5",
        disabled && ["opacity-70", "pointer-events-none"],
        styleType === "air" && [
          "hover:bg-opacity-20",
          square && "aspect-square",
          FORM_ITEM_HEIGHT[size],
          TEXT[theme],
          HOVER_BG[theme],
        ],
        styleType === "plain" && [
          "inline-block",
          TEXT[theme],
          HOVER_TEXT[DARK_COLOR[theme]],
        ],
        styleType === "solid" && [
          "hover:shadow",
          TEXT.white,
          square && "aspect-square",
          FORM_ITEM_HEIGHT[size],
          BG[theme],
          HOVER_BG[DARK_COLOR[theme]],
        ],
        styleType === "outline" && [
          "border",
          "hover:shadow",
          square && "aspect-square",
          BORDER[theme],
          TEXT[theme],
          HOVER_TEXT[DARK_COLOR[theme]],
          HOVER_BORDER[DARK_COLOR[theme]],
          FORM_ITEM_HEIGHT[size],
        ],
        className
      )}
      {...domAttributes}
    >
      {loading ? <Loading /> : children}
    </button>
  );
};
