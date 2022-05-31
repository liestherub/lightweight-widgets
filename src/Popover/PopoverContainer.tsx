import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import classNames from "classnames";

export interface PopoverState {
  clickMaskToClose?: boolean;
  status: "OPEN" | "CLOSED";
  onClose: (index: number, state: PopoverState) => void;
  onRemove: (index: number, state: PopoverState) => void;
  render?: (index: number, state: PopoverState) => ReactNode;
}

export interface PopoverContainerProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  state: PopoverState;
}

export const PopoverContainer: React.FC<PopoverContainerProps> = ({
  index,
  state,
}) => {
  const { status, clickMaskToClose, onClose, onRemove, render } = state;
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === "CLOSED") {
      contentRef.current?.addEventListener("animationend", () => {
        onRemove(index, state);
      }, { once: true });
    }
  }, [index, onRemove, state, status]);
  return (
    <div style={{ zIndex: 1000 + index + 1 }} className={classNames("fixed", "inset-0")}>
      {/* Event layout */}
      {clickMaskToClose && <div className="absolute inset-0" onClick={() => onClose(index, state)} />}
      {/* Content */}
      <div
        ref={contentRef}
        className={classNames(
          "duration-200",
          status === "OPEN" && [
            "animate-in",
            "fade-in",
          ],
          status === "CLOSED" && [
            "animate-out",
            "fade-out",
            "fill-mode-forwards",
          ],
        )}>
        {render?.(index, state)}
      </div>
    </div>
  );
}