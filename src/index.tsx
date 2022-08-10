import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "config/theme";
import { persistor, store } from "redux/store";
import AppRoutes from "App";
import ModalProvider from "contexts/modalContext";
import DropdownProvider from "contexts/dropdownContext";
import DrawerProvider from "contexts/drawerContext";
import "./index.css";
import { history } from "redux/rootReducer";
import Loader from "components/Loader";

render(
  <ChakraProvider resetCSS theme={theme}>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ModalProvider>
          <DrawerProvider>
            <DropdownProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </DropdownProvider>
          </DrawerProvider>
        </ModalProvider>
      </PersistGate>
      {/* </ConnectedRouter> */}
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
