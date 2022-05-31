export type StyleType = "solid" | "outline" | "plain";
export type Size = "mini" | "small" | "middle" | "large";
export type RoundedSize = Exclude<Size, "mini"> | "full";
export type Theme = "primary" | "zinc" | "red" | "green" | "amber" | "blue";
export type LightTheme = `${Theme}_light`;
export type DarkTheme = `${Theme}_dark`;
export type OtherColor = "black" | "white" | "gray" | "light_gray";
export type Color = Theme | LightTheme | DarkTheme | OtherColor;
export type Align = "start" | "middle" | "end";
export type Position = "top" | "bottom" | "left" | "right";
export type ClassName<T extends string> = { [key in T]: string };

export const FORM_ITEM_HEIGHT: ClassName<Size> = {
  mini: "h-6",
  small: "h-8",
  middle: "h-10",
  large: "h-12",
}

export const LIGHT_COLOR: Record<Theme, LightTheme> = {
  primary: "primary_light",
  zinc: "zinc_light",
  red: "red_light",
  green: "green_light",
  amber: "amber_light",
  blue: "blue_light",
};

export const DARK_COLOR: Record<Theme, DarkTheme> = {
  primary: "primary_dark",
  zinc: "zinc_dark",
  red: "red_dark",
  green: "green_dark",
  amber: "amber_dark",
  blue: "blue_dark",
};

export const STROKE: ClassName<Color> = {
  primary_light: "stroke-primary-300",
  primary: "stroke-primary-500",
  primary_dark: "stroke-primary-700",
  zinc_light: "stroke-zinc-300",
  zinc: "stroke-zinc-500",
  zinc_dark: "stroke-zinc-700",
  red_light: "stroke-red-300",
  red: "stroke-red-500",
  red_dark: "stroke-red-700",
  green_light: "stroke-green-300",
  green: "stroke-green-500",
  green_dark: "stroke-green-700",
  amber_light: "stroke-amber-300",
  amber: "stroke-amber-500",
  amber_dark: "stroke-amber-700",
  blue_light: "stroke-blue-300",
  blue: "stroke-blue-500",
  blue_dark: "stroke-blue-700",
  white: "stroke-white dark:stroke-black",
  black: "stroke-black dark:stroke-white",
  gray: "stroke-gray-500 dark:stroke-gray-800",
  light_gray: "stroke-gray-300 dark:stroke-gray-600",
}

export const BORDER: ClassName<Color | "light_slate"> = {
  primary_light: "border-primary-300",
  primary: "border-primary-500",
  primary_dark: "border-primary-700",
  zinc_light: "border-zinc-300",
  zinc: "border-zinc-500",
  zinc_dark: "border-zinc-700",
  red_light: "border-red-300",
  red: "border-red-500",
  red_dark: "border-red-700",
  green_light: "border-green-300",
  green: "border-green-500",
  green_dark: "border-green-700",
  amber_light: "border-amber-300",
  amber: "border-amber-500",
  amber_dark: "border-amber-700",
  blue_light: "border-blue-300",
  blue: "border-blue-500",
  blue_dark: "border-blue-700",
  white: "border-white dark:border-black",
  black: "border-black dark:border-white",
  gray: "border-gray-500 dark:border-gray-800",
  light_gray: "border-gray-300 dark:border-gray-600",
  light_slate: "border-slate-200 dark:border-slate-800",
}

export const HOVER_BORDER: ClassName<Color> = {
  primary_light: "hover:border-primary-300",
  primary: "hover:border-primary-500",
  primary_dark: "hover:border-primary-700",
  zinc_light: "hover:border-zinc-300",
  zinc: "hover:border-zinc-500",
  zinc_dark: "hover:border-zinc-700",
  red_light: "hover:border-red-300",
  red: "hover:border-red-500",
  red_dark: "hover:border-red-700",
  green_light: "hover:border-green-300",
  green: "hover:border-green-500",
  green_dark: "hover:border-green-700",
  amber_light: "hover:border-amber-300",
  amber: "hover:border-amber-500",
  amber_dark: "hover:border-amber-700",
  blue_light: "hover:border-blue-300",
  blue: "hover:border-blue-500",
  blue_dark: "hover:border-blue-700",
  white: "hover:border-white dark:hover:border-black",
  black: "hover:border-black dark:hover:border-white",
  gray: "hover:border-gray-500 dark:hover:border-gray-800",
  light_gray: "hover:border-gray-300 dark:hover:border-gray-600",
}

export const BG: ClassName<Color> = {
  primary_light: "bg-primary-300",
  primary: "bg-primary-500",
  primary_dark: "bg-primary-700",
  zinc_light: "bg-zinc-300",
  zinc: "bg-zinc-500",
  zinc_dark: "bg-zinc-700",
  red_light: "bg-red-300",
  red: "bg-red-500",
  red_dark: "bg-red-700",
  green_light: "bg-green-300",
  green: "bg-green-500",
  green_dark: "bg-green-700",
  amber_light: "bg-amber-300",
  amber: "bg-amber-500",
  amber_dark: "bg-amber-700",
  blue_light: "bg-blue-300",
  blue: "bg-blue-500",
  blue_dark: "bg-blue-700",
  white: "bg-white dark:bg-black",
  black: "bg-black dark:bg-white",
  gray: "bg-gray-500 dark:bg-gray-800",
  light_gray: "bg-gray-200 dark:bg-gray-600",
}

export const HOVER_BG: ClassName<Color> = {
  primary_light: "hover:bg-primary-300",
  primary: "hover:bg-primary-500",
  primary_dark: "hover:bg-primary-700",
  zinc_light: "hover:bg-zinc-300",
  zinc: "hover:bg-zinc-500",
  zinc_dark: "hover:bg-zinc-700",
  red_light: "hover:bg-red-300",
  red: "hover:bg-red-500",
  red_dark: "hover:bg-red-700",
  green_light: "hover:bg-green-300",
  green: "hover:bg-green-500",
  green_dark: "hover:bg-green-700",
  amber_light: "hover:bg-amber-300",
  amber: "hover:bg-amber-500",
  amber_dark: "hover:bg-amber-700",
  blue_light: "hover:bg-blue-300",
  blue: "hover:bg-blue-500",
  blue_dark: "hover:bg-blue-700",
  white: "hover:bg-white dark:hover:bg-black",
  black: "hover:bg-black dark:hover:bg-white",
  gray: "hover:bg-gray-500 dark:hover:bg-gray-800",
  light_gray: "hover:bg-gray-300 dark:hover:bg-gray-600",
}

export const ROUNDED: ClassName<RoundedSize> = {
  small: "rounded-sm",
  middle: "rounded",
  large: "rounded-lg",
  full: "rounded-full",
}

export const TEXT: ClassName<Size | Color> = {
  // Size
  mini: "text-xs",
  small: "text-xs",
  middle: "text-sm",
  large: "text-base",
  // Colors
  primary_light: "text-primary-300",
  primary: "text-primary-500",
  primary_dark: "text-primary-700",
  zinc_light: "text-zinc-300",
  zinc: "text-zinc-500",
  zinc_dark: "text-zinc-700",
  red_light: "text-red-300",
  red: "text-red-500",
  red_dark: "text-red-700",
  green_light: "text-green-300",
  green: "text-green-500",
  green_dark: "text-green-700",
  amber_light: "text-amber-300",
  amber: "text-amber-500",
  amber_dark: "text-amber-700",
  blue_light: "text-blue-300",
  blue: "text-blue-500",
  blue_dark: "text-blue-700",
  white: "text-white dark:text-black",
  black: "text-black dark:text-white",
  gray: "text-gray-500 dark:text-gray-700",
  light_gray: "text-gray-300 dark:text-gray-600",
}

export const HOVER_TEXT: ClassName<Color> = {
  primary_light: "hover:text-primary-300",
  primary: "hover:text-primary-500",
  primary_dark: "hover:text-primary-700",
  zinc_light: "hover:text-zinc-300",
  zinc: "hover:text-zinc-500",
  zinc_dark: "hover:text-zinc-700",
  red_light: "hover:text-red-300",
  red: "hover:text-red-500",
  red_dark: "hover:text-red-700",
  green_light: "hover:text-green-300",
  green: "hover:text-green-500",
  green_dark: "hover:text-green-700",
  amber_light: "hover:text-amber-300",
  amber: "hover:text-amber-500",
  amber_dark: "hover:text-amber-700",
  blue_light: "hover:text-blue-300",
  blue: "hover:text-blue-500",
  blue_dark: "hover:text-blue-700",
  white: "hover:text-white dark:hover:text-black",
  black: "hover:text-black dark:hover:text-white",
  gray: "hover:text-500-gray dark:hover:text-gray-800",
  light_gray: "hover:text-gray-300 dark:hover:text-gray-600",
}

export const ANIMATION_IN_TRANSLATE: ClassName<Position> = {
  top: "slide-in-from-top",
  right: "slide-in-from-right",
  bottom: "slide-in-from-bottom",
  left: "slide-in-from-left",
}

export const ANIMATION_OUT_TRANSLATE: ClassName<Position> = {
  top: "slide-out-from-top",
  right: "slide-out-from-right",
  bottom: "slide-out-from-bottom",
  left: "slide-out-from-left",
}