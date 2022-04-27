import { Spacer } from "@chakra-ui/react";
import {
  ADMIN_AMENITIES,
  ADMIN_DASHBOARD,
  ADMIN_LISTINGS,
  ADMIN_ROOM_TYPES,
  ADMIN_USERS,
} from "config/constants/routes";
import React from "react";
import { BsMicFill } from "react-icons/bs";
import { FaBuilding, FaToolbox, FaUsers } from "react-icons/fa";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";

type Props = {};

const routes: SidebarLinkProps[] = [
  { text: "Dashboard", link: ADMIN_DASHBOARD, icon: BsMicFill },
  { text: "Users", link: ADMIN_USERS, icon: FaUsers },
  { text: "Listings", link: ADMIN_LISTINGS, icon: FaBuilding },
  { text: "Room Types", link: ADMIN_ROOM_TYPES, icon: BsMicFill },
  { text: "Amenities", link: ADMIN_AMENITIES, icon: FaToolbox },
];

const AdminSidebar = (props: Props) => {
  return (
    <>
      {routes.map((route) => (
        <>
          <SidebarLink link={route.link} icon={route.icon} text={route.text} />
          <Spacer height={6} />
        </>
      ))}
    </>
  );
};

export default AdminSidebar;
