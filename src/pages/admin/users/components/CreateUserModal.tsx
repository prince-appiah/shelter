import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  RadioGroup,
} from "@chakra-ui/react";
import Button from "components/Button";
import ImageRadio from "components/ImageRadio";
import Input from "components/Input";
import { ModalContext } from "contexts/modalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import { useContext, useRef } from "react";
import { createUserAction } from "redux/users/asyncActions";
import { IUser } from "typings";
import * as Yup from "yup";

type Props = {};

const CreateUserModal = (props: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

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

  const initialValues: Omit<IUser, "_id"> = {
    firstname: "",
    lastname: "",
    email: "",
    userType: "",
  };

  const handleCreateUser = async (
    values: Omit<IUser, "_id">,
    helper: FormikHelpers<Omit<IUser, "_id">>
  ) => {
    try {
      helper.setSubmitting(true);
      await dispatch(createUserAction(values));
      helper.setSubmitting(false);
      formRef.current.reset();
      handleOpen(false);
      handleView(null);
    } catch (error) {
      console.log("🚀 ~ error", error);
      helper.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    userType: Yup.string()
      .oneOf(["user", "host"])
      .required("User type is required"),
  });

  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Create User</Heading>

      <Flex direction="column">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreateUser}
        >
          {({
            handleBlur,
            handleChange,
            handleReset,
            values,
            dirty,
            isSubmitting,
            touched,
            errors,
          }: FormikProps<Omit<IUser, "_id">>) => (
            <Form ref={formRef}>
              <Box w="full" py={6}>
                <Input
                  name="firstname"
                  label="First Name"
                  placeholder="Eg. John"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Input
                  name="lastname"
                  label="Last Name"
                  placeholder="Eg. Washington"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Input
                  name="email"
                  label="Email Address"
                  placeholder="Eg. user@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {/* TODO: fix component below */}
                <FormControl
                  sx={{ width: "100%", pb: 6 }}
                  isInvalid={touched && !!errors.userType}
                >
                  <FormLabel pb={3} color="gray.500">
                    Select User Role
                  </FormLabel>
                  <HStack justifyContent="space-around">
                    <RadioGroup
                      name="userType"
                      value={values.userType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      //   onChange={(val) => {
                      //     console.log("🚀 ~ val", val);
                      //   }}
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

                <Button
                  onClick={handleReset}
                  disabled={!dirty}
                  variant="outline"
                  width="full"
                  mt={4}
                >
                  Clear Form
                </Button>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={!dirty}
                  width="full"
                  mt={3}
                >
                  Create User
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default CreateUserModal;
