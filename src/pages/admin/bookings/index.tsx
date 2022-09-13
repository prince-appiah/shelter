import {
  Flex,
  Box,
  Heading,
  Tbody,
  Tr,
  Td,
  Tag,
  TableHeadProps,
} from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import BookingDetail from "pages/customer/bookings/widgets/BookingDetail";
import React, { useEffect } from "react";
import { fetchBookingsAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { calculateMomentAgo } from "shared/strings";
import { IBooking } from "typings";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "propertyName", title: "Property Name" },
  { id: "customer", title: "Booked By" },
  { id: "status", title: "Status" },
  { id: "date", title: "Date Booked" },
];

const AdminBookings = (props: Props) => {
  const dispatch = useAppDispatch();
  const { bookings } = useGlobalState();
  const { TContainer, TableHead, results } = useTable(bookings, headCells);

  console.log("🚀 ~ bookings", bookings);

  useEffect(() => {
    const fetchBookings = () => dispatch(fetchBookingsAction());
    const ac = new AbortController();
    fetchBookings();

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
                    // handleOpen(!open);
                    // handleView("view-booking");
                    // setSelectedBooking(item);
                  }}
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item?.property?.name}</Td>
                  <Td>{item?.customer?.firstname}</Td>
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
      {/* <BookingModal isOpen={open} onClose={() => handleOpen(!open)}> */}
      {/* {view === "view-booking" && <BookingDetail booking={selectedBooking} />} */}
      {/* </BookingModal> */}
    </Flex>
  );
};

export default withProtected(AdminBookings, [roles.admin]);
