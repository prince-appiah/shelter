import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import { DrawerContext } from "contexts/DrawerContext";
import { useAuthState } from "hooks/reduxHooks";
import { useContext } from "react";
import AdminDrawer from "./widgets/AdminDrawer";
import CustomerDrawer from "./widgets/CustomerDrawer";

type Props = {};

const Drawer = (props: Props) => {
  const { open, handleOpen } = useContext(DrawerContext);
  const { currentUser } = useAuthState();

  return (
    <ChakraDrawer
      isOpen={open}
      autoFocus={false}
      placement="left"
      size="xs"
      onClose={() => handleOpen(!open)}
    >
      <DrawerOverlay />
      <DrawerContent width={250}>
        <DrawerBody>
          {currentUser?.userType === roles.admin && <AdminDrawer />}
          {currentUser?.userType === roles.customer && <CustomerDrawer />}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
