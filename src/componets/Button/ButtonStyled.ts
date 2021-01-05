import styled, { css } from "styled-components";

export type ButtonProps = {
  type: "ghost" | "primary";
  children: React.ReactNode;
  onClick: () => void | undefined;
};
const TYPES = {
  ghost: css`
    background-color: transparent;
    border: 2px solid;
  `,
  primary: css`
    background-color: ${(props) => props.theme.palette.primary.dark};
  `,
};

export const ButtonWrapper = styled.div<ButtonProps>`
  border-radius: ${(porps) => porps.theme.margin?.small};
  padding: ${(porps) => porps.theme.margin?.small};
  cursor: pointer;
  ${(props) => TYPES[props.type]}
`;
