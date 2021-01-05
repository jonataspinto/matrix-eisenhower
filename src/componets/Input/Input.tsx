import React from "react";
import * as S from "./InputStyled";

const Input: React.FC<S.InputProps> = ({
  label,
  type,
  name,
  value,
  width = "100%",
  onChange,
  ...rest
}) => (
  <S.InputContainer width={width}>
    <S.Label>{label}</S.Label>
    <S.Input
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      {...rest}
    />
  </S.InputContainer>
);

export default Input;
