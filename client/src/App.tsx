import React from 'react';
//import CardLayout from '../src/components/Card/CardLayout/CardLayout';
import Card from './components/Cards/Card/Card';
import { ThemeProvider } from 'emotion-theming';
import theme from './style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card></Card>
    </ThemeProvider>
  );
};

export default App;
