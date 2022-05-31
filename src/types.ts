import { RoundedSize, Size, StyleType, Theme } from "./constants";

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  styleType?: StyleType;
  size?: Size;
  rounded?: RoundedSize;
  theme?: Theme;
}