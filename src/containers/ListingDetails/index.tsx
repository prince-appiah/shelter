import { Box, Flex } from "@chakra-ui/react";
import Loader from "components/Loader";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPropertyDetails } from "redux/global/asyncActions";
import Details from "./components/Details";
import Summary from "./components/Summary";

const ListingDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { selectedListing: listing, status } = useGlobalState();

  useEffect(() => {
    const getListingDetails = () =>
      dispatch(getPropertyDetails({ id: params.id }));
    getListingDetails();

    // return () => {
    // clear the selected property
    // }
  }, [params.id, dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Flex gridGap={3} py={8} justify="center">
      {/* Left side  */}
      <Details listing={listing} />
      {/* Right side  */}
      <Summary listing={listing} />
    </Flex>
  );
};

export default ListingDetails;
