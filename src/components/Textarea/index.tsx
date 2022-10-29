import { FormControl, FormErrorMessage, FormLabel, Textarea as ChakraTextarea, TextareaProps } from "@chakra-ui/react";
import { useField } from "formik";

type Props = TextareaProps & { label?: string; onChange?: any; value?: any };

const Textarea = (props: Props) => {
  const { name, label, value, onChange, onBlur, ...rest } = props;
  const [field, meta] = useField(props.name);

  return (
    <FormControl sx={{ width: "100%", mb: 2 }} isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name} color="gray.500" id={`${props.id}-${props.name}-label`}>
        {label}
      </FormLabel>
      <ChakraTextarea
        _focus={{ borderColor: "brand.primary" }}
        _hover={{ border: "1px solid #219798" }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...field}
        {...rest}
      />
      {meta.touched && meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

export default Textarea;
