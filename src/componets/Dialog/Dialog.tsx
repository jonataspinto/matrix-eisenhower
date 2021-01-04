import React from 'react';
import * as S from './DialogStyled';
interface DialogProps {
  dialogFunction?: () => void,
  onClose?: () => void,
  children: React.ReactNode,
  isOpen: boolean
}

const Dialog: React.FC<DialogProps> = ({
  dialogFunction,
  onClose,
  children,
  isOpen
}) => {
  return (
    <S.DialogOverlay
     isOpen={isOpen}
    >
      <S.DialogWrapper>
      {children}
      <div>
        <button onClick={onClose}>cancelar</button>
        <button onClick={dialogFunction}>confirmar</button>
      </div>
      </S.DialogWrapper>
    </S.DialogOverlay>
  )
}

export default Dialog
