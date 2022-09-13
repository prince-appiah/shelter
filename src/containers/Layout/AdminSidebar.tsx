import { Spacer } from "@chakra-ui/react";
import {
  ADMIN_AMENITIES,
  ADMIN_DASHBOARD,
  ADMIN_LISTINGS,
  ADMIN_ROOM_TYPES,
  ADMIN_USERS,
  ADMIN_SETTINGS,
  ADMIN_BOOKINGS,
} from "config/constants/routes";
import React from "react";
import { AiOutlineApartment } from "react-icons/ai";
import { FaBook, FaBuilding, FaCog, FaToolbox, FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";

type Props = {};

export const adminSidebarRoutes: SidebarLinkProps[] = [
  { text: "Dashboard", link: ADMIN_DASHBOARD, icon: MdSpaceDashboard },
  { text: "Users", link: ADMIN_USERS, icon: FaUsers },
  { text: "Bookings", link: ADMIN_BOOKINGS, icon: FaBook },
  { text: "Listings", link: ADMIN_LISTINGS, icon: FaBuilding },
  { text: "Room Types", link: ADMIN_ROOM_TYPES, icon: AiOutlineApartment },
  { text: "Amenities", link: ADMIN_AMENITIES, icon: FaToolbox },
  { text: "Settings", link: ADMIN_SETTINGS, icon: FaCog },
];

const AdminSidebar = (props: Props) => {
  return (
    <>
      {adminSidebarRoutes.map((route, index) => (
        <div key={route.link}>
          <SidebarLink link={route.link} icon={route.icon} text={route.text} />
          <Spacer height={6} />
        </div>
      ))}
    </>
  );
};

export default AdminSidebar;
