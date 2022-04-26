import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ModalContext } from "contexts/modalContext";
import React, { useContext } from "react";
import { BsSpeedometer } from "react-icons/bs";

type Props = {};

const Sidebar = (props: Props) => {
  const { open, handleOpen } = useContext(ModalContext);

  return (
    <Drawer
      isOpen={open}
      autoFocus={false}
      placement="left"
      onClose={() => handleOpen(false)}
    >
      <DrawerOverlay />
      <DrawerContent width={250}>
        <DrawerBody>
          <Flex
            align="center"
            py={4}
            px={4}
            borderRadius={6}
            bg="gray.50"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "blue.300" }}
          >
            <Icon mr={3} as={BsSpeedometer} fontSize={18} />
            <Text fontWeight={600} color="gray.600">
              Dashboard
            </Text>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
