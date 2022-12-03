import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Divider, Flex, Grid, GridItem, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import Button from "components/Button";
import Input from "components/Input";
import { Form, Formik, FormikHelpers } from "formik";
import { BsTelephone } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdVerifiedUser } from "react-icons/md";
import { IDecodedUser, IUser } from "typings";
import * as Yup from "yup";

interface Props {
  user: IDecodedUser;
}

const PersonalDetails = ({ user }: Props) => {
  console.log("new personal dettings renderinh ");

  const details = [
    { icon: FiMail, title: "Email", body: user?.email },
    { icon: FaLocationArrow, title: "Location", body: user?.location ?? "-" },
    {
      icon: BsTelephone,
      title: "Phone",
      body: user?.phone ?? "No phone set",
    },
    {
      icon: MdVerifiedUser,
      title: "Account Status",
      body: user?.isVerified ? "Verified" : "Needs Verification",
    },
  ];

  const initialValues: IUser = {
    _id: user?._id,
    firstname: user?.firstname ?? "",
    lastname: user?.lastname ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().notRequired(),
    lastname: Yup.string().notRequired(),
    email: Yup.string().email("Enter a valid email").notRequired(),
    phone: Yup.string().notRequired(),
  });

  const handleEditProfile = (values: IUser, helper: FormikHelpers<IUser>) => {
    try {
      // todo check user role before updating profile
    } catch (error) {}
  };

  return (
    <Flex direction="column">
      <Heading fontSize={18}>Personal Details</Heading>
      <Text color="gray" fontSize={14}>
        Information about your profile
      </Text>

      <Flex direction="column" bg="white" p={5} mt={6} rounded="lg">
        {/* Avatar, user name, role, change picture button */}
        <Flex justify="space-between" mb={10} align="center">
          <HStack>
            <Avatar src={user?.profilePicture} size="lg" />
            <Flex direction="column">
              <Text fontWeight={600}>
                {user?.firstname} {user?.lastname}
              </Text>
              <Text fontSize={14} color="gray">
                Host
              </Text>
            </Flex>
          </HStack>

          <Button variant="outline">Change avatar</Button>
        </Flex>

        {/* grid showing email, location, phone, website */}
        <Grid gap={6} templateColumns={{ base: "repeat(2,1fr)" }}>
          {details?.map((item, idx) => (
            <DetailItem key={idx} item={item} />
          ))}
        </Grid>
        <Divider my={6} />
        {/* fields showing names, phone, email */}
        <Flex direction="column">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleEditProfile}>
            {({ handleChange, values, handleBlur, dirty, isSubmitting }) => (
              <Form>
                <Stack direction={{ md: "row" }}>
                  <Input
                    label="First Name"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Last Name"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Stack>
                <Stack direction={{ md: "row" }}>
                  <Input
                    label="Email"
                    name="email"
                    value={values.email}
                    isReadOnly
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={values.phone}
                    placeholder="+233 23 456 7890"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Stack>
                <Button type="submit" isLoading={isSubmitting} disabled={!dirty} mt={3}>
                  Save changes
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};

const DetailItem = ({ item }) => {
  return (
    <GridItem px={5} py={3} border="1px solid gray" rounded="lg">
      <HStack>
        <Flex align="center" justify="center" bg="brand.primary" p={4} rounded="xl" w={12} h={12}>
          <Icon as={item.icon} fontSize={20} color="white" />
        </Flex>

        <VStack align="start" spacing={0}>
          <Text fontSize={14} color="gray">
            {item.title}
          </Text>
          <Text fontWeight={600}>{item.body}</Text>
        </VStack>
      </HStack>
    </GridItem>
  );
};

export default PersonalDetails;
