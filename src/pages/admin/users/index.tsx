import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  TableHeadProps,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import Button from "components/Button";
import UserModal from "components/Modal";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useUsersState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { deleteUserAction, fetchUsersAction } from "redux/users/asyncActions";
import { capitalizeFirstLetter } from "shared/strings";
import { IUser } from "typings";
import CreateUserModal from "./widgets/CreateUserModal";
import EditUserModal from "./widgets/EditUserModal";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "lastname", title: "Last Name" },
  { id: "firstname", title: "First Name" },
  { id: "email", title: "Email Address" },
  { id: "role", title: "Role" },
  { id: "actions", title: "Actions" },
];

const Users = (props: Props) => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const { users, status } = useUsersState();
  const [selectedUser, setSelectedUser] = useState(null);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { TContainer, TableHead, results } = useTable(users, headCells);

  useEffect(() => {
    const fetchUsers = () => dispatch(fetchUsersAction());
    fetchUsers();

    return () => {
      store.dispatch(setStatus("idle"));
    };
  }, [dispatch]);

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
          <Heading fontSize={20}>Users ({users.length})</Heading>

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
                  // onClick={() => {
                  //   handleOpen(!open);
                  //   handleView("edit-user");
                  //   setSelectedUser(item);
                  // }}
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item.firstname}</Td>
                  <Td>{item.lastname}</Td>
                  <Td>{item.email}</Td>
                  <Td>{capitalizeFirstLetter(item.userType)}</Td>
                  <Td>
                    <HStack spacing={3}>
                      <IconButton
                        variant="outline"
                        aria-label="Edit User"
                        icon={<AiOutlineEdit />}
                        onClick={() => {
                          handleOpen(!open);
                          handleView("edit-user");
                          setSelectedUser(item);
                        }}
                        zIndex={999}
                      />
                      <IconButton
                        variant="outline"
                        aria-label="Delete User"
                        color="red"
                        icon={<AiOutlineDelete />}
                        onClick={() => {
                          dispatch(deleteUserAction({ id: item._id }));
                          toast({
                            status: "success",
                            position: "top-right",
                            variant: "left-accent",
                            description: "User has been deleted",
                          });
                        }}
                        zIndex={999}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Create/Edit User Modal */}
      <UserModal isOpen={open} onClose={() => handleOpen(!open)}>
        {view === "create-user" && <CreateUserModal />}
        {view === "edit-user" && <EditUserModal user={selectedUser} />}
      </UserModal>
    </Flex>
  );
};

export default Users;
