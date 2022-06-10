import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export type SidebarLinkProps = {
  link: string;
  icon: any;
  text: string;
};

const SidebarLink = ({ link, icon, text }: SidebarLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Flex
      as={Link}
      to={link}
      borderRadius={6}
      align="center"
      justify={{ md: "center", lg: "left" }}
      bg={pathname === link ? "brand.primary" : "gray.50"}
      color={pathname === link ? "white" : "gray.600"}
      cursor="pointer"
      py={{ md: 4, lg: 3 }}
      px={{ md: 0, lg: 3 }}
      _hover={{ bg: pathname === link ? "brand.primary" : "gray.100" }}
      // _activeLink={{
      //   bg: "brand.primary",
      //   color: "white",
      //   svg: { color: "white" },
      // }}
      _focus={{ bg: "brand.primary", color: "white" }}
    >
      <Icon as={icon} fontSize={20} mr={{ lg: 4 }} />
      <Text fontWeight={600} display={{ base: "none", lg: "inline-flex" }}>
        {text}
      </Text>
    </Flex>
  );
};

export default SidebarLink;
