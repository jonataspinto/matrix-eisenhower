import React from 'react';
import { StyleProvider } from './styles';
import { Dashboard } from './pages';

function App() {
  return (
    <StyleProvider>
      <Dashboard />
    </StyleProvider>
  );
}

export default App;
