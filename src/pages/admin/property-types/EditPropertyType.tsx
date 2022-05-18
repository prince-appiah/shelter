import { Box, Flex, Heading } from "@chakra-ui/react";
import { AxiosError } from "axios";
import Button from "components/Button";
import Input from "components/Input";
import { ModalContext } from "contexts/modalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import { useApiError } from "hooks/useApiError";
import React, { useContext, useRef } from "react";
import {
  editAmenitiesAction,
  editPropertyTypeAction,
} from "redux/global/asyncActions";
import { IPropertyType } from "typings";
import * as Yup from "yup";

type Props = {
  propertyType: IPropertyType;
};

const EditPropertyTypeModal = ({ propertyType }: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const { handleApiError, Notify, error } = useApiError();

  const initialValues: IPropertyType = {
    _id: propertyType._id,
    name: propertyType.name,
    icon: propertyType.icon ?? "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().notRequired(),
    icon: Yup.string().notRequired(),
  });

  const handleEditPropertyType = async (
    values: IPropertyType,
    helper: FormikHelpers<IPropertyType>
  ) => {
    try {
      helper.setSubmitting(true);
      await dispatch(editPropertyTypeAction(values)).unwrap();

      helper.setSubmitting(false);
      formRef.current.reset();
      handleOpen(false);
      handleView(null);
    } catch (error: any) {
      handleApiError(error);
      helper.setSubmitting(false);
    }
  };

  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Edit Property Type</Heading>

      <Flex direction="column">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleEditPropertyType}
        >
          {({
            handleBlur,
            handleChange,
            handleReset,
            values,
            dirty,
            isSubmitting,
          }: FormikProps<{ name: string; icon: string }>) => (
            <Form ref={formRef}>
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
                  Update
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default EditPropertyTypeModal;
