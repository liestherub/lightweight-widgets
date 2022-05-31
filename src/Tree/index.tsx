import React, { Fragment, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { TreeNode, TreeNodeProps } from "./TreeNode";
import type { FlattenedItem, TreeItem } from "./types";
import {
  buildTree,
  flattenTree,
  getProjection,
  removeChildrenOf,
  setProperty,
} from "./utils";

const useFlattenedItems = (items: TreeItem[], activeId?: string) => {
  return useMemo(() => {
    const flattenedTree = flattenTree(items);
    const collapsedItems = flattenedTree
      .filter(({ children, collapsed }) => children?.length && collapsed)
      .map(({ id }) => id);
    return removeChildrenOf(
      flattenedTree,
      activeId ? [activeId, ...collapsedItems] : collapsedItems
    );
  }, [activeId, items]);
}

export interface TreeProps {
  value: TreeItem[];
  onChange: (value: TreeItem[]) => void;
  indentationWidth?: number;
  itemRender?: (props: TreeNodeProps) => React.ReactElement<TreeNodeProps>;
}

export function Tree({
  value: items,
  onChange: setItems,
  indentationWidth = 20,
  itemRender = props => <TreeNode {...props} />,
}: TreeProps) {
  const [draggingId, setDraggingId] = useState<string>();
  const [overId, setOverId] = useState<string>();
  const [offsetLeft, setOffsetLeft] = useState(0);
  const flattenedItems = useFlattenedItems(items, draggingId);

  const projected = useMemo(() => draggingId && overId ? getProjection(
    flattenedItems,
    draggingId,
    overId,
    offsetLeft,
    indentationWidth,
  ) : null, [draggingId, overId, flattenedItems, offsetLeft, indentationWidth]);

  const sortedIds = useMemo(() =>
    flattenedItems.map(({ id }) => id),
    [flattenedItems]
  );

  const draggingItem = useMemo(() =>
    draggingId ? flattenedItems.find(({ id }) => id === draggingId) : null,
    [draggingId, flattenedItems]
  );

  function resetState() {
    setOverId(undefined);
    setDraggingId(undefined);
    setOffsetLeft(0);
  }

  function handleDragStart({ active }: DragStartEvent) {
    setDraggingId(active.id);
    setOverId(active.id);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedItem[] = JSON.parse(
        JSON.stringify(flattenTree(items))
      );
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);

      setItems(newItems);
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragMove={({ delta }) => setOffsetLeft(delta.x)}
      onDragOver={({ over }) => setOverId(over?.id)}
      onDragEnd={handleDragEnd}
      onDragCancel={resetState}
    >
      <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
        {flattenedItems.map((item) => {
          const { id, children, collapsed, depth } = item;
          return (
            <Fragment key={id}>
              {itemRender({
                id: id,
                value: id,
                depth: id === draggingId && projected ? projected.depth : depth,
                indentationWidth: indentationWidth,
                collapsed: !!children && collapsed,
                childrenIds: children?.map(({ id }) => id),
                onCollapse: children ? () => setItems(setProperty(items, id, "collapsed", value => !value)) : undefined,
              })}
            </Fragment>
          )
        })}
        {draggingId && draggingItem && createPortal(
          <DragOverlay>
            {itemRender({
              id: draggingId,
              depth: draggingItem.depth,
              clone: true,
              value: draggingId,
              childrenIds: draggingItem.children?.map(({ id }) => id),
              indentationWidth: indentationWidth,
            })}
          </DragOverlay>,
          document.body
        )}
      </SortableContext>
    </DndContext>
  );
}
