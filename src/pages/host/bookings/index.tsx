import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, IconButton, TableHeadProps, Tag, Tbody, Td, Tr } from "@chakra-ui/react";
import Loader from "components/Loader";
import { getHostBookingDetailsRoute } from "config/constants/routes";
import { roles } from "config/constants/vars";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useHostState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { fetchHostBookingsAction } from "redux/hosts/asyncActions";
import { setStatus } from "redux/hosts/hostSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { calculateMomentAgo, checkBookStatus } from "shared/strings";
import { IBooking } from "typings";

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "property", title: "Property" },
  { id: "customer", title: "Customer Name" },
  { id: "status", title: "Status" },
  { id: "date", title: "Time Booked" },
  { id: "actions", title: "Actions" },
];

const HostBookings = () => {
  const { bookings, status } = useHostState();
  const { TContainer, TableHead, results } = useTable(bookings, headCells);
  const { open, handleOpen, handleView } = useContext(ModalContext);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = () => dispatch(fetchHostBookingsAction());
    const ac = new AbortController();
    fetchBookings();

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
      <Box p={4} borderWidth="thin" bg="white" borderColor="gray.100" rounded="md">
        <Flex align="center" justify="space-between" mb={8}>
          <Heading fontSize={20}>Bookings ({bookings.length})</Heading>
        </Flex>

        <TContainer>
          <TableHead />
          <Tbody>
            {results?.length > 0 &&
              results?.map((item: IBooking, idx: number) => (
                <Tr
                  key={item._id}
                  cursor="pointer"
                  textColor="gray.500"
                  sx={{ _hover: { bgColor: "gray.50" } }}
                  onClick={() => {
                    handleOpen(!open);
                    handleView("view-booking");
                    setSelectedBooking(item);
                  }}
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item?.property?.name}</Td>
                  <Td>
                    {item?.customer?.firstname} {item?.customer?.lastname}
                  </Td>
                  <Td>
                    <Tag colorScheme={checkBookStatus(item)}>{item?.status}</Tag>
                  </Td>
                  <Td>{calculateMomentAgo(item?.createdAt)}</Td>
                  <Td>
                    <IconButton
                      aria-label="View booking"
                      variant="outline"
                      icon={<BsEyeFill />}
                      onClick={() => navigate(getHostBookingDetailsRoute(item._id))}
                    />
                    <IconButton
                      aria-label="Cancel booking"
                      variant="outline"
                      icon={<DeleteIcon />}
                      onClick={() => null}
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Booking modal */}
      {/* <BookingModal isOpen={open} onClose={() => handleOpen(!open)}>
        {view === "view-booking" && <BookingDetail booking={selectedBooking} />}
      </BookingModal> */}
    </Flex>
  );
};

export default withProtected(HostBookings, [roles.host]);
