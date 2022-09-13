import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { useAppDispatch } from "hooks/reduxHooks";
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { logoutAction } from "redux/auth/asyncActions";

type Props = {
  view: string;
  isOpen: boolean;
  // handleLogout: () => void;
};

const ProfileDropdown = ({ view, isOpen }: Props) => {
  // console.log("🚀 ~ handleLogout", handleLogout);
  const dispatch = useAppDispatch();

  return (
    <Menu isOpen={isOpen} isLazy closeOnBlur>
      <MenuList>
        <MenuItem icon={<AiTwotoneSetting fontSize={18} />}>Settings</MenuItem>
        <MenuItem
          icon={<FiLogOut fontSize={18} />}
          onClick={() => dispatch(logoutAction())}
        >
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
