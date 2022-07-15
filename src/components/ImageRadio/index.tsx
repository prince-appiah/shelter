import { useField } from "formik";
import {
  Box,
  Image,
  UseRadioProps,
  useRadio,
  ImageProps,
  chakra,
  useRadioGroupContext,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

type Props = UseRadioProps &
  ImageProps & {
    image: string;
  };

const ImageRadio = React.forwardRef((props: Props, ref) => {
  const { image, name, ...radioProps } = props;
  const group = useRadioGroupContext();

  let isChecked = group.value.toString() === props.value.toString();

  const [{ checked, ...field }] = useField({
    name,
    type: "radio",
    value: radioProps.value.toString(),
    checked: isChecked,
  });

  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio({
      isChecked,
      ...field,
    });
  console.log("🚀 ~ state", state);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({}, ref)} hidden />
      <Box
        {...getCheckboxProps()}
        bg={state.isChecked ? "green.200" : "transparent"}
        w={24}
        p={1}
        rounded="lg"
      >
        <Image src={image} rounded="lg" {...getLabelProps()} />
      </Box>
      <Text
        textAlign="center"
        fontWeight={600}
        mt={2}
        color={state.isChecked ? "green.400" : "gray.300"}
        sx={{ textTransform: "capitalize" }}
      >
        {radioProps.value}
      </Text>
    </chakra.label>
  );
});

export default ImageRadio;
