import { Box, Heading, TableHeadProps, Tbody, Td, Tr } from "@chakra-ui/react";
import useTable from "hooks/useTable";
import { IProperty } from "typings";

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "owner", title: "Owner" },
  { id: "type", title: "Property Type" },
  { id: "date", title: "Created On" },
];

interface ListingsTableProps {
  listings: IProperty[];
}

const ListingsTable = ({ listings }: ListingsTableProps) => {
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
        Listings
      </Heading>

      <TContainer>
        <TableHead />
        <Tbody>
          {results?.map((item: IProperty, idx: string) => (
            <Tr
              key={item._id}
              cursor="pointer"
              textColor="gray.500"
              sx={{ _hover: { bgColor: "gray.50" } }}
            >
              <Td>{idx + 1}</Td>
              <Td>
                {item?.owner?.firstname} {item?.owner?.lastname}
              </Td>
              <Td>{item?.roomType?.name}</Td>
              <Td>{item?.createdAt.split("T")[0]}</Td>
            </Tr>
          ))}
        </Tbody>
      </TContainer>
    </Box>
  );
};

export default ListingsTable;
