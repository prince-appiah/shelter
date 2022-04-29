import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { Form, Formik, FormikProps } from "formik";
import React from "react";

type Props = {};

const CreateAmenity = (props: Props) => {
  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Create Amenity</Heading>
      <Flex direction="column">
        <Formik
          initialValues={{ name: "", icon: "" }}
          //   validationSchema={{}}
          onSubmit={() => {}}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            handleReset,
            values,
            dirty,
            isSubmitting,
          }: FormikProps<{ name: string; icon: string }>) => (
            <Form>
              <Box w="full" py={6}>
                <Input
                  name="name"
                  placeholder="Enter name of amenity"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  name="icon"
                  mt={3}
                  placeholder="Upload icon"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

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
                  Add Amenity
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default CreateAmenity;
