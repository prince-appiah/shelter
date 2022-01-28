import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

//
import { theme } from "config/theme";
import "./index.css";
import { store } from "redux/store";
import App from "App";

render(
  <ChakraProvider resetCSS theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
