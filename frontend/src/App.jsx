import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import React from 'react';
import './App.css';
import Routes from './routes';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#95CC00',
        contrastText: '#FEECFE',
      },
      secondary: {
        main: '#7A09C7',
        contrastText: '#FEECFE',
      },
    },
  },
  ptBR,
);

function App() {
  return (
    <div className="wrapperApp">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
