import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from "@chakra-ui/react";
import customTheme from "./js/theme";

/*
FONTS
 */
import "@fontsource/inter";
import "@fontsource/roboto";
import "./css/fonts.css";
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './js/core/store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={customTheme}>
          <App />
        </ChakraProvider>
      </Provider>
  </React.StrictMode>,
)
