import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  TableHeadProps,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import ListingModal from "components/Modal";
import { getListingDetailsRoute } from "config/constants/routes";
import { ModalContext } from "contexts/modalContext";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchListingsAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { IProperty } from "typings";
import CreateListingModal from "./components/CreateListingModal";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "propertyName", title: "Name" },
  { id: "host", title: "Host" },
  { id: "location", title: "Location" },
  { id: "isApproved", title: "Status" },
];

const AdminListings = (props: Props) => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const { listings, status } = useGlobalState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { TContainer, TableHead, results } = useTable(listings, headCells);

  // todo load all hosts to be used in create listing modal
  useEffect(() => {
    const fetchListings = () => dispatch(fetchListingsAction());
    fetchListings();

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
          <Heading fontSize={20}>Listings</Heading>

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
                  onClick={() => navigate(getListingDetailsRoute(item._id))}
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
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Create/Edit Listing Modal */}
      <ListingModal size="xl" isOpen={open} onClose={() => handleOpen(!open)}>
        {view === "create-listing" && <CreateListingModal />}
      </ListingModal>
    </Flex>
  );
};

export default AdminListings;
