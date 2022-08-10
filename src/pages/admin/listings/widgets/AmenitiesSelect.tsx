import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  SelectProps,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { useState } from "react";

type Props = SelectProps & {
  children: any;
  label?: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
};

const AmenitiesSelect = (props: Props) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
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

      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default AmenitiesSelect;
