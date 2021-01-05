import React from "react";
import * as S from "./ButtonStyled";

const Button: React.FC<S.ButtonProps> = ({ type, children, ...rest }) => (
  <S.ButtonWrapper type={type} {...rest}>
    {children}
  </S.ButtonWrapper>
);

export default Button;
