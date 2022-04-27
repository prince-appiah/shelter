import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import ApprovalTable from "./widgets/ApprovalTable";
import DashboardCard from "./widgets/DashboardCard";
import ListingsTable from "./widgets/ListingsTable";

const Admin = () => {
  return (
    <Flex direction="column" my={6} px={{ base: 2 }}>
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        mb={6}
        display={{
          base: "flex",
          md: "grid",
        }}
        sx={{
          flexDirection: {
            base: "column",
            md: "row",
          },
        }}
      >
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </Grid>

      <Grid
        gap={8}
        templateColumns="repeat(2,1fr)"
        display={{ base: "flex", xl: "grid" }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        {/* Listings table */}
        <ListingsTable />
        {/* Approval table */}
        <ApprovalTable />
      </Grid>
    </Flex>
  );
};

export default Admin;
