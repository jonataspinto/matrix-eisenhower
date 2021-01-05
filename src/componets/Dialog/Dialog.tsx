import React from "react";
import Button from "../Button/Button";
import * as S from "./DialogStyled";

interface DialogProps {
  dialogFunction: () => void;
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  dialogFunction,
  onClose,
  children,
  isOpen,
}) => (
  <S.DialogOverlay isOpen={isOpen}>
    <S.DialogWrapper>
      {children}
      <S.DialogConttrollersWrapper>
        <Button type="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="primary" onClick={dialogFunction}>
          Confirmar
        </Button>
      </S.DialogConttrollersWrapper>
    </S.DialogWrapper>
  </S.DialogOverlay>
);

export default Dialog;
