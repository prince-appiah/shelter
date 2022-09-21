import { Flex } from "@chakra-ui/react";
import { roles } from "config/constants/vars";
import React from "react";
import { withProtected } from "shared/routes";

const HostSettings = () => {
  return (
    <Flex direction="column" my={6} px={{ base: 2 }}>
      host settings
    </Flex>
  );
};

export default withProtected(HostSettings, [roles.host]);
