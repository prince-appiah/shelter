import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps,
} from "@chakra-ui/react";
import { useField } from "formik";

type Props = SelectProps & {
  children: any;
  label?: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
};

const Select = (props: Props) => {
  const { name, label, value, onChange, onBlur, children, ...rest } = props;
  const [field, meta] = useField(props.name);

  return (
    <FormControl
      sx={{ width: "100%", mb: 2 }}
      isInvalid={meta.touched && !!meta.error}
    >
      <FormLabel
        htmlFor={name}
        color="gray.500"
        id={`${props.id}-${props.name}-label`}
      >
        {label}
      </FormLabel>

      <ChakraSelect
        _focus={{ borderColor: "brand.primary" }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        // size="lg"
        {...field}
        {...rest}
      >
        {children}
      </ChakraSelect>
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default Select;
