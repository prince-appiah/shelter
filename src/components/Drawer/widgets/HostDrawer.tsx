import { Box, Spacer } from "@chakra-ui/react";
import { hostSidebarRoutes } from "containers/Layout/HostSidebar";
import DrawerItem from "./DrawerItem";

type Props = {};

const HostDrawer = (props: Props) => {
  return (
    <>
      {hostSidebarRoutes.map((route, idx) => (
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

export default HostDrawer;
