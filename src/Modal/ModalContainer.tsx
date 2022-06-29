import React, { HTMLAttributes, useCallback, useEffect, useMemo, useRef } from "react";
import classNames from "classnames";

import { ModalState } from "./types";


export interface ModalContainerProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  state: ModalState;
  stack: ModalState[];
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  index,
  state,
  stack,
}) => {
  const { status, clickMaskToClose, maxShown = 6, ContentComponent, onClose, onRemove } = state;
  const tailIndex = useMemo(() => stack.filter(({ status }) => status === "OPEN").length - index - 1, [index, stack]);
  const promiseResolveRef = useRef<() => void>();
  const close = useCallback(async () => {
    onClose(index, state);
    return new Promise<void>(resolve => promiseResolveRef.current = resolve);
  }, [index, onClose, state]);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === "CLOSED") {
      contentRef.current?.addEventListener(
        "animationend",
        () => {
          onRemove(index, state);
          setTimeout(() => promiseResolveRef.current?.(), 0);
        },
        { once: true }
      );
    }
  }, [index, onClose, onRemove, stack, state, status]);
  return (
    <>
      {/* Mask */}
      {index === 0 &&
        <div
          style={{ zIndex: 1000 }}
          className={classNames(
            "absolute",
            "inset-0",
            "transition-colors",
            "duration-200",
            "backdrop-blur-sm",
            status === "OPEN" && [
              "animate-in",
              "fade-in",
            ],
            status === "CLOSED" && [
              "animate-out",
              "fade-out",
              "fill-mode-forwards",
            ],
            "bg-black/30",
          )}
        />
      }
      {tailIndex < maxShown &&
        <div
          style={{ zIndex: 1000 + index + 1 }}
          className={classNames("fixed", "inset-0", "grid", "place-items-center")}
        >
          {/* Event layout */}
          {clickMaskToClose && <div className="absolute inset-0" onClick={close} />}
          {/* Content */}
          <div
            className={classNames("transition-transform", "duration-500")}
            // style={{ transform: `translateX(${tailIndex * -10}px) translateY(${tailIndex * 10}px)` }}
            style={{ transform: `translateY(${tailIndex * 20}px) scale(${1 - tailIndex * 0.05})` }}
          >
            <div
              ref={contentRef}
              className={classNames(
                "duration-200",
                status === "OPEN" && [
                  "animate-in",
                  "fade-in",
                  index === 0 ? "slide-in-from-top-4" : "zoom-in",
                ],
                status === "CLOSED" && [
                  "animate-out",
                  "fade-out",
                  "fill-mode-forwards",
                  index === 0 ? "slide-out-to-top-4" : "zoom-out",
                ],
                tailIndex !== 0 && "brightness-90",
              )}>
              <ContentComponent
                index={index}
                state={state}
                onClose={close}
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}