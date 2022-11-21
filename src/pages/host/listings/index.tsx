import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "components/Button";
import { roles } from "config/constants/vars";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useHostState } from "hooks/reduxHooks";
import { useContext, useEffect } from "react";
import { fetchHostListingsAction } from "redux/hosts/asyncActions";
import { setSelectedListing } from "redux/hosts/hostSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";

const HostListings = () => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);

  const dispatch = useAppDispatch();
  const { listings } = useHostState();

  useEffect(() => {
    const fetchListings = () => dispatch(fetchHostListingsAction());
    const ac = new AbortController();
    fetchListings();

    return () => {
      store.dispatch(setSelectedListing());
      ac.abort();
    };
  }, [dispatch]);

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
      </Box>
    </Flex>
  );
};

export default withProtected(HostListings, [roles.host]);
