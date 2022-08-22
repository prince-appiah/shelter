import { Center, Flex, Grid, Text } from "@chakra-ui/react";
import Loader from "components/Loader";
import PropertyItem from "components/PropertyItem";
import { roles } from "config/constants/vars";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import { useEffect } from "react";
import {
  fetchListingsAction,
  fetchPropertyTypesAction,
} from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { IProperty } from "typings";

const CustomerDashboard = () => {
  const { listings, status, propertyTypes } = useGlobalState();
  const dispatch = useAppDispatch();

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
    const fetchRoomTypes = () => dispatch(fetchPropertyTypesAction());
    const ac = new AbortController();
    fetchRoomTypes();

    return () => {
      store.dispatch(setStatus("idle"));
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
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
        mb={6}
        display={{
          base: "flex",
          md: "grid",
        }}
        sx={{
          flexDirection: {
            base: "column",
            md: "row",
          },
        }}
      >
        {listings?.length > 0 ? (
          <>
            {listings?.map((item: IProperty) => (
              <PropertyItem key={item._id} property={item} />
            ))}
          </>
        ) : (
          <Center height="100vh">
            <Text>Sorry, no listings were found</Text>
          </Center>
        )}
      </Grid>
    </Flex>
  );
};

export default withProtected(CustomerDashboard, [roles.customer]);
