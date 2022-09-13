/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  TableContainer,
  TableHeadProps,
  Thead,
  Tr,
  Th,
  Table,
} from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";
import { useState } from "react";

const useTable = (data, headCells) => {
  const pages = [10, 15, 20];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const handlePageChange = (ev, page) => setPage(page);

  const handleRowsPerChange = (ev) => {
    setRowsPerPage(+ev.target.value);
    setPage(0);
  };

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

  const results = data;
  // const results =
  //   data && data?.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const TPaginate = (props) => (
    <Pagination
      paginationProps={{ display: "flex" }}
      total={data?.length}
      defaultPage={page}
      defaultCurrent={page}
      // onChange={(currentPage,totalPages,pagesize,toal)=>{}}
      // onChange={handlePageChange}
      // pageSize={rowsPerPage}
      pageSizeOptions={pages}
      // setPageSize={handleRowsPerChange}
      current={page}
      // setCurrentPage={handlePageChange}
    />
  );

  return { TContainer, TableHead, results, TPaginate };
};

export default useTable;
