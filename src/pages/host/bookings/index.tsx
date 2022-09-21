import {
  Box,
  Flex,
  Heading,
  IconButton,
  TableHeadProps,
  Tag,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import { useHostState, useAppDispatch } from "hooks/reduxHooks";
import React, { useContext, useEffect, useState } from "react";
import { setStatus } from "redux/hosts/hostSlice";
import { fetchHostBookingsAction } from "redux/hosts/asyncActions";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { calculateMomentAgo, checkBookStatus } from "shared/strings";
import { IBooking } from "typings";
import useTable from "hooks/useTable";
import BookingModal from "components/Modal";
import { ModalContext } from "contexts/ModalContext";

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "property", title: "Property" },
  { id: "customer", title: "Customer Name" },
  { id: "status", title: "Status" },
  { id: "date", title: "Time Booked" },
  { id: "actions", title: "Actions" },
];

// todo navigate to new page or display modal with booking details
const HostBookings = () => {
  const { bookings } = useHostState();
  const { TContainer, TableHead, results } = useTable(bookings, headCells);
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchBookings = () => dispatch(fetchHostBookingsAction());
    const ac = new AbortController();
    fetchBookings();

    return () => {
      store.dispatch(setStatus("idle"));
      ac.abort();
    };
  }, [dispatch]);

  return (
    <Flex direction="column" my={6} px={{ base: 2 }}>
      <Box
        p={4}
        borderWidth="thin"
        bg="white"
        borderColor="gray.100"
        rounded="md"
      >
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
                    <Tag colorScheme={checkBookStatus(item)}>
                      {item?.status}
                    </Tag>
                  </Td>
                  <Td>{calculateMomentAgo(item?.createdAt)}</Td>
                  <Td>
                    <IconButton aria-label="Approve booking" />
                    <IconButton aria-label="Cancel booking" />
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
