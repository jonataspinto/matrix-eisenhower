import styled, { css } from "styled-components";

import { DeleteForever } from "@styled-icons/material/DeleteForever";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";

export type CardProps = {
  isDragging: boolean;
};

export const CardWrapper = styled.div<CardProps>`
  background-color: ${(props) => props.theme.palette.grey[700]};
  border: 2px solid ${(props) => props.theme.palette.grey[700]};
  border-radius: ${(props) => props.theme.margin?.small};
  width: 100%;
  padding: ${(props) => props.theme.margin?.small};
  cursor: grabbing;
  display: grid;
  grid-template-columns: 2fr auto;
  align-items: flex-start;
  position: relative;
  & + div {
    margin-top: ${(props) => props.theme.margin?.small};
  }

  ${(props) =>
    props.isDragging &&
    css`
      background-color: transparent;
      border: 2px dashed ${props.theme.palette.grey[500]};
      h3 {
        opacity: 0;
      }
    `}
`;

export const CardDescription = styled.h3`
  font-size: ${(props) => props.theme.typography.h3?.fontSize};
  font-family: ${(props) => props.theme.typography.h3?.fontFamily};
`;

export const EditArea = styled.div`
  display: flex;
`;

export const DropCardButton = styled(DeleteForever)`
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  margin-bottom: ${(props) => props.theme.margin?.small};
  margin-right: ${(props) => props.theme.margin?.small};
  &:hover {
    color: ${(props) => props.theme.palette.error.main};
  }
  transition: color 0.1s ease-in-out;
`;

export const EditCardButton = styled(EditAlt)`
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  margin-bottom: ${(props) => props.theme.margin?.small};
  margin-right: ${(props) => props.theme.margin?.small};
  &:hover {
    color: ${(props) => props.theme.palette.primary.dark};
  }
  transition: color 0.1s ease-in-out;
`;
