import React from 'react';
import { mainTheme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);