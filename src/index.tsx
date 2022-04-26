import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

//
import { theme } from "config/theme";
import "./index.css";
import { store } from "redux/store";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "App";
import ModalProvider from "contexts/modalContext";
import DropdownProvider from "contexts/dropdownContext";

render(
  <ChakraProvider resetCSS theme={theme}>
    <Provider store={store}>
      <ModalProvider>
        <DropdownProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DropdownProvider>
      </ModalProvider>
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
