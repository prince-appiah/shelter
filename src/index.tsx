import { ChakraProvider } from "@chakra-ui/react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import AppRoutes from "App";
import Loader from "components/Loader";
import { theme } from "config/theme";
import DrawerProvider from "contexts/DrawerContext";
import DropdownProvider from "contexts/DropdownContext";
import ModalProvider from "contexts/ModalContext";
import { persistor, store } from "redux/store";
import "./index.css";
import NetworkStatusProvider from "contexts/NetworkStatusContext";

render(
  <ChakraProvider resetCSS theme={theme}>
    <Provider store={store}>
      <NetworkStatusProvider>
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
      </NetworkStatusProvider>
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
