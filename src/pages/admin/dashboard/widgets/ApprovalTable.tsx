import { Box, Heading, TableHeadProps, Tbody, Td, Tr } from "@chakra-ui/react";
import useTable from "hooks/useTable";

const headCells: TableHeadProps[] = [
  { id: "id", title: "S/N" },
  { id: "name", title: "Name" },
  { id: "type", title: "Property Type" },
];

const records = [
  { id: 1, name: "Listing 1", type: "House" },
  { id: 2, name: "Listing 2", type: "Apartment" },
  { id: 3, name: "Listing 3", type: "Studio" },
  { id: 4, name: "Listing 4", type: "Condo" },
  { id: 5, name: "Listing 5", type: "House" },
];

const ApprovalTable = () => {
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
        Pending Approvals
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
              <Td>{item.name}</Td>
              <Td>{item.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </TContainer>
    </Box>
  );
};

export default ApprovalTable;
