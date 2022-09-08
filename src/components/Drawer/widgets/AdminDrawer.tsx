import { Box, Spacer } from "@chakra-ui/react";
import { adminSidebarRoutes } from "containers/Layout/AdminSidebar";
import { customerSidebarRoutes } from "containers/Layout/CustomerSidebar";
import React from "react";
import DrawerItem from "./DrawerItem";

type Props = {};

const AdminDrawer = (props: Props) => {
  return (
    <>
      {adminSidebarRoutes.map((route, idx) => (
        <Box key={route?.link}>
          <DrawerItem
            link={route?.link}
            icon={route?.icon}
            text={route?.text}
          />
          <Spacer height={4} />
        </Box>
      ))}
    </>
  );
};

export default AdminDrawer;
