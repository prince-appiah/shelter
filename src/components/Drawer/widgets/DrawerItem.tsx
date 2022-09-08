import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export type DrawerItemProps = {
  link: string;
  icon: any;
  text: string;
};

const DrawerItem = ({ link, icon, text }: DrawerItemProps) => {
  const { pathname } = useLocation();

  return (
    <Flex
      as={Link}
      to={link}
      borderRadius={6}
      align="center"
      //   justify={{ base: "space-between" }}
      bg={
        pathname === link || pathname.includes(link)
          ? "brand.primary"
          : "gray.50"
      }
      color={
        pathname === link || pathname.includes(link) ? "white" : "gray.600"
      }
      cursor="pointer"
      py={3}
      px={6}
      _hover={{
        bg:
          pathname === link || pathname.includes(link)
            ? "brand.primary"
            : "gray.100",
      }}
      _focus={{ bg: "brand.primary", color: "white" }}
    >
      <Icon as={icon} fontSize={20} mr={6} />
      <Text fontWeight={600}>{text}</Text>
    </Flex>
  );
};

export default DrawerItem;
