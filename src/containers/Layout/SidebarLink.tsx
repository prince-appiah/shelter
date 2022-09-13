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
      justify={{ base: "center", md: "center", lg: "left" }}
      bg={
        pathname === link || pathname.includes(link)
          ? "brand.primary"
          : "gray.50"
      }
      color={
        pathname === link || pathname.includes(link) ? "white" : "gray.600"
      }
      cursor="pointer"
      py={{ base: 3, md: 4, lg: 3 }}
      px={{ base: 0, md: 0, lg: 3 }}
      _hover={{
        bg:
          pathname === link || pathname.includes(link)
            ? "brand.primary"
            : "gray.100",
      }}
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
