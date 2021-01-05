/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { ICard } from "../Models/Card";
import { FrameModel } from "../Models/Frame";

interface IDashboardContext {
  frames: Array<FrameModel>;
  move: (fromFrame: number, toFrame: number, from: number, to: number) => void;
  addCard: (card: ICard) => void;
  removeCard: (frameIndex: number, cardIndex: number) => void;
}

export default createContext<IDashboardContext>({
  frames: [],
  move: () => {},
  addCard: () => {},
  removeCard: () => {},
});
