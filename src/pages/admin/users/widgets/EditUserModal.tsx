import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Button from "components/Button";
import ImageRadio from "components/ImageRadio";
import Input from "components/Input";
import RadioGroup from "components/RadioGroup";
import { ModalContext } from "contexts/ModalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch, useUsersState } from "hooks/reduxHooks";
import { useContext, useRef, useState } from "react";
import { createUserAction, updateUserAction } from "redux/users/asyncActions";
import { IUser } from "typings";
import * as Yup from "yup";

type Props = { user: IUser };

const EditUserModal = ({ user }: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const { status } = useUsersState();

  const accountOptions = [
    {
      title: "Customer",
      value: "customer",
      icon: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      title: "Host",
      value: "host",
      icon: "https://randomuser.me/api/portraits/men/29.jpg",
    },
  ];

  const initialValues: Omit<IUser, "_id"> = {
    firstname: user.firstname ?? "",
    lastname: user.lastname ?? "",
    email: user.email ?? "",
    userType: user.userType ?? "",
  };

  const handleUpdateUser = async (
    values: IUser,
    helper: FormikHelpers<Omit<IUser, "_id">>
  ) => {
    try {
      helper.setSubmitting(true);
      await dispatch(updateUserAction({ ...values, _id: user._id }));
      helper.setSubmitting(false);

      if (status === "error") {
        setErrorMsg("An error occurred while updating user");
        return;
      }
      formRef.current.reset();
      handleOpen(false);
      handleView(null);
    } catch (error) {
      console.log("🚀 ~ error", error);
      helper.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().notRequired(),
    lastname: Yup.string().notRequired(),
    email: Yup.string().email("Enter a valid email").notRequired(),
    userType: Yup.string().oneOf(["customer", "host", "admin"]).notRequired(),
  });

  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Edit User</Heading>

      <Flex direction="column">
        <Formik
          onSubmit={handleUpdateUser}
          initialValues={initialValues}
          validationSchema={validationSchema}
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
                {errorMsg && (
                  <Alert status="error" my={2}>
                    <AlertIcon />
                    <AlertDescription>{errorMsg}</AlertDescription>
                  </Alert>
                )}
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
                  isDisabled
                  //   isReadOnly
                  placeholder="Eg. user@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

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
                  Edit User
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default EditUserModal;
