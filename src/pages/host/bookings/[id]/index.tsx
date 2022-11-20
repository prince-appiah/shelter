import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Button from "components/Button";
import Loader from "components/Loader";
import { roles } from "config/constants/vars";
import { useAppDispatch, useHostState } from "hooks/reduxHooks";
import React, { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchHostBookingDetailsAction } from "redux/hosts/asyncActions";
import { setSelectedBooking } from "redux/hosts/hostSlice";
import { store } from "redux/store";

import { withProtected } from "shared/routes";

type Props = {};

const BookingDetails = (props: Props) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { selectedBooking, status } = useHostState();
  console.log("🚀 ~ selectedBooking", selectedBooking);

  useEffect(() => {
    const getBookingDetails = ({ booking_id }) => dispatch(fetchHostBookingDetailsAction({ booking_id }));
    const ac = new AbortController();

    getBookingDetails({ booking_id: params.id });

    return () => {
      store.dispatch(setSelectedBooking());
      ac.abort();
    };
  }, [dispatch, params.id]);

  if (status === "error") {
    navigate(-1);
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (!selectedBooking) {
    navigate(-1);
    return null;
  }

  return (
    <Flex my={6} px={{ base: 2, md: 4 }}>
      <Box p={4} borderWidth="thin" bg="white" borderColor="gray.100" rounded="md" width="full">
        <Flex justify="space-between">
          <Button variant="ghost" leftIcon={<AiOutlineArrowLeft />} onClick={() => navigate(-1)}>
            Go back
          </Button>
          <HStack align="center">
            <Button variant="solid" leftIcon={<CheckIcon />} onClick={() => null}>
              Approve booking
            </Button>
          </HStack>
        </Flex>

        <Flex mt={5} direction="column">
          <Heading fontSize={20}>Booking Details</Heading>
          <VStack align="flex-start" mt={8}>
            <Flex alignItems="center">
              <Image
                src={selectedBooking.property.images[0].url}
                alt={selectedBooking.property.name}
                width={150}
                height={150}
                objectFit="cover"
                rounded="lg"
              />
              <VStack ml={4} align="start" spacing={4}>
                <Text fontWeight={600} fontSize={18}>
                  {selectedBooking.property.name}
                </Text>
                <Text color="gray">{selectedBooking.property.location}</Text>
                <Text color="brand.primary" fontSize={24} fontWeight={600}>
                  $ {selectedBooking.property.price}
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack align="flex-start" mt={8}>
            <Heading fontSize={18}>Customer Information</Heading>
            <Flex direction="column" width="full">
              <Flex justify="space-between" mb={3}>
                <Text color="gray">Name</Text>
                <Text fontWeight={600}>
                  {selectedBooking.customer.firstname} {selectedBooking.customer.lastname}
                </Text>
              </Flex>
              <Flex justify="space-between" mb={3}>
                <Text color="gray">Email address</Text>
                <Text fontWeight={600}>{selectedBooking.customer.email}</Text>
              </Flex>
              <Flex justify="space-between" mb={3}>
                <Text color="gray">Contact</Text>
                <Text
                  fontWeight={selectedBooking.customer.phone ? 600 : 400}
                  color={selectedBooking.customer.phone ? "unset" : "gray"}
                  fontStyle={selectedBooking.customer.phone ? "normal" : "italic"}
                >
                  {selectedBooking.customer.phone ?? "No contact to display"}
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default withProtected(BookingDetails, [roles.host]);
