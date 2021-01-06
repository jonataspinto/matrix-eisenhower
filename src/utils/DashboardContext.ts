/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { ICard } from "../Models/Card";
import { FrameModel } from "../Models/Frame";

interface IDashboardContext {
  frames: Array<FrameModel>;
  move: (fromFrame: number, from: number, to: number) => void;
  moveInList: (fromFrame: number, toFrame: number, indexItem: number) => void;
  addCard: (card: ICard) => void;
  removeCard: (frameIndex: number, cardIndex: number) => void;
  updateCard: (frameIndex: number, cardIndex: number, cardData: ICard) => void;
}

export default createContext<IDashboardContext>({
  frames: [],
  move: () => {},
  moveInList: () => {},
  addCard: () => {},
  removeCard: () => {},
  updateCard: () => {},
});
