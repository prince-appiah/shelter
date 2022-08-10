import { Flex } from "@chakra-ui/react";
import Drawer from "components/Drawer";
import Header from "components/Header";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Flex>
        {/* Drawer */}
        <Drawer />
        {/* Body */}
        <Flex direction="row" width="100%">
          {/* Sidebar - use global auth state to render sidebar based on user role */}
          <Sidebar />
          {/* Main content */}
          <Flex
            direction="column"
            width="100%"
            overflowY="scroll"
            height="100%"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
