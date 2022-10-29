import { AddIcon } from "@chakra-ui/icons";
import { Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";
import Loader from "components/Loader";
import PropertyItem from "components/PropertyItem";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import { fetchListingsAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { IProperty } from "typings";

const Listings = () => {
  const dispatch = useAppDispatch();
  const { listings, status } = useGlobalState();
  const navigate = useNavigate();

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
    <Flex direction="column" py={6} px={{ base: 4, md: 6 }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">
          Browse Listings
        </Heading>
        <Button size="lg" leftIcon={<AddIcon fontSize={14} />}>
          Add Listing
        </Button>
      </Flex>

      {listings?.length > 0 ? (
        <Grid
          mt={4}
          templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          gap={4}
        >
          {listings.map((item: IProperty) => (
            <PropertyItem key={item._id} property={item} />
          ))}
        </Grid>
      ) : (
        <Center height="100vh">
          <Text>Sorry, no listings were found</Text>
        </Center>
      )}
    </Flex>
  );
};

export default Listings;
