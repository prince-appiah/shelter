import { Flex, useToast } from "@chakra-ui/react";
import Loader from "components/Loader";
import { useAppDispatch, useAuthState, useGlobalState } from "hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBookingAction,
  cancelBookingAction,
} from "redux/customers/asyncActions";
import {
  approveListingAction,
  deleteListingAction,
  getPropertyDetailsAction,
} from "redux/global/asyncActions";
import CustomerApi from "services/customer.api";
import Details from "./components/Details";
import Summary from "./components/Summary";

const ListingDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedListing: listing, status, listings } = useGlobalState();
  const [approveLoading, setApproveLoading] = useState(false);
  const [bookLoading, setBookLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
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

  useEffect(() => {
    const checkBookedListing = async ({ property_id }) => {
      if (currentUser) {
        try {
          const response = await CustomerApi.checkBookedProperty({
            property_id,
          });
          if (response.data) {
            setIsBooked(true);
          }
        } catch (error) {
          console.log("🚀 ~ error", error);
        }
      }
      return;
    };

    checkBookedListing({ property_id: params.id });
  }, [params.id, currentUser]);

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

  const handleBooking = async ({ property_id }) => {
    setBookLoading(true);
    try {
      const response = await dispatch(addBookingAction(property_id));
      console.log("🚀 ~ response", response);
      window.location.reload();
      setBookLoading(false);
    } catch (error) {
      console.log("🚀 ~ error", error);
      setBookLoading(false);
    }
  };

  const handleBookCancellation = async ({ property_id }) => {
    setCancelLoading(true);
    try {
      await dispatch(cancelBookingAction(property_id));
      window.location.reload();
      setCancelLoading(false);
    } catch (error) {
      console.log("🚀 ~ error", error);
      setCancelLoading(false);
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
        handleBooking={handleBooking}
        bookLoading={bookLoading}
        cancelLoading={cancelLoading}
        isBooked={isBooked}
        handleBookCancellation={handleBookCancellation}
      />
    </Flex>
  );
};

export default ListingDetails;
