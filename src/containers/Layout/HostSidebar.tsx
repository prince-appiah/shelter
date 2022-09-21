import { Spacer } from "@chakra-ui/react";
import {
  ADMIN_AMENITIES,
  ADMIN_DASHBOARD,
  ADMIN_LISTINGS,
  ADMIN_ROOM_TYPES,
  ADMIN_USERS,
  ADMIN_SETTINGS,
  ADMIN_BOOKINGS,
  HOST_DASHBOARD,
  HOST_LISTINGS,
  HOST_BOOKINGS,
  HOST_SETTINGS,
} from "config/constants/routes";
import React from "react";
import { AiOutlineApartment } from "react-icons/ai";
import { FaBook, FaBuilding, FaCog, FaToolbox, FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";

type Props = {};

export const hostSidebarRoutes: SidebarLinkProps[] = [
  { text: "Dashboard", link: HOST_DASHBOARD, icon: MdSpaceDashboard },
  { text: "My Listings", link: HOST_LISTINGS, icon: FaBuilding },
  { text: "Bookings", link: HOST_BOOKINGS, icon: FaBook },
  { text: "Settings", link: HOST_SETTINGS, icon: FaCog },
];

const HostSidebar = (props: Props) => {
  return (
    <>
      {hostSidebarRoutes.map((route, index) => (
        <div key={route.link}>
          <SidebarLink link={route.link} icon={route.icon} text={route.text} />
          <Spacer height={6} />
        </div>
      ))}
    </>
  );
};

export default HostSidebar;
