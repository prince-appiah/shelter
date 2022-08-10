import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { ModalContext } from "contexts/modalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import { useApiError } from "hooks/useApiError";
import React, { useContext, useRef } from "react";
import { addPropertyTypeAction } from "redux/global/asyncActions";
import { IPropertyType } from "typings";
import * as Yup from "yup";

type Props = {};

const CreatePropertyTypeModal = (props: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const { handleApiError, Notify, error } = useApiError();

  const initialValues: Omit<IPropertyType, "_id"> = { name: "", icon: "" };

  const handleCreatePropertyType = async (
    values: Omit<IPropertyType, "_id">,
    helper: FormikHelpers<Omit<IPropertyType, "_id">>
  ) => {
    try {
      helper.setSubmitting(true);
      await dispatch(addPropertyTypeAction(values));

      helper.setSubmitting(false);
      formRef.current.reset();
      handleOpen(false);
      handleView(null);
    } catch (error) {
      handleApiError(error);
      helper.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    icon: Yup.string().notRequired(),
  });

  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Create Property Type</Heading>
      <Flex direction="column">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreatePropertyType}
        >
          {({
            handleBlur,
            handleChange,
            handleReset,
            values,
            dirty,
            isSubmitting,
          }: FormikProps<Omit<IPropertyType, "_id">>) => (
            <Form ref={formRef}>
              {" "}
              {error && <Notify />}
              <Box w="full" py={6}>
                <Input
                  name="name"
                  placeholder="Enter name of property type"
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
                  Add Property Type
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default CreatePropertyTypeModal;
