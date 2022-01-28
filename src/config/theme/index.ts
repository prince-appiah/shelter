import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {},
    }),
  },
  colors: {
    brand: {
      primary: "#219798",
    },
  },
});
