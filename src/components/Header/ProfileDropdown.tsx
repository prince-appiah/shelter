import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { DropdownContext } from "contexts/dropdownContext";
import React, { useContext } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

type Props = {
  view: string;
  isOpen: boolean;
};

const ProfileDropdown = ({ view, isOpen }: Props) => {
  const { handleDropdownOpen, open } = useContext(DropdownContext);

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
