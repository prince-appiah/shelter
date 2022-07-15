import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  TableHeadProps,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import UserModal from "components/Modal";
import { ModalContext } from "contexts/modalContext";
import { useAppDispatch, useUsersState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect } from "react";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { fetchUsersAction } from "redux/users/asyncActions";
import { capitalizeFirstLetter } from "shared/strings";
import { IUser } from "typings";
import CreateListingModal from "../listings/components/CreateListingModal";
import CreateUserModal from "./components/CreateUserModal";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "lastname", title: "Last Name" },
  { id: "firstname", title: "First Name" },
  { id: "email", title: "Email Address" },
  { id: "role", title: "Role" },
];

const Users = (props: Props) => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const { users, status } = useUsersState();
  const dispatch = useAppDispatch();
  const { TContainer, TableHead, results } = useTable(users, headCells);

  useEffect(() => {
    const fetchUsers = () => dispatch(fetchUsersAction());
    fetchUsers();

    return () => {
      store.dispatch(setStatus("idle"));
    };
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Center height="100vh">
        <Loader />
      </Center>
    );
  }

  return (
    <Flex direction="column" my={6} px={{ base: 2, md: 4 }}>
      <Box
        p={4}
        borderWidth="thin"
        bg="white"
        borderColor="gray.100"
        rounded="md"
      >
        <Flex align="center" justify="space-between" mb={8}>
          <Heading fontSize={20}>Users</Heading>

          <Button
            onClick={() => {
              handleOpen(!open);
              handleView("create-user");
            }}
            leftIcon={<AddIcon />}
          >
            Create User
          </Button>
        </Flex>

        <TContainer>
          <TableHead />
          <Tbody>
            {results?.length > 0 &&
              results?.map((item: IUser, idx: number) => (
                <Tr
                  key={item._id}
                  cursor="pointer"
                  textColor="gray.500"
                  sx={{ _hover: { bgColor: "gray.50" } }}
                  onClick={() => {
                    handleOpen(!open);
                    handleView("edit-property-type");
                    // setSelectedType(item);
                  }}
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item.firstname}</Td>
                  <Td>{item.lastname}</Td>
                  <Td>{item.email}</Td>
                  <Td>{capitalizeFirstLetter(item.userType)}</Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Create/Edit User Modal */}
      <UserModal isOpen={open} onClose={() => handleOpen(!open)}>
        {view === "create-user" && <CreateUserModal />}
      </UserModal>
    </Flex>
  );
};

export default Users;
