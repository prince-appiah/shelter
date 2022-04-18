import { Box, Grid } from "@chakra-ui/react";
import Container from "components/Container";
import React from "react";
import DashboardCard from "./widgets/DashboardCard";

const Admin = () => {
  return (
    <Container my={8}>
      <Grid templateColumns="repeat(3,1fr)">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </Grid>
    </Container>
  );
};

export default Admin;
