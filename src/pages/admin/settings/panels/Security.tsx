import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { Formik, Form } from "formik";
import React from "react";

interface Props {}

const Security = (props: Props) => {
  const initialValues = {};
  const validationSchema = {};
  const handleChangePassword = (values, helper) => {};

  return (
    <Flex direction="column">
      <Heading fontSize={18}>Security</Heading>
      <Text color="gray" fontSize={14}>
        Privacy and password settings
      </Text>

      <Flex direction="column" bg="white" p={5} mt={6} rounded="lg">
        <Flex direction="column">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleChangePassword}
          >
            {({ handleChange, values, handleBlur, dirty, isSubmitting }) => (
              <Form>
                <Input
                  label="Old Password"
                  name="oldPassword"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Stack direction={{ md: "row" }}>
                  <Input
                    label="New Password"
                    name="newPassword"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Confirm New Password"
                    name="confirmNewPassword"
                    value={values.email}
                    isReadOnly
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Stack>

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={!dirty}
                  mt={3}
                >
                  Change password
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Security;
