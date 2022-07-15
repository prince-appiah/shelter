import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  SelectProps,
} from "@chakra-ui/react";
import { FieldInputProps, FieldProps, useField } from "formik";
import Select from "react-select";

type Props = FieldProps & {
  [key: string]: any;
  options: any[];
  name: string;
  label?: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
};

const MultiSelect = (props: Props) => {
  const { name, label, value, options, onChange, onBlur, children, ...rest } =
    props;
  const [field, meta, helper] = useField(props.name);

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

      <Select
        // _focus={{ borderColor: "brand.primary" }}
        name={field.name}
        // value={value}
        // onChange={onChange}
        onChange={(val) => {
          console.log("reactselectvalue>> ", val);
        }}
        // onBlur={onBlur}
        options={options}
        // {...field}s
        // {...rest}
      />
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default MultiSelect;
