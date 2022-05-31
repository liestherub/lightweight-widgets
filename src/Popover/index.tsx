import { DOMAttributes, ReactNode, useRef, useState } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import { Align, Position } from "../constants";

interface PopoverContainerProps extends DOMAttributes<HTMLDivElement> {
  location: { top: number, left: number, width: number, height: number };
  content?: ReactNode | ((onClose: () => void) => ReactNode);
  position?: Position;
  align?: Align;
  positionOffset?: number;
  onClose: () => void;
}

const PopoverContainer = forwardRef<HTMLDivElement, PopoverContainerProps>(({
  location,
  content,
  position = "bottom",
  align = "start",
  positionOffset = 4,
  onClose,
  ...props
}, ref) => {
  const onX = position === "left" || position === "right";
  const { height, left, top, width } = location
  return createPortal(
    <div
      ref={ref}
      style={{
        left: onX ? position === "left" ? left : left + width : left,
        top: !onX ? position === "top" ? top : top + height : top,
        height: onX ? height : 0,
        width: onX ? 0 : width,
      }}
      className="absolute"
      tabIndex={-1}
      {...props}
    >
      <div
        style={{
          marginTop: position === "bottom" ? positionOffset : 0,
          marginBottom: position === "top" ? positionOffset : 0,
          marginLeft: position === "right" ? positionOffset : 0,
          marginRight: position === "left" ? positionOffset : 0,
        }}
        className={classNames(
          "absolute",
          "animate-in",
          "fade-in",
          "zoom-in",
          "ease-out",
          "duration-100",
          "flex",
          onX ? ["h-full", "flex-col"] : ["w-full", "flex-row"],
          align === "start" && "justify-start",
          align === "middle" && "justify-center",
          align === "end" && "justify-end",
          position === "top" && [
            "bottom-full",
            "left-0",
            align === "start" && "origin-bottom-left",
            align === "middle" && "origin-bottom",
            align === "end" && "origin-bottom-right",
          ],
          position === "bottom" && [
            "top-full",
            "left-0",
            align === "start" && "origin-top-left",
            align === "middle" && "origin-top",
            align === "end" && "origin-top-right",
          ],
          position === "left" && [
            "right-full",
            "top-0",
            align === "start" && "origin-top-right",
            align === "middle" && "origin-right",
            align === "end" && "origin-bottom-right",
          ],
          position === "right" && [
            "left-full",
            "top-0",
            align === "start" && "origin-top-left",
            align === "middle" && "origin-left",
            align === "end" && "origin-bottom-left",
          ],
        )}>
        <div className="shrink-0">
          {typeof content === "function" ? content(onClose) : content}
        </div>
      </div>
    </div>, document.body
  )
});

PopoverContainer.displayName = "PopoverContainer";

export interface PopoverProps extends Omit<PopoverContainerProps, "location" | "onClose"> {
  className?: string,
  trigger?: "click" | "hover";
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  trigger = "click",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const open = () => {
    setIsOpen(true);
    setTimeout(() => contentRef.current?.focus(), 0);
  };
  return (
    <div
      ref={wrapperRef}
      className={classNames("inline-block", className)}
      onClick={trigger === "click" ? open : undefined}
      onMouseEnter={trigger === "hover" ? open : undefined}
      onMouseLeave={trigger === "hover" ? () => setIsOpen(false) : undefined}
    >
      {children}
      {isOpen && wrapperRef.current &&
        <PopoverContainer
          ref={contentRef}
          onBlur={trigger === "click" ? () => setIsOpen(false) : undefined}
          onClose={() => setIsOpen(false)}
          location={{
            height: wrapperRef.current.clientHeight,
            width: wrapperRef.current.clientWidth,
            top: wrapperRef.current.offsetTop,
            left: wrapperRef.current.offsetLeft,
          }}
          {...props}
        />
      }
    </div>
  )
}


export const usePopover = () => {

  return {};
}