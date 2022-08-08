import { AddIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import { getListingDetailsRoute } from "config/constants/routes";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
            <GridItem
              onClick={() => navigate(getListingDetailsRoute(item._id))}
              borderWidth={1}
              rounded="sm"
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                _hover: { shadow: "sm" },
              }}
              key={item._id}
            >
              <Image
                src={item.images[0]["url"]}
                alt={item.name}
                height={225}
                width={330}
                objectFit="cover"
                loading="lazy"
              />
              <Flex px={5} py={4} flexDirection="column">
                <Text fontWeight={600}>{item.name}</Text>
                <Text fontWeight={400} fontSize={14} color="GrayText">
                  {item.location}
                </Text>
                <Text pt={3} color="brand.primary" fontWeight={600}>
                  ${item.price}/{item.stayPeriod}
                </Text>
              </Flex>
            </GridItem>
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
