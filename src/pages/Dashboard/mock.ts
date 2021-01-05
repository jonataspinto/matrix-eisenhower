import { FrameModel } from "../../Models/Frame";

export const mock: FrameModel[] = [
  {
    description: "Urgente e Importante",
    position: 1,
    typeFrame: "doFirst",
    cards: [
      {
        id: 11,
        description: "description of 11º",
      },
      {
        id: 12,
        description: "description of 12º",
      },
      {
        id: 13,
        description: "description ",
      },
    ],
  },
  {
    description: "Não Urgente e Importante",
    position: 2,
    typeFrame: "schedule",
    cards: [
      {
        id: 14,
        description: "some card schedule",
      },
      {
        id: 15,
        description: "description some full",
      },
      {
        id: 16,
        description: "description atech",
      },
    ],
  },
  {
    description: "Urgente e Não Importante",
    position: 3,
    typeFrame: "delegate",
    cards: [],
  },
  {
    description: "Não Urgente e Não Importante",
    position: 4,
    typeFrame: "notDo",
    cards: [],
  },
];
