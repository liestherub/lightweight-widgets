import { useMemo } from "react";
import classNames from "classnames";

import { BG, ROUNDED, RoundedSize, Size, TEXT } from "../constants";

const SIZES: Record<Size, string> = {
  mini: "h-5 h-5 text-sm",
  small: "h-8 h-8 text-lg",
  middle: "h-12 w-12 text-3xl",
  large: "h-16 w-16 text-4xl",
}

const BG_LIST = [
  "bg-slate-500",
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-yellow-500",
  "bg-lime-500",
  "bg-green-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-sky-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-rose-500",
]

export interface AvatarProps extends React.DOMAttributes<HTMLImageElement> {
  className?: string;
  name?: string;
  url?: string;
  size?: Size;
  rounded?: RoundedSize;
  color?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  name,
  url,
  size = "middle",
  rounded = "full",
  color,
  ...rest
}) => {
  const bg = useMemo(() => {
    if (url) return;
    if (color) return color;
    if (!name) return BG.zinc;
    return BG_LIST[[...name].reduce((p, c) => p + c.charCodeAt(0), 0) % BG_LIST.length];
  }, [color, name, url]);
  const containerClasses = classNames(
    "inline-block",
    "aspect-square",
    SIZES[size],
    ROUNDED[rounded],
    className,
  );
  return (url ?
    /* eslint-disable */
    /* ignore @next/next/no-img-element */
    <img
      className={classNames(
        "object-cover",
        containerClasses
      )}
      src={url}
      alt={name}
      {...rest}
    /> :
    /* eslint-enable */
    <div
      className={classNames(
        "grid",
        "place-content-center",
        "select-none",
        TEXT.white,
        bg,
        containerClasses,
      )}
      {...rest}
    >
      {name?.[0]}
    </div>
  )
}