import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import Select from "components/Select";
import Textarea from "components/Textarea";
import { ModalContext } from "contexts/modalContext";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import { nanoid } from "nanoid";
import { useContext, useRef, useState } from "react";
import { createListingAction } from "redux/global/asyncActions";
import { IAmenity, IHost, IProperty, IPropertyType } from "typings";
import * as Yup from "yup";
import Uploader from "./Uploader";

type Props = {
  hosts: IHost[];
  amenities: IAmenity[];
  roomTypes: IPropertyType[];
};

const CreateListingModal = ({ hosts, amenities, roomTypes }: Props) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { handleOpen, handleView } = useContext(ModalContext);
  // const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);
  const toast = useToast();

  const initialValues: Omit<IProperty, "_id"> = {
    name: "",
    description: "",
    referenceNo: "",
    location: "",
    price: "",
    stayPeriod: "",
    roomType: "",
    owner: "",
    amenities: [],
    images: [],
    numOfBedrooms: 0,
    numOfBathrooms: 0,
  };

  const handleImageUpload = (ev, setFieldValue) => {
    setUploadedFiles(new Array(...ev.target.files));
    setFieldValue("images", new Array(...ev.target.files));
  };

  const handleCreateListing = async (
    values: Omit<IProperty, "_id">,
    helper: FormikHelpers<Omit<IProperty, "_id">>
  ) => {
    try {
      helper.setSubmitting(true);
      const res = await dispatch(
        createListingAction({ ...values, referenceNo: nanoid() })
      ).unwrap();
      if (res.status === 201) {
        helper.setSubmitting(false);
        handleView(null);
        handleOpen(false);
        toast({
          status: "success",
          position: "top-right",
          variant: "left-accent",
          description: "Listing created",
        });
        return;
      }

      toast({
        status: "error",
        position: "top-right",
        variant: "left-accent",
        description: "Could not create listing",
      });
      return;
    } catch (error) {
      console.log("🚀 ~ error", error);
      helper.setSubmitting(false);
    }
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
            setFieldValue,
            isSubmitting,
          }: FormikProps<Omit<IProperty, "_id">>) => (
            <Form>
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

                <Select
                  name="roomType"
                  label="Select property type"
                  placeholder="Eg. apartment, studio, cottage, etc"
                  value={values.roomType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {roomTypes.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Select>

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

                {/* todo change this to dropdown  */}
                <Select
                  name="amenities"
                  label="Choose amenities for the listing"
                  helperText="Press and hold CMD (Mac) or Ctrl(Windows) to select multiple options"
                  value={values.amenities}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="30"
                  isMulti
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  {amenities.map((item) => (
                    <Box
                      as="option"
                      key={item._id}
                      value={item._id}
                      _selected={{ bg: "grey.100" }}
                      _checked={{ bg: "grey.100" }}
                      sx={{ p: 3 }}
                    >
                      {item.name}
                    </Box>
                  ))}
                </Select>

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

                <Uploader
                  handleImageUpload={(ev) =>
                    handleImageUpload(ev, setFieldValue)
                  }
                  inputRef={inputRef}
                  uploadedFiles={uploadedFiles}
                />

                {/* Owner */}
                <Select
                  name="owner"
                  label="Host"
                  placeholder="Choose a host"
                  value={values.owner}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {hosts.map((host, idx) => (
                    <Box
                      as="option"
                      key={host._id}
                      value={host._id}
                      sx={{ bg: "teal" }}
                      p={4}
                    >
                      {host.firstname} {host.lastname}
                    </Box>
                  ))}
                </Select>

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
