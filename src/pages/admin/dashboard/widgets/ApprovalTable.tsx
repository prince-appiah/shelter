import { Box, Heading, TableHeadProps, Tbody, Td, Tr } from "@chakra-ui/react";
import useTable from "hooks/useTable";
import { IProperty } from "typings";

const headCells: TableHeadProps[] = [
  { id: "id", title: "S/N" },
  { id: "name", title: "Name" },
  { id: "type", title: "Property Type" },
];

interface ApprovalTableProps {
  listings: IProperty[];
}

const ApprovalTable = ({ listings }: ApprovalTableProps) => {
  const { TContainer, TableHead, results } = useTable(listings, headCells);

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
          {results?.map((item, idx) => (
            <Tr
              key={item._id}
              cursor="pointer"
              textColor="gray.500"
              sx={{ _hover: { bgColor: "gray.50" } }}
            >
              <Td>{idx + 1}</Td>
              <Td>{item?.name}</Td>
              <Td>{item?.roomType?.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </TContainer>
    </Box>
  );
};

export default ApprovalTable;
