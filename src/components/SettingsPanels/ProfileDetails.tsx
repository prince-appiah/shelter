import { Flex, Heading, Text } from "@chakra-ui/layout";
import { roles } from "config/constants/vars";
import { IDecodedUser } from "typings";
import CustomerProfile from "./profiles/CustomerProfile";
import HostProfile from "./profiles/HostProfile";

interface Props {
  user: IDecodedUser;
}

const ProfileDetails = ({ user }: Props) => {
  console.log("new profile details rendering");

  return (
    <Flex direction="column">
      <Heading fontSize={18}>Profile Information</Heading>
      <Text color="gray" fontSize={14}>
        Customize your profile
      </Text>

      <Flex direction="column" bg="white" p={5} mt={6} rounded="lg">
        {/* check user roles and render their profiles */}
        {user.userType === roles.host && <HostProfile />}
        {user.userType === roles.customer && <CustomerProfile />}
      </Flex>
    </Flex>
  );
};

export default ProfileDetails;
