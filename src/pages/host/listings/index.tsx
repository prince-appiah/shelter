import { Flex } from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import { useAppDispatch, useHostState } from "hooks/reduxHooks";
import React, { useEffect } from "react";
import { fetchMyBookingsAction } from "redux/customers/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { fetchHostBookingsAction } from "redux/hosts/asyncActions";
import { store } from "redux/store";
import { withProtected } from "shared/routes";

const HostListings = () => {
  return (
    <Flex direction="column" my={6} px={{ base: 2 }}>
      host listings
    </Flex>
  );
};

export default withProtected(HostListings, [roles.host]);
