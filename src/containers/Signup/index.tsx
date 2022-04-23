import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import Button from "components/Button";
import ImageRadio from "components/ImageRadio";
import Input from "components/Input";
import RadioGroup from "components/RadioGroup";
import { LOGIN_ROUTE } from "config/constants/routes";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { signupAction } from "redux/auth/asyncActions";
import * as Yup from "yup";

type SignupForm = {
  email: string;
  firstname: string;
  lastname: string;
  userType: "user" | "host";
};

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const accountOptions = [
    {
      title: "Customer",
      value: "user",
      icon: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      title: "Host",
      value: "host",
      icon: "https://randomuser.me/api/portraits/men/29.jpg",
    },
  ];
  // const { getRootProps } = useRadioGroup({
  //   name: "userType",
  //   defaultValue: "user",
  // });
  // const group = getRootProps();

  const initialValues = {
    firstname: "",
    lastname: "",
    userType: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    userType: Yup.string()
      .oneOf(["user", "host"])
      .required("User type is required"),
  });

  const handleSignup = async (
    values: SignupForm,
    _helpers: FormikHelpers<SignupForm>
  ) => {
    try {
      const res = await dispatch(signupAction(values)).unwrap();

      // if (res.status === 201) {
      if (res) {
        toast({
          title: "Account Created",
          description:
            "We have sent you a link to access your account. Please check your email",
          isClosable: true,
          status: "success",
          variant: "subtle",
          position: "top-right",
          duration: 10000,
        });
      } else {
        toast({
          title: "Signup Error",
          description: "User already exists",
          isClosable: true,
          status: "error",
          variant: "subtle",
          position: "top-right",
          duration: 10000,
        });
      }
    } catch (error) {
      toast({
        title: "Signup Error",
        description: "Oops, something went wrong. Don't worry it's our fault",
        isClosable: true,
        status: "error",
        variant: "subtle",
        position: "top-right",
        duration: 10000,
      });
    }
  };

  return (
    <Flex width="100vw" height="100vh">
      {/* Left Image */}
      <Image src="http://placehold.jp/1000x1024.png" />
      {/* Form */}
      <Box mx="auto" my="auto" width="35%" py={8} px={16}>
        <Heading fontSize={24} pb={5} textAlign="center">
          Join Shelter
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({
            handleSubmit,
            handleChange,
            touched,
            values,
            isSubmitting,
            dirty,
            errors,
          }: FormikProps<SignupForm>) => (
            <Form onSubmit={handleSubmit}>
              <FormControl
                sx={{ width: "100%", pb: 6 }}
                isInvalid={touched && !!errors.userType}
              >
                <FormLabel pb={3} color="gray.500">
                  Select Account Type
                </FormLabel>
                <HStack justifyContent="space-around">
                  <RadioGroup
                    name="userType"
                    value={values.userType}
                    onChange={handleChange}
                    mb={3}
                    display="flex"
                    gridColumnGap={2}
                  >
                    {accountOptions.map(({ title, value, icon }) => (
                      <ImageRadio key={value} value={value} image={icon}>
                        {title}
                      </ImageRadio>
                    ))}
                  </RadioGroup>
                </HStack>
                {errors.userType && touched ? (
                  <FormErrorMessage>{errors.userType}</FormErrorMessage>
                ) : null}
              </FormControl>

              <Input
                label="First Name"
                name="firstname"
                placeholder="John"
                value={values.firstname}
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                name="lastname"
                placeholder="Doe"
                value={values.lastname}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                label="Email Address"
                placeholder="user@example.com"
                value={values.email}
                onChange={handleChange}
              />

              <Button
                size="lg"
                type="submit"
                disabled={!dirty || isSubmitting}
                isLoading={isSubmitting}
                mt={8}
                isFullWidth
              >
                Create Account
              </Button>

              <Divider pb={4} />
              <Text color="gray.400" fontWeight="medium" textAlign="center">
                Already have an account?
                <Box
                  as="span"
                  onClick={() => navigate(LOGIN_ROUTE)}
                  _hover={{ cursor: "pointer", color: "blue.500" }}
                  fontWeight="semibold"
                  pl={3}
                  color="blue.600"
                >
                  Log In
                </Box>
              </Text>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Signup;
