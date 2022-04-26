import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonStyles: ComponentStyleConfig = {
  // Styles for the base style
  baseStyle: {
    _focus: { boxShadow: "none" },
    borderRadius: 3,
  },
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
