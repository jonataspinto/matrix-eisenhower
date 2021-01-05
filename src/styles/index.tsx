import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeDafault } from "./Theme";
import { GlobalStyles } from "./GlobalStyled";

type Props = {
  children: React.ReactNode;
};

export const StyleProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={ThemeDafault}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
