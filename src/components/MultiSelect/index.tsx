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
  multi?: boolean;
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

      {/* <Select
        name={props.name}
        options={options}
        isMulti={props.multi}
        value={props.value ? props.value : null}
        onChange={(selected) => { 
          props.multi &&
          selected.length &&
          selected.find((option) => option.value === "all")
            ? props.handleChange(options.slice(1))
            : !props.multi
            ? props.handleChange((selected && selected.value) || null)
            : props.handleChange(selected);
        }}
        // {...rest}
        {...props}
      /> */}

      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default MultiSelect;
