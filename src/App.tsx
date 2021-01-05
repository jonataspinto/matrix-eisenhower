import React from "react";
import { StyleProvider } from "./styles";
import { Dashboard } from "./pages";

const App: React.FC = () => (
  <StyleProvider>
    <Dashboard />
  </StyleProvider>
);

export default App;
