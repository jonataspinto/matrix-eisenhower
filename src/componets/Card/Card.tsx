/* eslint-disable no-param-reassign */
import React, { useContext, useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";

import DashboardContext from "../../utils/DashboardContext";
import { ICard } from "../../Models/Card";
import * as S from "./CardStyled";

interface CardProps extends ICard {
  index: number;
  frameIndex: number;
}

const Card: React.FC<CardProps> = ({ description, index, frameIndex }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { move, removeCard } = useContext(DashboardContext);

  const [collectedProps, dragRef] = useDrag({
    item: {
      type: "CARD",
      index,
      frameIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const draggedListIndex = item.frameIndex;
      const targetListIndex = frameIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();

      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();

      const draggedTop = (draggedOffset as XYCoord).y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <S.CardWrapper ref={ref} isDragging={collectedProps.isDragging}>
      <S.CardDescription>{description}</S.CardDescription>
      <S.EditArea>
        <S.DropCardButton
          width="20px"
          onClick={() => removeCard(frameIndex, index)}
        />
        <S.EditCardButton
          width="20px"
          onClick={() => removeCard(frameIndex, index)}
        />
      </S.EditArea>
    </S.CardWrapper>
  );
};

export default Card;
