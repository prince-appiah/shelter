import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

const Input = (props: InputProps) => {
  const { ...rest } = props;

  return <ChakraInput _focus={{ borderColor: "brand.primary" }} {...rest} />;
};

export default Input;
