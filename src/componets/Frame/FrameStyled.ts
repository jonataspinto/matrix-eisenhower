import styled, { css } from "styled-components";
import Button from "../Button/Button";

export type IFrame = {
  typeFrame: "doFirst" | "schedule" | "delegate" | "notDo";
};

const TypeFrame = {
  doFirst: css`
    background-color: ${(props) => props.theme.palette.success?.main};
    border: 1px solid ${(props) => props.theme.palette.success?.main};
  `,
  schedule: css`
    background-color: ${(props) => props.theme.palette.info?.main};
    border: 1px solid ${(props) => props.theme.palette.info?.main};
  `,
  delegate: css`
    background-color: ${(props) => props.theme.palette.warning?.main};
    border: 1px solid ${(props) => props.theme.palette.warning?.main};
  `,
  notDo: css`
    background-color: ${(props) => props.theme.palette.error?.main};
    border: 1px solid ${(props) => props.theme.palette.error?.main};
  `,
};

export const FrameWrapper = styled.div<IFrame>`
  display: grid;
  grid-template-columns: auto 2fr;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  ${(props) => props.typeFrame && TypeFrame[props.typeFrame]}
`;
export const AboutFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: ${(props) => props.theme.margin?.small};
`;
export const FrameNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.palette.text.primary};
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.fontSize}px;
  margin-bottom: ${(props) => props.theme.margin?.small};
`;
export const FrameDescription = styled.div`
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  transform: rotate(-180deg);
  width: 100%;
  white-space: nowrap;
  writing-mode: vertical-rl;
`;
export const FrameContent = styled.div`
  background-color: ${(props) => props.theme.palette.grey[800]};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.margin?.small};
  position: relative;
`;

export const AddCardButton = styled(Button).attrs(() => ({
  type: "ghost",
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  padding: 2px;
  margin-bottom: ${(props) => props.theme.margin?.small};
  margin-right: ${(props) => props.theme.margin?.small};
`;
