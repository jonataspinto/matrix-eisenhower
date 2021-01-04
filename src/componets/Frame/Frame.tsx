import React, { useContext } from 'react';
// import { useDrop } from 'react-dnd';
import { ICard } from '../../Models/Card';
import DashboardContext from '../../utils/DashboardContext';
import Card from '../Card/Card';
import * as S from './FrameStyled';

interface FrameProps {
  frame: {
    typeFrame: "doFirst" | "schedule" | "delegate" | "notDo";
    position: number;
    description: string;
    cards: ICard[];
  },
  frameIndex: number,
  handleDialog?: () => void,
}

const Frame: React.FC<FrameProps> = ({
  frame,
  frameIndex,
  handleDialog
}) => {
  // const [collectedProps, dropRef] = useDrop({
  //   accept: 'CARD',
  // })

  const dashboardContext = useContext(DashboardContext);

  return (
    <S.FrameWrapper
      // ref={dropRef}
      typeFrame={frame.typeFrame}
    >
      <S.AboutFrame>
        <S.FrameNumber>
          {frame.position}
        </S.FrameNumber>
        <S.FrameDescription>
          {frame.description}
        </S.FrameDescription>
      </S.AboutFrame>
      <S.FrameContent>
        {frame.cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            index={index}
            frameIndex={frameIndex}
            description={card.description}
          />
        ))}
        {frame.typeFrame === 'doFirst' && (
          <S.AddCardButton onClick={handleDialog}>
            Add 
          </S.AddCardButton>
        )}
      </S.FrameContent>
    </S.FrameWrapper>
  )
}

export default Frame