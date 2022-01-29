import {
  Button as ChakraButton,
  ButtonProps,
  useStyleConfig,
} from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  const { children, variant, size, ...rest } = props;
  const styles = useStyleConfig("Button", { variant, size });

  return (
    <ChakraButton
      bgColor="brand.primary"
      color="white"
      sx={styles}
      _hover={{ bgColor: "brand.primary" }}
      _focus={{ boxShadow: "none" }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
