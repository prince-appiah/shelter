import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

type Props = {
  view: string;
  isOpen: boolean;
};

const ProfileDropdown = ({ view, isOpen }: Props) => {
  return (
    <Menu isOpen={isOpen} isLazy closeOnBlur>
      <MenuList>
        <MenuItem icon={<AiTwotoneSetting fontSize={18} />}>Settings</MenuItem>
        <MenuItem icon={<FiLogOut fontSize={18} />}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
