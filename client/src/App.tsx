import React from 'react';
import Cards from './components/Cards/Cards';
import { ThemeProvider } from 'emotion-theming';
import theme from './style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cards />
    </ThemeProvider>
  );
};

export default App;
