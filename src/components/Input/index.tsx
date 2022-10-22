import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { useField } from "formik";

// type Props = FieldHookConfig<string> & { label: string,inputProps:InputProps };
type Props = InputProps & { label?: string; onChange?: any; value?: any };

// const Input = (props: Props) => {
const Input = (props: Props) => {
  const { name, label, value, onChange, ...rest } = props;
  const [field, meta] = useField(props.name);

  return (
    <FormControl sx={{ width: "100%", mb: 2 }} isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name} color="gray.500" id={`${props.id}-${props.name}-label`}>
        {label}
      </FormLabel>

      <ChakraInput
        _focus={{ borderColor: "brand.primary" }}
        _hover={{ border: "1px solid #219798" }}
        value={value}
        onChange={onChange}
        {...field}
        {...rest}
      />
      {meta.touched && meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
