import styled, { css } from 'styled-components';

interface Props {
  isDragging: boolean
}

export const CardWrapper = styled.div<Props>`
  background-color: ${(porps) => porps.theme.palette.grey[700]};
  border: 2px solid ${(porps) => porps.theme.palette.grey[700]};
  border-radius: ${(porps) => porps.theme.margin?.small};
  width: 100%;
  padding: ${(porps) => porps.theme.margin?.small};
  cursor: grabbing;
  & + div {
    margin-top: ${(props) => props.theme.margin?.small}
  }

  ${(props) => props.isDragging && css`
    background-color: transparent;
    border: 2px dashed ${(porps) => porps.theme.palette.grey[500]};;
    h3 {
      opacity: 0;
    }
  `}
  
`
export const CardDescription = styled.h3`
  font-size: ${(props) => props.theme.typography.h3?.fontSize};
  font-family: ${(props) => props.theme.typography.h3?.fontFamily}

  
`
