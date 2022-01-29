import { StyleConfig } from "@chakra-ui/theme-tools";

const ButtonStyles: StyleConfig = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    outline: (props) => ({
      //   borderColor: "primary.brand",
      bgColor: "white",
      color: "brand.primary",
      _hover: {
        bgColor: "white",
      },
    }),
    solid: (props) => ({
      bgColor: "brand.primary",
      color: "white",
      _hover: {
        bgColor: "brand.primary",
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

export default ButtonStyles;
