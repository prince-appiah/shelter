import { Box, useRadio } from "@chakra-ui/react";

const AccountTypeCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth={1}
                borderRadius={2}
                boxShadow={3}
                px={10}
                py={8}
                width="100%"
                _checked={{
                    bg: "brand.primary",
                    color: "white",
                    borderColor: "brand.primary",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default AccountTypeCard;
