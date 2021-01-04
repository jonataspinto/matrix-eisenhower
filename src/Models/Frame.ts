import { ICard } from "./Card";

export interface FrameModel {
  description: string;
  position: number;
  typeFrame: "doFirst" | "schedule" | "delegate" | "notDo";
  cards: ICard[]
}