import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  TableHeadProps,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import ListingModal from "components/Modal";
import { getAdminListingDetailsRoute } from "config/constants/routes";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect } from "react";
import { AiFillEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  deleteListingAction,
  fetchAmenitiesAction,
  fetchHostsAction,
  fetchListingsAction,
  fetchPropertyTypesAction,
} from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { IProperty } from "typings";
import CreateListingModal from "./widgets/CreateListingModal";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "propertyName", title: "Name" },
  { id: "host", title: "Host" },
  { id: "location", title: "Location" },
  { id: "isApproved", title: "Status" },
  { id: "actions", title: "Actions" },
];

const AdminListings = (props: Props) => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const { listings, status, hosts, amenities, propertyTypes } =
    useGlobalState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { TContainer, TableHead, results } = useTable(listings, headCells);

  // todo load all hosts to be used in create listing modal
  useEffect(() => {
    const fetchListings = () => dispatch(fetchListingsAction());
    const ac = new AbortController();
    fetchListings();

    return () => {
      store.dispatch(setStatus("idle"));
      ac.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchUsers = () => dispatch(fetchHostsAction());
    const ac = new AbortController();
    fetchUsers();

    return () => {
      store.dispatch(setStatus("idle"));
      ac.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchAmenities = () => dispatch(fetchAmenitiesAction());
    const ac = new AbortController();
    fetchAmenities();

    return () => {
      store.dispatch(setStatus("idle"));
      ac.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchRoomTypes = () => dispatch(fetchPropertyTypesAction());
    const ac = new AbortController();
    fetchRoomTypes();

    return () => {
      store.dispatch(setStatus("idle"));
      ac.abort();
    };
  }, [dispatch]);

  const handleDeleteListing = async (id) => {
    const res = await dispatch(
      deleteListingAction({ property_id: id })
    ).unwrap();

    if (res.status === 200) {
      toast({
        status: "success",
        position: "top-right",
        variant: "left-accent",
        description: "Listing has been deleted",
      });
      return;
    }
    toast({
      status: "error",
      position: "top-right",
      variant: "left-accent",
      description: "Could not delete listing",
    });
    return;
  };

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
          <Heading fontSize={20}>Listings ({listings.length})</Heading>

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
                <Tr
                  key={item._id}
                  cursor="pointer"
                  textColor="gray.500"
                  sx={{ _hover: { bgColor: "gray.50" } }}
                  // onClick={() =>
                  //   navigate(getAdminListingDetailsRoute(item._id))
                  // }
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item?.name}</Td>
                  <Td>
                    <Flex align="center">
                      <Avatar src={item?.owner?.profilePicture} size="xs" />
                      <Text ml={2}>
                        {item?.owner?.firstname} {item?.owner?.lastname}
                      </Text>
                    </Flex>
                  </Td>
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
                        onClick={() =>
                          navigate(getAdminListingDetailsRoute(item._id))
                        }
                      />
                      <IconButton
                        variant="outline"
                        aria-label="Edit Listing"
                        icon={<AiOutlineEdit />}
                        onClick={() => {
                          console.log("clicked");
                          // handleOpen(!open);
                          // handleView("edit-user");
                          // setSelectedUser(item);
                        }}
                      />
                      <IconButton
                        variant="outline"
                        aria-label="Delete Listing"
                        color="red"
                        icon={<AiOutlineDelete />}
                        onClick={() => handleDeleteListing(item._id)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Create/Edit Listing Modal */}
      <ListingModal size="xl" isOpen={open} onClose={() => handleOpen(!open)}>
        {view === "create-listing" && (
          <CreateListingModal
            hosts={hosts}
            amenities={amenities}
            roomTypes={propertyTypes}
          />
        )}
      </ListingModal>
    </Flex>
  );
};

export default AdminListings;
