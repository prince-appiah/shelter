import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import { ModalContext } from "contexts/ModalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import React, { useContext, useRef } from "react";
import { editAmenitiesAction } from "redux/global/asyncActions";
import { IAmenity } from "typings";
import * as Yup from "yup";

type Props = {
  amenity: IAmenity;
};

const EditAmenity = ({ amenity }: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const initialValues: IAmenity = {
    _id: amenity._id,
    name: amenity.name,
    icon: amenity.icon ?? "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().notRequired(),
    icon: Yup.string().notRequired(),
  });

  const handleEditAmenity = async (
    values: IAmenity,
    helper: FormikHelpers<IAmenity>
  ) => {
    try {
      helper.setSubmitting(true);
      await dispatch(editAmenitiesAction(values));

      helper.setSubmitting(false);
      formRef.current.reset();
      handleOpen(false);
      handleView(null);
    } catch (error) {
      console.log("🚀 ~ error", error);
      helper.setSubmitting(false);
    }
  };

  return (
    <Flex direction="column" p={8}>
      <Heading fontSize={18}>Edit Amenity</Heading>
      <Flex direction="column">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleEditAmenity}
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

export default EditAmenity;
