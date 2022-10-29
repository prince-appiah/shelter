import { Flex, Stack, useToast } from "@chakra-ui/react";
import Button from "components/Button";
import Input from "components/Input";
import Textarea from "components/Textarea";
import { Form, Formik, FormikHelpers } from "formik";
import { useAppDispatch, useAuthState, useUsersState } from "hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetailsAction } from "redux/users/asyncActions";
import HostApi from "services/host.api";
import { IHost } from "typings";
import * as Yup from "yup";

type Props = {};

const CustomerProfile = (props: Props) => {
  const { currentUser } = useAuthState();
  const { selectedUser } = useUsersState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const { profile } = selectedUser || {};
  console.log("🚀 ~ profile", profile);

  useEffect(() => {
    const getUserDetails = ({ user_id }) => dispatch(getUserDetailsAction({ user_id }));

    const ac = new AbortController();

    getUserDetails({ user_id: currentUser._id });

    return () => {
      // store.dispatch(setSelectedUser());
      ac.abort();
    };
  }, [dispatch, currentUser]);

  const initialValues = {
    firstname: profile?.firstname ?? "",
    lastname: profile?.lastname ?? "",
    email: profile?.email ?? "",
    phone: profile?.phone ?? "",
    companyName: profile?.companyName ?? "",
    about: profile?.about ?? "",
    website: profile?.website ?? "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().notRequired(),
    lastname: Yup.string().notRequired(),
    email: Yup.string().email("Enter a valid email").notRequired(),
    phone: Yup.string().notRequired(),
    companyName: Yup.string().notRequired(),
    about: Yup.string().notRequired(),
    website: Yup.string().url("Enter a valid url").notRequired(),
  });

  const handleEditProfile = async (values: IHost, helper: FormikHelpers<IHost>) => {
    try {
      helper.setSubmitting(true);
      // edit customer profile
      const response = await HostApi.editHostProfile(values);

      if (response.status === 200) {
        // prompt user to reload page to accept changes
        // window.location.reload();
        dispatch(getUserDetailsAction({ user_id: currentUser._id }));
        toast({ title: "Profile updated", status: "success" });
        return;
      }

      toast({ title: "Profile update error", status: "error" });

      helper.setSubmitting(false);
    } catch (error) {
      console.log("🚀 ~ error", error);
      helper.setSubmitting(false);
    }
  };

  if (!profile) {
    navigate(-1);
  }

  return (
    <Flex direction="column">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleEditProfile}>
        {({ handleChange, values, handleBlur, dirty, isSubmitting }) => (
          <Form>
            <Stack direction={{ base: "column", md: "row" }} spacing={3} mb={{ base: 4, md: 0 }}>
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
            <Stack direction={{ base: "column", md: "row" }} spacing={3} mb={{ base: 4, md: 0 }}>
              <Input
                label="Company Name"
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                label="Website"
                name="website"
                type="url"
                value={values.website}
                placeholder="https://"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={3} mb={{ base: 4, md: 0 }}>
              <Input label="Email" name="email" value={values.email} isReadOnly />
              <Input
                label="Phone"
                name="phone"
                value={values.phone}
                placeholder="+233 23 456 7890"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={3} mb={{ base: 4, md: 0 }}>
              <Textarea
                label="About"
                name="about"
                rows={4}
                value={values.about}
                placeholder="Tell us about yourself/your business"
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
  );
};

export default CustomerProfile;
