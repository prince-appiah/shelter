import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";
import Button from "components/Button";
import Input from "components/Input";
import { SIGNUP_ROUTE } from "config/constants/routes";
import { useAppDispatch } from "hooks/reduxHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpModal from "./widgets/OTPModal";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";

type LoginForm = {
  email: string;
  otp: string;
};

const Login = () => {
  const [otpReady, setOtpReady] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = { email: "", otp: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    otp: Yup.string().required("OTP is required"),
  });

  const handleLogin = async (
    values: LoginForm,
    helpers: FormikHelpers<LoginForm>
  ) => {};

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({
            handleSubmit,
            handleChange,
            touched,
            values,
            dirty,
            setFieldValue,
            isSubmitting,
            errors,
          }: FormikProps<LoginForm>) => (
            <Form onSubmit={handleSubmit}>
              <FormControl
                sx={{ width: "100%" }}
                isInvalid={touched && !!errors.email}
              >
                <FormLabel mb={3} color="gray.500">
                  Email Address
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormControl>

              <Button onClick={() => setOtpReady(true)} size="lg" isFullWidth>
                Continue
              </Button>

              <OtpModal
                isOpen={otpReady && values.email.length > 0}
                onClose={() => setOtpReady(!otpReady)}
                onOpen={() => setOtpReady(!otpReady)}
                isCentered
              >
                <ModalHeader color="brand.primary">
                  Enter Verification Code
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody mx="auto" mb={10}>
                  <Text
                    textAlign="center"
                    fontWeight="medium"
                    fontSize={18}
                    color="gray.400"
                    mb={4}
                  >
                    We sent a code to {values.email}
                  </Text>
                  <PinInput
                    variant="flushed"
                    type="number"
                    onChange={handleChange}
                    onComplete={(val) => setFieldValue("otp", val)}
                    otp
                    size="lg"
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                  <Box mt={4} display="flex" justifyContent="center">
                    <Text fontWeight="medium">
                      Didn't get the code?
                      <Box
                        as="span"
                        pl={3}
                        color="brand.primary"
                        fontWeight="medium"
                      >
                        Resend
                      </Box>
                    </Text>
                  </Box>
                </ModalBody>
              </OtpModal>

              <Divider my={5} />
              <Text color="gray.400" fontWeight="medium" textAlign="center">
                Don't have an account?
                <Box
                  as="span"
                  onClick={() => navigate(SIGNUP_ROUTE)}
                  _hover={{ cursor: "pointer", color: "blue.500" }}
                  fontWeight="semibold"
                  pl={3}
                  color="blue.600"
                >
                  Sign up
                </Box>
              </Text>
            </Form>
          )}
        </Formik>
      </Box>

      {/* <OtpModal
        isOpen={otpReady}
        onClose={() => setOtpReady(!otpReady)}
        onOpen={() => setOtpReady(!otpReady)}
        isCentered
      >
        <ModalHeader color="brand.primary">Enter Verification Code</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx="auto" mb={10}>
          <Text
            textAlign="center"
            fontWeight="medium"
            fontSize={18}
            color="gray.400"
            mb={4}
          >
            We sent a code to user@example.com
          </Text>
          <PinInput variant="flushed" otp size="lg">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <Box mt={4} display="flex" justifyContent="center">
            <Text fontWeight="medium">
              Didn't get the code?
              <Box as="span" pl={3} color="brand.primary" fontWeight="medium">
                Resend
              </Box>
            </Text>
          </Box>
        </ModalBody>
      </OtpModal> */}
    </Flex>
  );
};

export default Login;
