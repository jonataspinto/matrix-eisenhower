import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: ${(props) => props.theme.margin?.small};
  padding-bottom: ${(props) => props.theme.margin?.regular};
  display: grid;
  grid-template-rows: auto 2fr;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: initial;
  position: relative;
`;

export const DashboardContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: ${(props) => props.theme.margin?.large};
  justify-items: center;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    overflow: auto;
  }
`;
