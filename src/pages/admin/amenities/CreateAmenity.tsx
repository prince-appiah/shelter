import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { ModalContext } from "contexts/modalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import React, { useContext, useRef } from "react";
import { addAmenitiesAction } from "redux/global/asyncActions";
import { IAmenity } from "typings";
import * as Yup from "yup";

type Props = {};

const CreateAmenity = (props: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const initialValues: Omit<IAmenity, "_id"> = { name: "", icon: "" };

  const handleCreateAmenity = (
    values: Omit<IAmenity, "_id">,
    helper: FormikHelpers<Omit<IAmenity, "_id">>
  ) => {
    try {
      helper.setSubmitting(true);
      dispatch(addAmenitiesAction(values));

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
    name: Yup.string().required("Name is required"),
    icon: Yup.string().notRequired(),
  });

  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Create Amenity</Heading>
      <Flex direction="column">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreateAmenity}
        >
          {({
            handleBlur,
            handleChange,
            handleReset,
            values,
            dirty,
            isSubmitting,
          }: FormikProps<Omit<IAmenity, "_id">>) => (
            <Form ref={formRef}>
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
