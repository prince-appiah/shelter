import {
  Box,
  Flex,
  FormLabel,
  Heading,
  HStack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import MultiSelect from "components/MultiSelect";
import Select from "components/Select";
import Textarea from "components/Textarea";
import { ModalContext } from "contexts/modalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import { useContext, useRef } from "react";
import { IProperty } from "typings";
import * as Yup from "yup";

type Props = {};

const CreateListingModal = (props: Props) => {
  const { handleOpen, handleView } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const initialValues: Omit<IProperty, "_id"> = {
    name: "",
    description: "",
    referenceNo: "",
    location: "",
    price: "",
    stayPeriod: "",
    roomType: null,
    owner: null,
    amenities: [],
    images: [],
    isApproved: false,
    numOfBedrooms: 0,
    numOfBathrooms: 0,
  };

  const handleCreateListing = async (
    values: Omit<IProperty, "_id">,
    helper: FormikHelpers<Omit<IProperty, "_id">>
  ) => {
    console.log("🚀 ~ values", values);
    // try {
    //   helper.setSubmitting(true);
    //   // await dispatch(addAmenitiesAction(values));

    //   helper.setSubmitting(false);
    //   formRef.current.reset();
    //   handleOpen(false);
    //   handleView(null);
    // } catch (error) {
    //   console.log("🚀 ~ error", error);
    //   helper.setSubmitting(false);
    // }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("A catchy name for the property will do"),
    stayPeriod: Yup.string()
      .oneOf(["night", "day", "week", "month", "year"])
      .required("Specify the stay period"),
    roomType: Yup.string().required("Specify the property type"),
    location: Yup.string().required("Location is required"),
    price: Yup.number().required("Price is required"),
    owner: Yup.string().required("A host must be selected"),
    amenities: Yup.array(
      Yup.string().required("Specify the amenities the listing has")
    ),
    description: Yup.string().required(
      "A little description of the property is required"
    ),
    images: Yup.array(Yup.string().required("Images are required")),
    numOfBathrooms: Yup.number().required("Number of bathrooms is required"),
    numOfBedrooms: Yup.number().required("Number of bedrooms is required"),
  });

  return (
    <Flex direction="column" p={8} maxH="2xl" overflowY="scroll">
      <Heading fontSize={18}>Create Listing</Heading>

      <Flex direction="column">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreateListing}
        >
          {({
            handleBlur,
            handleChange,
            handleReset,
            values,
            dirty,
            isSubmitting,
          }: FormikProps<Omit<IProperty, "_id">>) => (
            <Form ref={formRef}>
              <Box w="full" py={6}>
                <Input
                  name="name"
                  label="Property Name"
                  placeholder="A catchy title for the property"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Textarea
                  name="description"
                  label="Description"
                  placeholder="Let's know more about this property"
                  rows={4}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  name="price"
                  label="Price"
                  type="number"
                  placeholder="Eg. 45.99"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Input
                  name="location"
                  label="Location/Address"
                  placeholder="Eg. 123 Apple St, East Legon. Adjiringanor"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Select
                  name="stayPeriod"
                  label="Stay Period"
                  placeholder="Eg. per night, per week, per year etc"
                  value={values.stayPeriod}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="night">Night</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </Select>

                {/* todo change this to dropdown  */}
                {/* <MultiSelect
                  name="amenities"
                  label="Amenities"
                  options={[
                    { name: "One", value: "one" },
                    { name: "Two", value: "two" },
                    { name: "OThree", value: "three" },
                    { name: "OFFne", value: "four" },
                  ]}
                  value={values.amenities}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  multiple
                >
                  <option value="barbecue">Barbecue</option>
                  <option value="bar">Bar</option>
                  <option value="pool">Swimming Pool</option>
                  <option value="parkingLot">Parking Lot</option>
                </MultiSelect> */}

                <Input
                  name="numOfBathrooms"
                  label="Number of Bathrooms"
                  type="number"
                  value={values.numOfBathrooms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  name="numOfBedrooms"
                  label="Number of Bedrooms"
                  type="number"
                  value={values.numOfBedrooms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Input
                  name="images"
                  label="Upload Photos"
                  value={values.images}
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
                  Add Listing
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default CreateListingModal;
