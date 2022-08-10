import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import Button from "components/Button";
import { roles } from "config/constants/vars";
import { useAppDispatch } from "hooks/reduxHooks";
import { Dispatch, SetStateAction, useState } from "react";
import { BsCheckLg, BsPencilFill } from "react-icons/bs";
import { MdCancel, MdDelete } from "react-icons/md";
import { approveListingAction } from "redux/global/asyncActions";
import { IProperty, IUser } from "typings";
import ListingContact from "./Contact";

type SummaryProps = {
  listing: IProperty;
  currentUser: IUser;
  handleApproveListing: ({ isApproved, id }) => void;
  handleDeleteListing: ({ id }) => void;
  approveLoading: boolean;
};

const Summary = ({
  listing,
  currentUser,
  handleApproveListing,
  approveLoading,
  handleDeleteListing,
}: SummaryProps) => {
  return (
    <Flex
      direction="column"
      borderRadius={6}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      align="start"
      bg="white"
      height="max-content"
      width={{ base: "full", lg: "max-content" }}
      p={6}
    >
      <VStack align="start" width="full" spacing={-1}>
        <Text fontWeight={700} fontSize={20}>
          {listing?.name}
        </Text>
        <Text color="gray">{listing?.location}</Text>
      </VStack>
      <Text py={2} fontWeight={600}>
        {listing?.numOfBedrooms} bedrooms • {listing?.numOfBathrooms} bathrooms
      </Text>
      <VStack align="start" width="full">
        <Text fontSize={14} color="gray">
          Listing Price
        </Text>
        <Text fontWeight={700} fontSize={20}>
          $ {listing?.price}
          <Box as="span" color="grey" fontSize={18} display="inline-flex">
            /{listing?.stayPeriod}
          </Box>
        </Text>
      </VStack>
      {/* Divider */}
      <Divider my={4} />
      <VStack align="start" width="full">
        {/* render button sbased on user type  */}
        {currentUser.userType === roles.admin && (
          <>
            <Button
              isFullWidth
              bgColor="brand.primary"
              leftIcon={<BsPencilFill />}
              sx={{
                fontSize: 14,
                _hover: {
                  bgColor: "brand.primary",
                },
              }}
            >
              Update Listing
            </Button>
            <Button
              onClick={
                listing?.isApproved
                  ? () =>
                      handleApproveListing({
                        isApproved: "false",
                        id: listing?._id,
                      })
                  : () =>
                      handleApproveListing({
                        isApproved: "true",
                        id: listing?._id,
                      })
              }
              isLoading={approveLoading}
              isFullWidth
              variant="outline"
              bgColor="white"
              fontSize={14}
              color={listing?.isApproved ? "red" : "brand.primary"}
              border={listing?.isApproved ? "1px solid red" : "1px solid teal"}
              leftIcon={listing?.isApproved ? <MdCancel /> : <BsCheckLg />}
              sx={{
                _hover: {
                  bgColor: listing?.isApproved ? "red" : "brand.primary",
                  color: "white",
                  border: listing?.isApproved
                    ? "1px solid red"
                    : "1px solid teal",
                },
              }}
            >
              {listing?.isApproved ? "Disable Listing" : "Approve Listing"}
            </Button>
            <Button
              onClick={() =>
                handleDeleteListing({
                  id: listing?._id,
                })
              }
              loadingText="Please wait..."
              isFullWidth
              variant="outline"
              bgColor="white"
              fontSize={14}
              color="red"
              border="1px solid red"
              leftIcon={<MdDelete />}
              sx={{
                _hover: {
                  bgColor: "red",
                  color: "white",
                  border: "1px solid red",
                },
              }}
            >
              Delete Listing
            </Button>
          </>
        )}

        {currentUser.userType === roles.host && (
          <Button isFullWidth sx={{ fontSize: 14 }}>
            Edit Listing
          </Button>
        )}

        {currentUser.userType === roles.host && (
          <>
            {" "}
            <Text fontSize={14} fontWeight={600} color="gray">
              Tour this property - it's free, with no obligation
            </Text>
            <Button isFullWidth sx={{ fontSize: 14 }}>
              Schedule a Tour
            </Button>
          </>
        )}
      </VStack>
      {/* Property Owner */}
      <ListingContact listing={listing} />
    </Flex>
  );
};

export default Summary;
