import { Center, Flex, Grid } from "@chakra-ui/react";
import Loader from "components/Loader";
import { roles } from "config/constants/vars";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchListingsAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { withProtected } from "shared/routes";
import { getDashboardReport } from "./helpers";
import ApprovalTable from "./widgets/ApprovalTable";
import DashboardCard from "./widgets/DashboardCard";
import ListingsTable from "./widgets/ListingsTable";

const Admin = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const { listings, status } = useGlobalState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pendingApprovals =
    listings.length > 0 ? listings.filter((item) => !item.isApproved) : [];

  useEffect(() => {
    const fetchListings = () => dispatch(fetchListingsAction());
    fetchListings();

    return () => {
      store.dispatch(setStatus("idle"));
    };
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      setDashboardLoading(true);
      const res = await getDashboardReport();

      if (res.status === 200) {
        setDashboardData(res.data);
        setDashboardLoading(false);
        return;
      }
      setDashboardLoading(false);
    })();
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Center height="100vh">
        <Loader />
      </Center>
    );
  }

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
        {dashboardData?.map((item, idx) => (
          <DashboardCard
            key={item.title}
            loading={dashboardLoading}
            data={item}
          />
        ))}
        {/* <DashboardCard loading={dashboardLoading} />
        <DashboardCard loading={dashboardLoading} /> */}
      </Grid>

      <Grid
        gap={8}
        templateColumns="repeat(2,1fr)"
        display={{ base: "flex", xl: "grid" }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        {/* Listings table */}
        <ListingsTable listings={listings} />
        {/* Approval table */}
        <ApprovalTable listings={pendingApprovals} />
      </Grid>
    </Flex>
  );
};

// export default Admin;
export default withProtected(Admin, [roles.admin]);
