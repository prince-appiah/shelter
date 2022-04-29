import { AddIcon, PlusSquareIcon } from "@chakra-ui/icons";
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
import { ModalContext } from "contexts/modalContext";
import AmenityModal from "components/Modal";
import useTable from "hooks/useTable";
import React, { useContext } from "react";
import CreateAmenity from "./CreateAmenity";
import EditAmenity from "./EditAmenity";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "name", title: "Name" },
  { id: "icon", title: "Icon" },
];

const records = [
  { id: 1, name: "Air Conditioner", icon: "" },
  { id: 2, name: "Barbecue", icon: "" },
  { id: 3, name: "Swimming Pool", icon: "" },
  { id: 4, name: "Parking Space", icon: "" },
];

const Amenities = (props: Props) => {
  const { TContainer, TableHead, results } = useTable(records, headCells);
  const { open, handleOpen, handleView, view } = useContext(ModalContext);

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
            {results?.map((item) => (
              <Tr
                key={item.id}
                cursor="pointer"
                textColor="gray.500"
                sx={{ _hover: { bgColor: "gray.50" } }}
                onClick={() => {
                  handleOpen(!open);
                  handleView("edit-amenity");
                }}
              >
                <Td>{item.id}</Td>
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
        {view === "edit-amenity" && <EditAmenity />}
      </AmenityModal>
    </Flex>
  );
};

export default Amenities;
