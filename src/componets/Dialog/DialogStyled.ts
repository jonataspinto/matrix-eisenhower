import styled, { css } from "styled-components";

export type Props = {
  isOpen: boolean;
};

export const DialogOverlay = styled.div<Props>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `}
`;

export const DialogWrapper = styled.div`
  background-color: ${(porps) => porps.theme.palette.grey[500]};
  border: 2px solid ${(porps) => porps.theme.palette.grey[100]};
  border-radius: ${(porps) => porps.theme.margin?.small};
  padding: 10px 60px;
  display: flex;
  flex-direction: column;
`;

export const DialogConttrollersWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: ${(props) => props.theme.margin?.regular};
  gap: ${(props) => props.theme.margin?.small};
`;
