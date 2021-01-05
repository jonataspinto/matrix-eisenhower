import styled from "styled-components";

export type InputProps = {
  label?: string;
  width?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputContainer = styled.div<{ width: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  padding: 10px 25px;
  position: relative;
`;

export const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 9px 8px;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  width: 100%;
  height: 44px;
  color: ${(props) => props.theme.palette.text.primary};
  border-color: ${(props) => props.theme.palette.background.paper};
  :focus {
    border-color: ${(props) => props.theme.palette.primary.main};
    outline: none;
  }
`;

export const Label = styled.label`
  margin: 3px 0px;
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  margin-bottom: 8px;
`;

export const HintLabel = styled.span`
  margin: 3px 0;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text.primary};
`;
