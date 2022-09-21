import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import { useAppDispatch, useUsersState } from "hooks/reduxHooks";
import React, { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { store } from "redux/store";
import { getUserDetailsAction } from "redux/users/asyncActions";
import { setSelectedUser, setStatus } from "redux/users/usersSlice";
import CustomerProfile from "./CustomerProfile";
import HostProfile from "./HostProfile";

type Props = {};

const UserDetails = (props: Props) => {
  const location = useLocation();
  const { selectedUser, status } = useUsersState();
  const query = new URLSearchParams(location.search);
  const user_id = query.get("user_id");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("🚀 ~ selectedUser", selectedUser);
  const isACustomer = selectedUser?.user?.userType === "customer";
  const isAHost = selectedUser?.user?.userType === "host";

  useEffect(() => {
    const getUserDetails = ({ user_id }) =>
      dispatch(getUserDetailsAction({ user_id }));
    const ac = new AbortController();

    getUserDetails({ user_id });

    return () => {
      store.dispatch(setSelectedUser());
      ac.abort();
    };
  }, [dispatch, user_id]);

  if (status === "error") {
    navigate(-1);
  }

  return (
    <Flex my={6} px={{ base: 2, md: 4 }}>
      <Box
        p={4}
        borderWidth="thin"
        bg="white"
        borderColor="gray.100"
        rounded="md"
        width="full"
      >
        <Button
          variant="ghost"
          leftIcon={<AiOutlineArrowLeft />}
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>

        <Flex mt={5} direction="column" width="full">
          {isACustomer && <CustomerProfile />}
          {isAHost && <HostProfile />}
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserDetails;
