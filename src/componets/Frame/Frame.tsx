/* eslint-disable no-param-reassign */
import React, { useContext, useRef } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { BookmarkPlus } from "@styled-icons/boxicons-regular/BookmarkPlus";

import DashboardContext from "../../utils/DashboardContext";
import { ICard } from "../../Models/Card";
import Card from "../Card/Card";

import * as S from "./FrameStyled";

interface FrameProps {
  frame: {
    typeFrame: "doFirst" | "schedule" | "delegate" | "notDo";
    position: number;
    description: string;
    cards: ICard[];
  };
  frameIndex: number;
  handleDialog: () => void;
}

const Frame: React.FC<FrameProps> = ({ frame, frameIndex, handleDialog }) => {
  const ref = useRef<HTMLDivElement>(null);

  const dashboardContext = useContext(DashboardContext);

  const [{ isOver }, dropRef] = useDrop({
    accept: "CARD",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const didDrop = monitor.didDrop();

      const draggedListIndex = item.frameIndex;
      const draggedIndex = item.index;
      const targetListIndex = frameIndex;

      if (draggedListIndex === targetListIndex) {
        return;
      }

      if (!didDrop) {
        dashboardContext.moveInList(
          draggedListIndex,
          targetListIndex,
          draggedIndex,
        );

        item.listIndex = targetListIndex;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  dropRef(ref);

  return (
    <S.FrameWrapper ref={ref} typeFrame={frame.typeFrame}>
      <S.AboutFrame>
        <S.FrameNumber>{frame.position}</S.FrameNumber>
        {frame.typeFrame === "doFirst" && (
          <S.AddCardButton onClick={handleDialog}>
            <BookmarkPlus width="20px" />
          </S.AddCardButton>
        )}

        <S.FrameDescription>{frame.description}</S.FrameDescription>
      </S.AboutFrame>
      <S.FrameContent isOver={isOver}>
        {frame.cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            index={index}
            frameIndex={frameIndex}
            description={card.description}
          />
        ))}
      </S.FrameContent>
    </S.FrameWrapper>
  );
};

export default Frame;
