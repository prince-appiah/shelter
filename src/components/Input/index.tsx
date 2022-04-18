import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { useField, FieldHookConfig } from "formik";

type Props = InputProps;

const Input = (props: Props) => {
  const { name, ...rest } = props;
  // const [field, meta] = useField(name);

  return (
    <ChakraInput
      _focus={{ borderColor: "brand.primary" }}
      {...rest}
      // {...field}
    />
  );
};

export default Input;
