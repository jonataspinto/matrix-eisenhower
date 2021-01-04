import { FrameModel } from "../../Models/Frame";
export const mock: FrameModel[] = [
  {
    description:"description frame",
    position: 1,
    typeFrame:"doFirst",
    cards: [
      {
        id: 11,
        description: 'description of 11º'
      },
      {
        id: 12,
        description: 'description of 12º'
      },
      {
        id: 13,
        description: 'description '
      }
    ]
  },
  {
    description:"description frame",
    position: 2,
    typeFrame:"schedule",
    cards: [
      {
        id: 14,
        description: 'some card schedule'
      },
      {
        id: 15,
        description: 'description some full'
      },
      {
        id: 16,
        description: 'description atech'
      }
    ]
  },
  {
    description:"description frame",
    position: 3,
    typeFrame:"delegate",
    cards: []
  },
  {
    description:"description frame",
    position: 4,
    typeFrame:"notDo",
    cards: []
  },
]