import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  TableHeadProps,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import Button from "components/Button";
import AmenityModal from "components/Modal";
import { ModalContext } from "contexts/modalContext";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import React, { useContext, useEffect, useState } from "react";
import { fetchAmenitiesAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { IAmenity } from "typings";
import CreateAmenity from "./components/CreateAmenity";
import EditAmenity from "./components/EditAmenity";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "name", title: "Name" },
  { id: "icon", title: "Icon" },
];

const Amenities = (props: Props) => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const { amenities } = useGlobalState();
  const { TContainer, TableHead, results } = useTable(amenities, headCells);
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAmenities = () => dispatch(fetchAmenitiesAction());
    fetchAmenities();

    return () => {
      store.dispatch(setStatus("idle"));
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
          <Heading fontSize={20}>Amenities</Heading>

          <Button
            onClick={() => {
              handleOpen(!open);
              handleView("create-amenity");
            }}
            leftIcon={<AddIcon />}
          >
            Create Amenity
          </Button>
        </Flex>

        <TContainer>
          <TableHead />
          <Tbody>
            {results?.length > 0 &&
              results?.map((item: IAmenity, idx: number) => (
                <Tr
                  key={item._id}
                  cursor="pointer"
                  textColor="gray.500"
                  sx={{ _hover: { bgColor: "gray.50" } }}
                  onClick={() => {
                    handleOpen(!open);
                    handleView("edit-amenity");
                    setSelectedAmenity(item);
                  }}
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.icon}</Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Create amenity modal */}
      <AmenityModal isOpen={open} onClose={() => handleOpen(!open)}>
        {/* dynamically render content based on view from the global state */}
        {view === "create-amenity" && <CreateAmenity />}
        {view === "edit-amenity" && <EditAmenity amenity={selectedAmenity} />}
      </AmenityModal>
    </Flex>
  );
};

export default Amenities;
