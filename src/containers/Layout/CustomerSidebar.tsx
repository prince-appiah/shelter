import { Box, Spacer } from "@chakra-ui/react";
import {
  CUSTOMER_BOOKINGS,
  CUSTOMER_DASHBOARD,
  CUSTOMER_SETTINGS,
} from "config/constants/routes";
import { FaCog, FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";

type Props = {};

export const customerSidebarRoutes: SidebarLinkProps[] = [
  { text: "Home", link: CUSTOMER_DASHBOARD, icon: MdSpaceDashboard },
  { text: "Bookings", link: CUSTOMER_BOOKINGS, icon: FaUsers },
  { text: "Settings", link: CUSTOMER_SETTINGS, icon: FaCog },
];

const CustomerSidebar = (props: Props) => {
  return (
    <>
      {customerSidebarRoutes.map((route, idx) => (
        <Box key={route?.link}>
          <SidebarLink
            link={route?.link}
            icon={route?.icon}
            text={route?.text}
          />
          <Spacer height={6} />
        </Box>
      ))}
    </>
  );
};

export default CustomerSidebar;
