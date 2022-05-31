import { useState } from "react";
import classNames from "classnames";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DotsVerticalIcon } from "@heroicons/react/solid";

import { HOVER_BG, TEXT } from "../constants";
import { BaseProps } from "../types";

export interface TreeNodeProps extends BaseProps {
  id: string;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  indentationWidth: number;
  value: string;
  childrenIds?: string[];
  onCollapse?(): void;
}

export function TreeNode({
  className,
  style,
  id,
  depth,
  indentationWidth,
  value,
  clone,
  collapsed,
  onCollapse,
}: TreeNodeProps) {
  const [hover, setHover] = useState(false);
  const {
    attributes,
    listeners,
    isDragging,
    isSorting,
    transform,
    transition,
    setDraggableNodeRef,
    setDroppableNodeRef,
  } = useSortable({ id });
  const paddingLeft = clone ? 0 : indentationWidth * depth;

  return (
    <li
      ref={setDroppableNodeRef}
      style={{ paddingLeft, ...style }}
      className={classNames(
        "list-none",
        "relative",
        "select-none",
        !clone && HOVER_BG.light_gray,
        isSorting && "pointer-events-none",
        isDragging && "opacity-50",
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        ref={setDraggableNodeRef}
        style={{ transform: CSS.Translate.toString(transform), transition }}
        className={classNames("flex", "items-center", "px-2")}
      >
        <div className={classNames("flex", "items-center", "gap-1", "flex-1")}>
          {onCollapse ?
            <svg
              className={classNames(
                "w-4",
                "h-4",
                "transition-transform",
                "cursor-pointer",
                "fill-gray-400",
                !collapsed && "rotate-90",
              )}
              onClick={onCollapse}>
              <path d="M10.3 7.3l-5.1 3.2c-.1.1-.3 0-.4-.1V3.8c0-.2.1-.3.3-.3h.2l5.1 3.2c.1.1.1.3-.1.6.1-.1.1-.1 0 0z" />
            </svg> :
            <div className="w-4" />
          }
          {value}
        </div>
        <DotsVerticalIcon
          className={classNames(
            "h-4",
            "outline-none",
            "cursor-move",
            TEXT.gray,
            hover ? "visible" : "hidden",
          )}
          {...attributes}
          {...listeners}
        />
      </div>
    </li>
  );
}
