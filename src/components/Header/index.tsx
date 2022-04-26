import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, MenuButton, Text } from "@chakra-ui/react";
import Button from "components/Button";
import { HOME_ROUTE } from "config/constants/routes";
import { DropdownContext } from "contexts/dropdownContext";
import { ModalContext } from "contexts/modalContext";
import React, { useContext } from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiUser } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const { handleOpen, open } = useContext(ModalContext);
  const {
    handleDropdownOpen,
    handleDropdownView,
    dropdownView,
    open: dropdownOpen,
  } = useContext(DropdownContext);

  return (
    <Flex justify="space-between" bg="white" py={2} px={6} shadow="sm">
      {/* Left side */}
      <Flex
        align="center"
        cursor="pointer"
        onClick={() => navigate(HOME_ROUTE)}
      >
        <Icon as={BsFillHouseFill} fontSize={24} color="brand.primary" mr={2} />
        <Text fontSize={18} fontWeight={700} color="brand.primary">
          Shelter
        </Text>
      </Flex>
      {/* Right side */}
      <Flex align="center">
        <Flex
          align="center"
          p={1}
          cursor="pointer"
          _hover={{
            border: "0.05px solid gray",
          }}
          borderRadius={6}
          // as={MenuButton}
          isActive={dropdownOpen}
          onClick={() => {
            handleDropdownOpen(!dropdownOpen);
            handleDropdownView("profile");
          }}
        >
          {/* Profile Dropdown */}
          <Box
            position="relative"
            right={{ base: 120, md: 10 }}
            top={{ base: 8, md: 10 }}
          >
            <ProfileDropdown view={dropdownView} isOpen={dropdownOpen} />
          </Box>
          <Icon as={TiUser} fontSize={30} mr={{ base: 1, md: 3 }} />
          <Flex
            direction="column"
            mr={3}
            display={{ base: "none", md: "block" }}
          >
            <Text fontSize={15} fontWeight={700}>
              Prince Appiah
            </Text>
            <Text fontSize={14} fontWeight={500} color="gray.500">
              Host
            </Text>
          </Flex>
          <Icon as={ChevronDownIcon} fontSize={20} />
        </Flex>
        <Button
          variant="outline"
          ml={3}
          display={{ base: "block", md: "none" }}
          height="full"
          onClick={() => handleOpen(!open)}
        >
          <Icon as={GiHamburgerMenu} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
