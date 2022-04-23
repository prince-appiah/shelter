import { Grid } from "@chakra-ui/react";
import Container from "components/Container";
import useTable from "hooks/useTable";
import React from "react";
import ApprovalTable from "./widgets/ApprovalTable";
import DashboardCard from "./widgets/DashboardCard";
import ListingsTable from "./widgets/ListingsTable";

const Admin = () => {
  // const { }=useTable()

  return (
    <Container my={8}>
      <Grid
        gap={5}
        templateColumns="repeat(3,1fr)"
        mb={6}
        display={{ sm: "flex", md: "grid" }}
        // flexDirection={{ sm: "column" }}
        sx={{ flexDirection: { sm: "column", md: "row" } }}
      >
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </Grid>

      <Grid gap={8} templateColumns="repeat(2,1fr)">
        {/* Listings table */}
        <ListingsTable />
        {/* Approval table */}
        <ApprovalTable />
      </Grid>
    </Container>
  );
};

export default Admin;
