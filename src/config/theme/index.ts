import { extendTheme } from "@chakra-ui/react";
import ButtonStyles from "./components/Button";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {},
    }),
  },
  colors: {
    black: "#072448",
    brand: {
      primary: "#219798",
    },
    text: {
      primary: "#072448"
    }
  },
  components: {
    Button: ButtonStyles,
  },
});
