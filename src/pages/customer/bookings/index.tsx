import {
  Box,
  Flex,
  Heading,
  TableHeadProps,
  Tag,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import Button from "components/Button";
import BookingModal from "components/Modal";
import { roles } from "config/constants/vars";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useCustomersState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import React, { useContext, useEffect, useState } from "react";
import { fetchMyBookingsAction } from "redux/customers/asyncActions";
import { setStatus } from "redux/customers/customerSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { calculateMomentAgo } from "shared/strings";
import { IBooking } from "typings";
import BookingDetail from "./widgets/BookingDetail";

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "propertyName", title: "Property Name" },
  { id: "location", title: "Location" },
  { id: "status", title: "Status" },
  { id: "date", title: "Time Booked" },
];

const CustomerBookings = () => {
  const { bookings } = useCustomersState();
  console.log("🚀 ~ bookings", bookings);
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const dispatch = useAppDispatch();
  const { TContainer, TableHead, results } = useTable(bookings, headCells);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchMyBookings = () => dispatch(fetchMyBookingsAction());
    const ac = new AbortController();
    fetchMyBookings();

    return () => {
      store.dispatch(setStatus("idle"));
      ac.abort();
    };
  }, [dispatch]);

  return (
    <Flex direction="column" my={6} px={{ base: 2, md: 4 }}>
      <Box
        p={4}
        borderWidth="thin"
        bg="white"
        borderColor="gray.100"
        rounded="md"
      >
        <Flex align="center" justify="space-between" mb={8}>
          <Heading fontSize={20}>My Bookings ({bookings.length})</Heading>
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
                  <Td>{item?.property?.location}</Td>
                  <Td>
                    <Tag
                      colorScheme={
                        item?.status === "completed"
                          ? "green"
                          : item?.status === "cancelled"
                          ? "red"
                          : "blue"
                      }
                    >
                      {item?.status}
                    </Tag>
                  </Td>
                  <Td>{calculateMomentAgo(item?.createdAt)}</Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Booking modal */}
      <BookingModal isOpen={open} onClose={() => handleOpen(!open)}>
        {view === "view-booking" && <BookingDetail booking={selectedBooking} />}
      </BookingModal>
    </Flex>
  );
};

export default withProtected(CustomerBookings, [roles.customer]);
