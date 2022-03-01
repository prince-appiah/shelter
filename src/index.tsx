import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

//
import { theme } from "config/theme";
import "./index.css";
import { store } from "redux/store";
// import App from "App";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "AppRoutes";

render(
  <ChakraProvider resetCSS theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
