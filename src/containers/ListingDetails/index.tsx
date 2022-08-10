import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import Loader from "components/Loader";
import { useAppDispatch, useAuthState, useGlobalState } from "hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  approveListingAction,
  deleteListingAction,
  getPropertyDetailsAction,
} from "redux/global/asyncActions";
import Details from "./components/Details";
import Summary from "./components/Summary";

const ListingDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedListing: listing, status, listings } = useGlobalState();
  const [approveLoading, setApproveLoading] = useState(false);
  const { currentUser } = useAuthState();
  const toast = useToast();

  useEffect(() => {
    const getListingDetails = () =>
      dispatch(getPropertyDetailsAction({ id: params.id }));
    getListingDetails();

    // return () => {
    // clear the selected property
    // }
  }, [params.id, dispatch, listings]);

  const handleDeleteListing = async ({ id }) => {
    try {
      const res = await dispatch(
        deleteListingAction({ property_id: id })
      ).unwrap();

      if (res.status === 200) {
        // go back
        navigate(-1);
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
    } catch (error) {
      console.log("🚀 ~ error", error);
    }
  };

  const handleApproveListing = async ({ isApproved, id: property_id }) => {
    try {
      setApproveLoading(true);
      if (isApproved) {
        const response = await dispatch(
          approveListingAction({ property_id, isApproved })
        ).unwrap();
        console.log("🚀 ~ response", response);

        setApproveLoading(false);
        return;
      }

      const response = await dispatch(
        approveListingAction({ property_id, isApproved })
      ).unwrap();
      console.log("🚀 ~ response", response);
      setApproveLoading(false);
      return;
    } catch (error) {
      console.log("🚀 ~ error", error);
      setApproveLoading(false);
    }
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (!listing) {
    navigate(-1);
    return null;
  }

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gridGap={3}
      py={8}
      // px={{ base: 4, md: 6 }}
      justify="center"
    >
      {/* Left side  */}
      <Details listing={listing} />
      {/* Right side  */}
      <Summary
        listing={listing}
        currentUser={currentUser}
        handleApproveListing={handleApproveListing}
        handleDeleteListing={handleDeleteListing}
        approveLoading={approveLoading}
      />
    </Flex>
  );
};

export default ListingDetails;
