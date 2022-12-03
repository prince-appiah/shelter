import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, HStack, IconButton, TableHeadProps, Tag, Tbody, Td, Tr } from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import { getHostListingDetailsRoute } from "config/constants/routes";
import { roles } from "config/constants/vars";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useHostState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect } from "react";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchHostListingsAction } from "redux/hosts/asyncActions";
import { setSelectedListing } from "redux/hosts/hostSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { IProperty } from "typings";

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "propertyName", title: "Name" },
  { id: "interestedParties", title: "No of bookings" },
  { id: "location", title: "Location" },
  { id: "isApproved", title: "Status" },
  { id: "actions", title: "Actions" },
];

const HostListings = () => {
  const { open, handleOpen, handleView } = useContext(ModalContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { listings, status } = useHostState();
  const { TContainer, TableHead, results } = useTable(listings, headCells);

  useEffect(() => {
    const fetchListings = () => dispatch(fetchHostListingsAction());
    const ac = new AbortController();
    fetchListings();

    return () => {
      store.dispatch(setSelectedListing());
      ac.abort();
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
    <Flex direction="column" my={6} px={{ base: 2 }}>
      <Box p={4} borderWidth="thin" bg="white" borderColor="gray.100" rounded="md" width="full">
        <Flex align="center" justify="space-between" mb={8}>
          <Heading fontSize={20}>Listings ({listings?.length})</Heading>

          <Button
            onClick={() => {
              handleOpen(!open);
              handleView("create-listing");
            }}
            leftIcon={<AddIcon />}
          >
            Add Listing
          </Button>
        </Flex>

        <TContainer>
          <TableHead />
          <Tbody>
            {results?.length > 0 &&
              results?.map((item: IProperty, idx: number) => (
                <Tr key={item._id} cursor="pointer" textColor="gray.500" sx={{ _hover: { bgColor: "gray.50" } }}>
                  <Td>{idx + 1}</Td>
                  <Td>{item?.name}</Td>
                  <Td>{item?.interestedParties ?? 0}</Td>
                  <Td>{item?.location}</Td>
                  <Td>
                    <Tag colorScheme={item?.isApproved ? "green" : "red"}>
                      {item?.isApproved ? "Approved" : "Pending"}
                    </Tag>
                  </Td>
                  <Td>
                    <HStack spacing={3}>
                      <IconButton
                        variant="outline"
                        aria-label="View Listing"
                        icon={<AiFillEye />}
                        onClick={() => navigate(getHostListingDetailsRoute(item._id))}
                      />
                      {/* <IconButton
                        variant="outline"
                        aria-label="Edit Listing"
                        icon={<AiOutlineEdit />}
                        onClick={() => {
                          console.log("clicked");
                          // handleOpen(!open);
                          // handleView("edit-user");
                          // setSelectedUser(item);
                        }}
                      /> */}
                      <IconButton
                        variant="outline"
                        aria-label="Delete Listing"
                        color="red"
                        icon={<AiOutlineDelete />}
                        // onClick={() => handleDeleteListing(item._id)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>
    </Flex>
  );
};

export default withProtected(HostListings, [roles.host]);
