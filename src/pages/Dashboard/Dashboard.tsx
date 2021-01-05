import React, { useEffect, useState } from "react";
import mutter from "immer";
import Frame from "../../componets/Frame/Frame";
import DashboardContext from "../../utils/DashboardContext";
import * as S from "./DashboardStyled";
import { mock } from "./mock";
import { ICard } from "../../Models/Card";
import Dialog from "../../componets/Dialog/Dialog";

const Dashboard: React.FC = () => {
  const [frames, setFrames] = useState(mock);
  const [newCard, setNewCard] = useState({
    description: "",
    id: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("frames")) {
      const data = localStorage.getItem("frames");
      setFrames(JSON.parse(data as any));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("frames", JSON.stringify(frames));
  }, [frames]);

  const move = (
    fromFrame: number,
    toFrame: number,
    from: number,
    to: number,
  ) => {
    console.log("fromFrame", fromFrame);
    console.log(toFrame);
    console.log(from);
    console.log(to);
    setFrames(
      mutter(frames, (draft) => {
        const dragged = draft[fromFrame].cards[from];

        draft[fromFrame].cards.splice(from, 1);
        draft[toFrame].cards.splice(to, 0, dragged);
      }),
    );
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target as HTMLInputElement;

    setNewCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addCard = (card: ICard) => {
    const id = Math.random() * 456;
    setNewCard({
      ...card,
      id,
    });

    setFrames(
      mutter(frames, (draft) => {
        draft[0].cards.push(newCard);
      }),
    );

    localStorage.setItem("frames", JSON.stringify(frames));
  };

  const removeCard = (frameIndex: number, cardIndex: number) => {
    setFrames(
      mutter(frames, (draft) => {
        draft[frameIndex].cards.splice(cardIndex, 1);
      }),
    );

    localStorage.setItem("frames", JSON.stringify(frames));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        frames,
        move,
        addCard,
        removeCard,
      }}
    >
      <S.DashboardWrapper>
        <S.DashboardContainer>
          {frames.map((frame, frameIndex) => (
            <Frame
              key={frame.typeFrame}
              frameIndex={frameIndex}
              frame={frame}
              handleDialog={() => setIsOpen(!isOpen)}
            />
          ))}
          <Dialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            dialogFunction={() => {
              addCard(newCard);
              setIsOpen(false);
            }}
          >
            <input name="description" placeholder="" onChange={handleChange} />
          </Dialog>
        </S.DashboardContainer>
      </S.DashboardWrapper>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
