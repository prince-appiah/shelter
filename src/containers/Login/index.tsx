import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { SIGNUP_ROUTE } from "config/constants/routes";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch, useAuthState } from "hooks/reduxHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOtpAction, loginAction } from "redux/auth/asyncActions";
import * as Yup from "yup";

type LoginForm = {
  email: string;
  otp: string;
};

const Login = () => {
  const [otpReady, setOtpReady] = useState(false);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { currentUser } = useAuthState();

  const symbolsArr = ["e", "E", "+", "-", "."];
  const initialValues = { email: "", otp: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    otp: Yup.string().required("OTP is required"),
  });

  const handleGetOtp = async (email: string) => {
    try {
      const res = await dispatch(getOtpAction({ email })).unwrap();
      if (res.status === 200) {
        setOtpReady(true);
      }
    } catch (error) {
      toast({
        title: "OTP Error",
        description: error?.msg || "Could not get OTP code",
        isClosable: true,
        status: "error",
        variant: "subtle",
        position: "top-right",
        duration: 10000,
      });
    }
  };

  const handleLogin = async (
    { email, otp }: LoginForm,
    helpers?: FormikHelpers<LoginForm>
  ) => {
    try {
      setIsOtpComplete(true);
      const res = await dispatch(
        loginAction({ email, otp: otp.toString() })
      ).unwrap();
      console.log("🚀 ~ res", res);

      if (res && res.status === 200) {
        setIsOtpComplete(false);

        // toast({
        //   title: "Login Success",
        //   description: "Your OTP has been verified",
        //   isClosable: true,
        //   status: "success",
        //   variant: "subtle",
        //   position: "top-right",
        //   duration: 10000,
        // });
        console.log("🚀 ~ currentUser", currentUser);

        // redirect users to their dashboard using their userType
        if (currentUser && currentUser.userType) {
          navigate(`/s/${currentUser.userType}/dashboard`, { replace: true });
        }
      }
    } catch (error) {
      console.log("🚀 ~ error", error);
      setIsOtpComplete(false);
      toast({
        title: "Login Error",
        description: error?.msg || "Could not log in, please try again",
        isClosable: true,
        status: "error",
        variant: "subtle",
        position: "top-right",
        duration: 10000,
      });
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      width="100vw"
      height="100vh"
    >
      {/* Left Image */}
      <Image
        src="http://placehold.jp/1000x1024.png"
        objectFit="cover"
        width={{ md: 500, lg: "50%" }}
        display={{ base: "none", lg: "unset" }}
      />
      {/* Form */}
      <Box
        mx="auto"
        my="auto"
        width={{ base: "100%", md: "75%", lg: "40%" }}
        py={10}
        px={16}
      >
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
          // onSubmit={isOtpComplete ? handleLogin : null}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            dirty,
            isSubmitting,
          }: FormikProps<LoginForm>) => (
            <Form onSubmit={handleSubmit}>
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="user@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {otpReady && (
                <>
                  <Input
                    label="OTP Code"
                    name="otp"
                    type="password"
                    placeholder="Verify Your Code"
                    max={6}
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={(e) =>
                      symbolsArr.includes(e.key) && e.preventDefault()
                    }
                  />
                  <Box my={4} display="flex" justifyContent="center">
                    <Text fontWeight="medium">
                      Didn't get the code?
                      <Box
                        as="span"
                        pl={3}
                        color="brand.primary"
                        fontWeight="medium"
                        cursor="pointer"
                        onClick={() => {
                          handleGetOtp(values.email);
                        }}
                      >
                        Resend
                      </Box>
                    </Text>
                  </Box>
                </>
              )}

              <Button
                onClick={
                  otpReady
                    ? () => handleLogin(values, null)
                    : () => handleGetOtp(values.email)
                }
                disabled={!dirty}
                isLoading={isSubmitting || isOtpComplete}
                size="lg"
                isFullWidth
              >
                {otpReady ? "Verify OTP" : "Continue"}
              </Button>

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
    </Flex>
  );
};

export default Login;
