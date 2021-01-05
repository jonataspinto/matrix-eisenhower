import { ICard } from "./Card";

export type FrameModel = {
  description: string;
  position: number;
  typeFrame: "doFirst" | "schedule" | "delegate" | "notDo";
  cards: ICard[];
};
