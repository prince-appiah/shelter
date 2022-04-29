import { Box, Heading, TableHeadProps, Tbody, Td, Tr } from "@chakra-ui/react";
import useTable from "hooks/useTable";

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "owner", title: "Owner" },
  { id: "type", title: "Property Type" },
  { id: "date", title: "Created On" },
];

const records = [
  { id: 1, owner: "John Snow", type: "Studio", date: "23/02/22" },
  { id: 2, owner: "John Snow", type: "Cottage", date: "23/02/22" },
  { id: 3, owner: "John Snow", type: "Apartment", date: "23/02/22" },
  { id: 4, owner: "John Snow", type: "Courthouse", date: "23/02/22" },
  { id: 5, owner: "John Snow", type: "House", date: "23/02/22" },
];

const ListingsTable = () => {
  const { TContainer, TableHead, results } = useTable(records, headCells);

  return (
    <Box
      p={4}
      borderWidth="thin"
      bg="white"
      borderColor="gray.100"
      rounded="md"
    >
      <Heading fontSize={20} mb={4}>
        Listings
      </Heading>

      <TContainer>
        <TableHead />
        <Tbody>
          {results?.map((item) => (
            <Tr
              key={item.id}
              cursor="pointer"
              textColor="gray.500"
              sx={{ _hover: { bgColor: "gray.50" } }}
            >
              <Td>{item.id}</Td>
              <Td>{item.owner}</Td>
              <Td>{item.type}</Td>
              <Td>{item.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </TContainer>
    </Box>
  );
};

export default ListingsTable;
