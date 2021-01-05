import { FrameModel } from "../../Models/Frame";

export const mock: FrameModel[] = [
  {
    description: "Urgente e Importante",
    position: 1,
    typeFrame: "doFirst",
    cards: [],
  },
  {
    description: "Não Urgente e Importante",
    position: 2,
    typeFrame: "schedule",
    cards: [],
  },
  {
    description: "Urgente e Não Importante",
    position: 3,
    typeFrame: "delegate",
    cards: [],
  },
  {
    description: "Não Urgente Não Importante",
    position: 4,
    typeFrame: "notDo",
    cards: [],
  },
];
