import {
    Box,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    ModalBody,
    ModalCloseButton, ModalHeader,
    PinInput,
    PinInputField,
    Text
} from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import OtpModal from "./widgets/OTPModal";

const Login = () => {
    const [otpReady, setOtpReady] = useState(false);

    return (
        <Flex width="100vw" height="100vh">
            {/* Left Image */}
            <Image src="http://placehold.jp/1000x1024.png" />
            {/* Form */}
            <Box mx="auto" my="auto" width="35%" py={10} px={16}>
                <Heading fontSize={24} mb={3} textAlign="center">
                    Log In To Shelter
                </Heading>
                <Text color="gray.400" fontWeight="medium" mb={2}>
                    Please enter your email, a code will be sent to your email to continue
                    with login
                </Text>
                <Box as="form">
                    <FormControl sx={{ width: "100%" }}>
                        <FormLabel mb={3} color="gray.500">
                            Email Address
                        </FormLabel>
                        <Input

                            type="email"
                            size="lg"
                            placeholder="user@example.com"
                            mb={8}
                        />
                    </FormControl>
                    <Button onClick={() => setOtpReady(!otpReady)} size="lg" isFullWidth>
                        Continue
                    </Button>

                    <Divider />
                </Box>
            </Box>
            <OtpModal
                isOpen={otpReady}
                onClose={() => setOtpReady(!otpReady)}
                onOpen={() => setOtpReady(!otpReady)}
                isCentered
            >
                <ModalHeader color='brand.primary'>Enter Verification Code</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx='auto' mb={10} >
                    <Text textAlign='center' fontWeight='medium' fontSize={18} color='gray.400' mb={4}>We sent a code to user@example.com</Text>
                    <PinInput variant="flushed" otp size="lg" >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                    <Box mt={4} display="flex" justifyContent='center'>
                        <Text fontWeight="medium" >
                            Didn't get the code?
                            <Box as='span' pl={3} color="brand.primary" fontWeight="medium">
                                Resend
                            </Box>
                        </Text>
                    </Box>
                </ModalBody>


            </OtpModal>
        </Flex >
    );
};

export default Login;
