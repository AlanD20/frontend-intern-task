import React from 'react';
import ReactDOM from 'react-dom/client';
import { pink, lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './common/store';
import { BrowserRouter } from 'react-router-dom';

const customTheme = createTheme({
  palette: {
    primary: pink,
    secondary: lightBlue,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
