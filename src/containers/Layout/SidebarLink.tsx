import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export type SidebarLinkProps = {
  link: string;
  icon: any;
  text: string;
};

const SidebarLink = ({ link, icon, text }: SidebarLinkProps) => {
  return (
    <Flex
      as={Link}
      to={link}
      borderRadius={6}
      align="center"
      justify={{ md: "center", lg: "left" }}
      bg="gray.50"
      cursor="pointer"
      py={{ md: 4, lg: 3 }}
      px={{ md: 0, lg: 3 }}
      _hover={{ bg: "gray.100" }}
      _activeLink={{
        bg: "brand.primary",
        color: "white",
        svg: { color: "white" },
      }}
      _focus={{ bg: "brand.primary" }}
    >
      <Icon as={icon} fontSize={20} mr={{ lg: 4 }} />
      <Text fontWeight={600} display={{ base: "none", lg: "inline-flex" }}>
        {text}
      </Text>
    </Flex>
  );
};

export default SidebarLink;
