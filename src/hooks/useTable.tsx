/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  TableContainer,
  TableHeadProps,
  Thead,
  Tr,
  Th,
  Table,
} from "@chakra-ui/react";
import { useState } from "react";

const useTable = (data, headCells) => {
  const pages = [10, 15, 20];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const TContainer = (props) => (
    <TableContainer>
      <Table>{props.children}</Table>
    </TableContainer>
  );

  const TableHead = (props?: TableHeadProps) => {
    const { ...rest } = props;

    return (
      <Thead {...rest}>
        <Tr>
          {headCells.map((cell) => (
            <Th key={cell.id}>{cell.title}</Th>
          ))}
        </Tr>
      </Thead>
    );
  };

  const results =
    data && data?.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return { TContainer, TableHead, results };
};

export default useTable;
