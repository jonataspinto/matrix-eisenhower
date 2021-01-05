import React, { useEffect, useState } from "react";
import mutter from "immer";
import { v4 as uuid } from "uuid";
import Frame from "../../componets/Frame/Frame";
import DashboardContext from "../../utils/DashboardContext";
import * as S from "./DashboardStyled";
import { mock } from "./mock";
import { ICard } from "../../Models/Card";
import Dialog from "../../componets/Dialog/Dialog";
import Input from "../../componets/Input/Input";

const initialState = {
  description: "",
  id: "",
};

const Dashboard: React.FC = () => {
  const [frames, setFrames] = useState(mock);
  const [newCard, setNewCard] = useState(initialState);

  useEffect(() => {
    if (localStorage.getItem("frames")) {
      const data = localStorage.getItem("frames");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFrames(JSON.parse(data as any));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("frames", JSON.stringify(frames));
  }, [frames]);

  const move = (fromFrame: number, from: number, to: number) => {
    setFrames(
      mutter(frames, (draft) => {
        const dragged = draft[fromFrame].cards[from];

        draft[fromFrame].cards.splice(from, 1);
        draft[fromFrame].cards.splice(to, 0, dragged);
      }),
    );
  };

  const moveInList = (
    fromFrame: number,
    toFrame: number,
    indexItem: number,
  ) => {
    setFrames(
      mutter(frames, (draft) => {
        const dragged = draft[fromFrame].cards[indexItem];

        draft[fromFrame].cards.splice(indexItem, 1);
        draft[toFrame].cards.push(dragged);
      }),
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const { name, value } = event.target as HTMLInputElement;

    setNewCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addCard = async (card: ICard) => {
    const id = await uuid();

    setFrames(
      mutter(frames, (draft) => {
        const copyCard = {
          ...card,
          id,
        };
        draft[0].cards.push(copyCard);
      }),
    );

    await localStorage.setItem("frames", JSON.stringify(frames));

    setNewCard(initialState);
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
        moveInList,
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
            <Input
              label="Descrição"
              name="description"
              value={newCard.description}
              onChange={handleChange}
            />
          </Dialog>
        </S.DashboardContainer>
      </S.DashboardWrapper>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
