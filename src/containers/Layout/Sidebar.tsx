import { Box } from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import { useAuthState } from "hooks/reduxHooks";
import React from "react";
import AdminSidebar from "./AdminSidebar";
import CustomerSidebar from "./CustomerSidebar";
import HostSidebar from "./HostSidebar";

type Props = {};

const Sidebar = (props: Props) => {
  const { currentUser } = useAuthState();

  return (
    <Box
      py={8}
      px={{ md: 2, lg: 3 }}
      display={{ base: "none", md: "block" }}
      width={{ md: 78, lg: 260 }}
      height="100vh"
      position="sticky"
      left={0}
      top={0}
      bottom={0}
      bg="white"
      boxShadow="sm"
    >
      {currentUser?.userType === roles.admin && <AdminSidebar />}
      {currentUser?.userType === roles.customer && <CustomerSidebar />}
      {currentUser?.userType === roles.host && <HostSidebar />}
    </Box>
  );
};

export default Sidebar;
