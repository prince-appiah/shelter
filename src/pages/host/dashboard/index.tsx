import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import { useAppDispatch } from "hooks/reduxHooks";
import DashboardCard from "components/DashboardCard/DashboardCard";
import LoadingSkeleton from "pages/admin/dashboard/widgets/LoadingSkeleton";
import { useEffect, useState } from "react";
import { withProtected } from "shared/routes";
import { getHostDashboardReport } from "./helpers";

const HostDashboard = () => {
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      setDashboardLoading(true);
      const res = await getHostDashboardReport();
      console.log("🚀 ~ host dashboard reports", res);

      if (res.status === 200) {
        setDashboardData(res.data);
        setDashboardLoading(false);
        return;
      }
      setDashboardLoading(false);
    })();
  }, [dispatch]);

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
          <DashboardCard key={idx} loading={dashboardLoading} data={item} />
        ))}
      </Grid>
    </Flex>
  );
};

export default withProtected(HostDashboard, [roles.host]);
