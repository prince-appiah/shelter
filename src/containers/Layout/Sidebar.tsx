import { Box } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "./AdminSidebar";

type Props = {};

const Sidebar = (props: Props) => {
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
      {/* dynamically render content based on user role in global state */}
      <AdminSidebar />
    </Box>
  );
};

export default Sidebar;
